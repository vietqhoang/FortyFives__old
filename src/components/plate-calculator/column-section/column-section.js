import React from "react"
import ChildrenPropType from "../lib/prop-types/children"

const ColumnSection = ({
  children,
}) => {
  return (
    <div className="mb-8">
      {children}
    </div>
  )
}

ColumnSection.propTypes = {
  children: ChildrenPropType.isRequired
};

export default ColumnSection
