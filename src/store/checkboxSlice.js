import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'

export const fetchTickets = createAsyncThunk('checkbox/fetchTickets', async (searchId, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
    const data = await response.json()
    return data
  } catch (error) {
    return rejectWithValue(error.massage)
  }
})

const checkboxSlice = createSlice({
  name: 'checkbox',
  initialState: {
    checkboxFlag: 0,
    activeTab: 'cheap',
    searchId: '',
    loading: null,
    error: null,
    tickets: [],
    stop: false,
  },
  reducers: {
    addFlag(state, action) {
      state.checkboxFlag += action.payload.flagId
    },
    delFlag(state, action) {
      state.checkboxFlag -= action.payload.flagId
    },
    allFlag(state, action) {
      state.checkboxFlag = action.payload.flagId
    },
    setTab(state, action) {
      state.activeTab = action.payload.newActiveTab
      switch (action.payload.newActiveTab) {
        case 'cheap':
          state.tickets.sort((a, b) => a.price - b.price)
          break
        case 'fast':
          state.tickets.sort((a, b) => {
            const durationA = a.segments[0].duration + a.segments[1].duration
            const durationB = b.segments[0].duration + b.segments[1].duration
            return durationA - durationB
          })
          break
        case 'average':
          state.tickets.sort((a, b) => {
            const averageValueA = a.price / (a.segments[0].duration + a.segments[1].duration)
            const averageValueB = b.price / (b.segments[0].duration + b.segments[1].duration)
            return averageValueA - averageValueB
          })
          break
        default:
          break
      }
    },
    setSerchId(state, action) {
      state.searchId = action.payload.searchId
    },
  },
  extraReducers: (bilder) => {
    bilder
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.loading = false
        state.tickets.push(...action.payload.tickets)
        state.stop = action.payload.stop
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addMatcher(fetchTickets.settled, (state) => {
        switch (state.activeTab) {
          case 'cheap':
            state.tickets.sort((a, b) => a.price - b.price)
            break
          case 'fast':
            state.tickets.sort((a, b) => {
              const durationA = a.segments[0].duration + a.segments[1].duration
              const durationB = b.segments[0].duration + b.segments[1].duration
              return durationA - durationB
            })
            break
          case 'average':
            state.tickets.sort((a, b) => {
              const averageValueA = a.price / (a.segments[0].duration + a.segments[1].duration)
              const averageValueB = b.price / (b.segments[0].duration + b.segments[1].duration)
              return averageValueA - averageValueB
            })
            break
          default:
            break
        }
      })
  },
})

const allTickets = (state) => state.checkbox.tickets

const flag = (state) => state.checkbox.checkboxFlag

function flagGiver(maxStops) {
  switch (maxStops) {
    case 3:
      return 8
    case 2:
      return 4
    case 1:
      return 2
    case 0:
      return 1
    default:
      throw new Error()
  }
}

export const arrayTickets = createSelector([allTickets, flag], (tickets, flags) =>
  tickets.filter((ticket) => {
    const stopsTo = ticket.segments[0].stops.length
    const stopsBack = ticket.segments[1].stops.length
    const flagTo = flagGiver(stopsTo)
    const flagBack = flagGiver(stopsBack)
    return (flags & flagTo) !== 0 && (flags & flagBack) !== 0
  })
)

export const { setTab, addFlag, delFlag, allFlag, setSerchId } = checkboxSlice.actions

export default checkboxSlice.reducer
