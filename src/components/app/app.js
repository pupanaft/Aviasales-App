export default function App() {
  return (
    <>
      <header className="aviasales__header header">
        <img className="header__logo" alt="aviasales_logo" />
      </header>
      <main className="aviasales__content content">
        <header className="content__filter-menu filter-menu">
          <ul className="filter-menu__drop-filter drop-filter">
            <li className="drop-filter__item"><div className="drop-filter__text">sss</div></li>
            <li className="drop-filter__item"><div className="drop-filter__text">sss</div></li>
            <li className="drop-filter__item"><div className="drop-filter__text">sss</div></li>
            <li className="drop-filter__item"><div className="drop-filter__text">sss</div></li>
          </ul>
          <ul className="filter-menu__static-filter static-filter">
            <li className="static-filter__item"><div className="static-filter__text">sss</div></li>
            <li className="static-filter__item"><div className="static-filter__text">sss</div></li>
            <li className="static-filter__item"><div className="static-filter__text">sss</div></li>
          </ul>
        </header>
        <ul className="content__tickets-list tickets-list">
          <li className="tickets-list__ticket ticket">ss</li>
        </ul>
      </main>
    </>
  )
}
