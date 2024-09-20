import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'
import './tabs.scss'

import { setTab } from '../../store/tabsSlice'

const tabs = [{name:'САМЫЙ ДЕШЕВЫЙ', id:'tabs_1'},{name:'САМЫЙ БЫСТРЫЙ', id:'tabs_2'},{name:'ОПТИМАЛЬНЫЙ', id:'tabs_3'},]

export default function Tabs(){
  const dispatch = useDispatch()
  const activeTabs = useSelector(state=> state.tabs.activeTab)
 
  return (
    <ul className="filter-menu__tabs tabs">
      {tabs.map((tab)=>{
        const buttonClass = classNames({
          'tabs__button':true,
          'tabs__button--active':tab.id === activeTabs
        })
        return(
          <li className="tabs__item"><button key={tab.id} onClick={ () => dispatch(setTab({newActiveTab:tab.id}))} className={buttonClass} type='button' >{tab.name}</button></li>
        )})}
    </ul>
  )
}