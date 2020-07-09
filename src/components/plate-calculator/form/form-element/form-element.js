import React from "react"
import ChildrenPropType from "../../lib/prop-types/children"

const FormElement = ({
  children,
}) => {
  return (
    <div className="mb-6">
      {children}
    </div>
  )
}

FormElement.propTypes = {
  children: ChildrenPropType.isRequired
};

export default FormElement
