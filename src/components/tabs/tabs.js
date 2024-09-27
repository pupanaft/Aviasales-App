import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'

import { setTab, tabs } from '../../store/aviasalesSlice'

import classes from './tabs.module.scss'

const tabsArr = [
  { name: 'САМЫЙ ДЕШЕВЫЙ', id: 'cheap' },
  { name: 'САМЫЙ БЫСТРЫЙ', id: 'fast' },
  { name: 'ОПТИМАЛЬНЫЙ', id: 'average' },
]

export default function Tabs() {
  const dispatch = useDispatch()
  const activeTabs = useSelector(tabs)

  return (
    <ul className={`${classes['filter-menu__tabs']} ${classes.tabs}`}>
      {tabsArr.map((tab) => {
        const buttonClass = classNames({
          [classes.tabs__button]: true,
          [classes['tabs__button--active']]: tab.id === activeTabs,
        })
        return (
          <li className={classes.tabs__item} key={tab.id}>
            <button onClick={() => dispatch(setTab({ newActiveTab: tab.id }))} className={buttonClass} type="button">
              {tab.name}
            </button>
          </li>
        )
      })}
    </ul>
  )
}
