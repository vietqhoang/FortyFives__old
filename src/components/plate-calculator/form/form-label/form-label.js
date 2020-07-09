import React from "react"
import PropTypes from "prop-types"
import ChildrenPropType from "../../lib/prop-types/children"

const FormLabel = ({
  children,
  htmlFor,
}) => {
  return (
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  )
}

FormLabel.propTypes = {
  children: ChildrenPropType.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

export default FormLabel
