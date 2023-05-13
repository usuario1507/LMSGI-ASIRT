import React from 'react'
import PropTypes from 'prop-types'

const NotificationCard = ({ message, type, id }) => {
 return <span> Notificacion: {message}, Type: {type}
</span>
}
NotificationCard.propTypes = {
 message: PropTypes.string.isRequired,
 type: PropTypes.oneOf(["error", "warning", "success"]),
 id: PropTypes.number.isRequired
}
export default NotificationCard
