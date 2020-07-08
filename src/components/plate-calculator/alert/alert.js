import React from "react"
import ChildrenPropType from "../lib/prop-types/children"

const Alert = ({
  children,
}) => {
  return (
    <div className="bg-red-100 p-4 mb-4 rounded text-center">
      <p className="text-red-800">{children}</p>
    </div>
  )
}

Alert.propTypes = {
  children: ChildrenPropType.isRequired
};

export default Alert
