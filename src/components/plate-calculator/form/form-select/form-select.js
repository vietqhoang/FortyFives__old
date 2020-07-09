import React from "react"
import PropTypes from "prop-types"
import ChildrenPropType from "../../lib/prop-types/children"

const FormSelect = ({
  children,
  id,
  value,
  handleOnChange
}) => {
  return (
    <select
      id={id}
      className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      onChange={handleOnChange}
      value={value}
    >
      {children}
    </select>
  )
}

FormSelect.propTypes = {
  children: ChildrenPropType.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default FormSelect
