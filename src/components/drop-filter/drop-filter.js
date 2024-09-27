import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import classNames from 'classnames'

import { addFlag, delFlag, allFlag } from '../../store/aviasalesSlice'

import clases from './drop-filter.module.scss'

export default function DropFilter({ screenWidth }) {
  const [filterOpen, setFilterOpen] = useState(false)
  const dispatch = useDispatch()
  const checkboxFlag = useSelector((state) => state.aviasales.checkboxFlag)

  const allCheckboxClick = (e) => dispatch(allFlag(e.target.checked ? { flagId: 15 } : { flagId: 0 }))

  const checkboxClick = (e) =>
    dispatch(e.target.checked ? addFlag({ flagId: Number(e.target.id) }) : delFlag({ flagId: Number(e.target.id) }))

  const dropFilterItem = [
    { flag: 1, name: 'Без пересадок' },
    { flag: 2, name: '1 пересадка' },
    { flag: 4, name: '2 пересадки' },
    { flag: 8, name: '3 пересадки' },
  ]

  const dropFilterClass = classNames({
    [clases['drop-filter__list']]: true,
    [clases['drop-filter__list--active']]: filterOpen || screenWidth > 650,
  })
  const dropFilter = dropFilterItem.map((filter) => (
    <li className={clases['drop-filter__item']} key={`drop-${filter.flag}`}>
      <label htmlFor={filter.flag} className={clases['drop-filter__text']}>
        <input
          id={filter.flag}
          className={clases['drop-filter__input']}
          checked={(checkboxFlag & filter.flag) !== 0}
          onChange={(e) => checkboxClick(e)}
          type="checkbox"
        />
        <span className={clases['drop-filter__checkbox']} />
        {filter.name}
      </label>
    </li>
  ))

  return (
    <div className={`${clases['filter-menu__drop-filter']} ${clases['drop-filter']}`}>
      {screenWidth > 650 ? (
        <div className={clases['drop-filter__title']}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      ) : (
        <button
          className={clases['drop-filter__button']}
          onClick={() => setFilterOpen(!filterOpen)}
          aria-label="filter"
          type="button"
        />
      )}
      <ul className={dropFilterClass} onMouseLeave={() => setFilterOpen(!filterOpen)}>
        <li className={clases['drop-filter__item']}>
          <label htmlFor="0" className={clases['drop-filter__text']}>
            <input
              id="0"
              className={clases['drop-filter__input']}
              checked={checkboxFlag === 15}
              onChange={(e) => allCheckboxClick(e)}
              type="checkbox"
            />
            <span className={clases['drop-filter__checkbox']} />
            Все
          </label>
        </li>
        {dropFilter}
      </ul>
    </div>
  )
}
