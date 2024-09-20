import { useDispatch, useSelector } from 'react-redux'

import {  addFlag, delFlag, allFlag} from '../../store/checkboxSlice'
import './drop-filter.scss'

export default function DropFilter(){
  const dispatch = useDispatch()
  const checkboxFlag = useSelector( state => state.checkbox.checkboxFlag)

  const allCheckboxClick=(e)=> dispatch(allFlag( e.target.checked? {flagId:15} : {flagId:0}))

  const checkboxClick = (e) => dispatch( e.target.checked ? addFlag({flagId:Number(e.target.id)}) : delFlag({flagId:Number(e.target.id)}))
  
  return (
    <div className="filter-menu__drop-filter drop-filter">
      <span style={{color:'red'}}>{checkboxFlag}</span>
      <button className="drop-filter__button" type='button'>КОЛИЧЕСТВО ПЕРЕСАДОК</button>
      <ul className='drop-filter__list'>
        <li className="drop-filter__item">
          <label htmlFor='0' className='drop-filter__text'>
            <input id='0' className="drop-filter__input" checked={checkboxFlag===15} onChange={(e)=>allCheckboxClick(e)} type="checkbox" />
            <span className='drop-filter__checkbox' />
            Все
          </label>
        </li>
        <li className="drop-filter__item">
          <label htmlFor='1' className='drop-filter__text'>
            <input id='1' className="drop-filter__input" checked={checkboxFlag%2!== 0} onChange={(e)=>checkboxClick(e)} type="checkbox" />
            <span className='drop-filter__checkbox' />
            Без пересадок
          </label>
        </li>
        <li className="drop-filter__item">
          <label htmlFor='2' className='drop-filter__text'>
            <input id='2' className="drop-filter__input" checked={(checkboxFlag%4)>=2} onChange={(e)=>checkboxClick(e)} type="checkbox" />
            <span className='drop-filter__checkbox' />
            1 пересадка
          </label>         
        </li>
        <li className="drop-filter__item">
          <label htmlFor='4' className='drop-filter__text'>
            <input id='4' className="drop-filter__input"  checked={(checkboxFlag%8)>=4} onChange={(e)=>checkboxClick(e)} type="checkbox" />
            <span className='drop-filter__checkbox' />
            2 пересадки
          </label>
        </li>
        <li className="drop-filter__item">
          <label htmlFor='8' className='drop-filter__text'>
            <input id='8' className="drop-filter__input" checked={(checkboxFlag%16)>=8} onChange={(e)=>checkboxClick(e)} type="checkbox" />
            <span className='drop-filter__checkbox' />
            3 пересадки
          </label>
        </li>
      </ul>
    </div>
  )
}