import React from "react"
import ChildrenPropType from "../lib/prop-types/children"

const ColumnSection = ({
  children,
}) => {
  return (
    <div className="">
      {children}
    </div>
  )
}

ColumnSection.propTypes = {
  children: ChildrenPropType.isRequired
};

export default ColumnSection
