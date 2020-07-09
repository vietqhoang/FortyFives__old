import PropTypes from "prop-types"

export default PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  weightUnit: PropTypes.string,
  weightLimit: PropTypes.number,
  step: PropTypes.number,
})
