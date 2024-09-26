import TicketInfo from '../ticket-info'

import classes from './ticket.module.scss'

export default function Ticket({ item }) {
  const ticketInfo = item.segments.map((info) => <TicketInfo info={info} key={`id-${info.date}`} />)

  return (
    <li className={`${classes['tickets-list__ticket']} ${classes.ticket}`}>
      <header className={classes.ticket__header}>
        <div className={classes.ticket__price}>{item.price}</div>
        <img className={classes.ticket__logo} alt="logo" src={`http://pics.avs.io/99/36/${item.carrier}.svg`} />
      </header>
      <section className={classes.ticket__body}>{ticketInfo}</section>
    </li>
  )
}
