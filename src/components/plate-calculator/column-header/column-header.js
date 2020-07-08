import React from "react"
import ChildrenPropType from "../lib/prop-types/children"

const ColumnHeader = ({
  children,
}) => {
  return (
    <h2 className="text-xl pb-2 mb-4 font-bold border-b border-solid border-1 border-gray-400">
      {children}
    </h2>
  )
}

ColumnHeader.propTypes = {
  children: ChildrenPropType.isRequired
};

export default ColumnHeader
