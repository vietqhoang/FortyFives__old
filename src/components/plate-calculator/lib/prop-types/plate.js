import PropTypes from "prop-types"

export default PropTypes.shape({
  id: PropTypes.number,
  weight: PropTypes.number,
  unit: PropTypes.string,
  unitSystem: PropTypes.string,
  count: PropTypes.number,
})
