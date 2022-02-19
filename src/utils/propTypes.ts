import PropTypes from 'prop-types'

export const menuItemsPropTypes = PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, href: PropTypes.string }))
