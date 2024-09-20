

import DropFilter from '../drop-filter'
import Ticket from '../ticket'
import Tabs from '../tabs'

import './app.scss'
import logo from './logo.png'



export default function App() {


  return (
    <>
      <header className="aviasales__header">
        <img className="aviasales__logo" src={logo} alt="aviasales_logo" />
      </header>
      <main className="aviasales__content content">
        <DropFilter />
        <section className='content__wrapper'>
          <header className="content__filter-menu filter-menu">
            {/* <DropFilter /> */}
            <Tabs/>
          </header>
          <ul className="content__tickets-list tickets-list">
            <Ticket/>
            <Ticket/>
            <Ticket/>
          </ul>
          <footer className='content__footer'>
            <button className='content__get-button' type='button'>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</button>
          </footer>
        </section>
      </main>
    </>
  )
}
