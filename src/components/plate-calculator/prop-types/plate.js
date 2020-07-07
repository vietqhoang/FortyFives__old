import PropTypes from "prop-types"

export default PropTypes.shape({
  weight: PropTypes.number,
  unit: PropTypes.string,
  system: PropTypes.string,
  availableCount: PropTypes.number,
})
