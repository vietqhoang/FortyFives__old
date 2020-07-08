import React from "react"
import ChildrenPropType from "../lib/prop-types/children"

const ColumnLayout = ({
  children,
}) => {
  return (
    <div className="flex-1 px-8 pt-6 pb-8">
      {children}
    </div>
  )
}

ColumnLayout.propTypes = {
  children: ChildrenPropType.isRequired
};

export default ColumnLayout
