import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { fetchTickets, setSerchId, arrayTickets, stop, loading, searchId } from '../../store/aviasalesSlice'
import DropFilter from '../drop-filter'
import Ticket from '../ticket'
import Tabs from '../tabs'
import logo from '../../images/logo.png'

import clases from './app.module.scss'

export default function App() {
  const [visibleTicketsId, setVisibleTicketsId] = useState(5)
  const [width, setWidth] = useState(window.innerWidth)
  const stoped = useSelector(stop)
  const load  = useSelector(loading)
  const search  = useSelector(searchId)
  const sortedTickets = useSelector(arrayTickets)

  const dispatch = useDispatch()
  useEffect(() => {
    fetch('https://aviasales-test-api.kata.academy/search')
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json()
          return data
        }
        return null
      })
      .then((res) => {
        dispatch(setSerchId({ searchId: res.searchId }))
      })
      .catch((err) => {
        throw new Error(err)
      })
  }, [dispatch])

  useEffect(() => {
    if (!stoped && !load) {
      dispatch(fetchTickets(search))
    }
  }, [dispatch, stoped, load, search])

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const ticketList = sortedTickets
    .slice(0, visibleTicketsId)
    .map((info) => <Ticket item={info} key={`ticket-${Math.random(info.price)}`} />)
  return (
    <div className={clases.aviasales}>
      <header className={clases.aviasales__header}>
        <img className={clases.aviasales__logo} src={logo} alt="aviasales_logo" />
      </header>
      {!stoped ? (
        <div className={`${clases.aviasales__loader} ${clases.loader}`}>
          <div className={clases.loader__element} />
        </div>
      ) : null}
      <main className={`${clases.aviasales__content} ${clases.content}`}>
        {width > 650 ? <DropFilter key="1" screenWidth={width} /> : null}
        <section className={clases.content__wrapper}>
          <header className={`${clases['content__filter-menu']} ${clases['filter-menu']}`}>
            {width < 650 ? <DropFilter key="2" width={width} /> : null}
            <Tabs />
          </header>
          <ul className={`${clases['content__tickets-list']} ${clases['tickets-list']}`}>
            {sortedTickets.length !== 0 ? ticketList : <div>Рейсов, подходящих под заданные фильтры, не найдено</div>}
          </ul>
          <footer className={clases.content__footer}>
            {sortedTickets.length !== 0 ? (
              <button
                className={clases['content__get-button']}
                onClick={() => setVisibleTicketsId(visibleTicketsId + 5)}
                type="button"
              >
                ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
              </button>
            ) : null}
          </footer>
        </section>
      </main>
    </div>
  )
}
