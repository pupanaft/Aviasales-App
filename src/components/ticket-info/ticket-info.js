import { add, format } from 'date-fns'

import classes from './ticket-info.module.scss'

export default function TicketInfo({ info }) {
  const timeOrigin = format(new Date(info.date), 'H:mm')
  const timeDestination = format(add(new Date(info.date), { minutes: info.duration }), 'H:mm')
  const routeTime = `${timeOrigin} - ${timeDestination}`
  const tripDuration = `${(info.duration - (info.duration % 60)) / 60}ч ${info.duration % 60}м`

  const textStops = (text) => {
    switch (text.length) {
      case 3:
        return '3 пересадки'
      case 2:
        return '2 пересадки'
      case 1:
        return '1 пересадка'
      default:
        return 'Без пересадок'
    }
  }
  return (
    <ul className={classes.ticket__info}>
      <li className={classes.ticket__route}>
        <div className={classes.ticket__thead}>{`${info.origin} – ${info.destination} `}</div>
        <div className={classes.ticket__tdeck}>{routeTime}</div>
      </li>
      <li className={classes.ticket__lenght}>
        <div className={classes.ticket__thead}>{'В пути'.toLocaleUpperCase()}</div>
        <div className={classes.ticket__tdeck}>{tripDuration}</div>
      </li>
      <li className={classes.ticket__stops}>
        <div className={classes.ticket__thead}>{textStops(info.stops).toLocaleUpperCase()}</div>
        <div className={classes.ticket__tdeck}>{info.stops.length > 0 ? info.stops.join(', ') : 'C ветерком'}</div>
      </li>
    </ul>
  )
}
