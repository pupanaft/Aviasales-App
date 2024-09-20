import './ticket.scss'

export default function Ticket(){
  return(
    <li className="tickets-list__ticket ticket">
      <header className="ticket__header">
        <div className="ticket__price">13000</div>
        <div className="ticket__logo">13000</div>
      </header>
      
      <section className='ticket__body'>
        <ul className="ticket__info ticket__info--to">
          <li className="ticket__route">
            <div className='ticket__thead'>MOW – HKT</div>
            <div className='ticket__tdeck'>10:45 – 08:00</div>
          </li>
          <li className="ticket__lenght">
            <div className='ticket__thead'>{'В пути'.toLocaleUpperCase()}</div>
            <div className='ticket__tdeck'>21ч 15м</div>
          </li>
          <li className="ticket__stops">
            <div className='ticket__thead'>{'2 пересадки'.toLocaleUpperCase()}</div>
            <div className='ticket__tdeck'>HKG, JNB</div>
          </li>
        </ul>
        <ul className='ticket__info ticket__info--back'>
          <li className="ticket__route">
            <div className='ticket__thead'>MOW – HKT</div>
            <div className='ticket__tdeck'>10:45 – 08:00</div>
          </li>
          <li className="ticket__lenght">
            <div className='ticket__thead'>{'В пути'.toLocaleUpperCase()}</div>
            <div className='ticket__tdeck'>13ч 30м</div>
          </li>
          <li className="ticket__stops">
            <div className='ticket__thead'>{'1 пересадка'.toLocaleUpperCase()}</div>
            <div className='ticket__tdeck'>HKG</div>
          </li>
        </ul>
      </section>
    </li>
  )
}