import React from "react"
import ChildrenPropType from "../lib/prop-types/children"

const SectionHeader = ({
  children,
}) => {
  return (
    <h2 className="text-lg font-bold">
      {children}
    </h2>
  )
}

SectionHeader.propTypes = {
  children: ChildrenPropType.isRequired
};

export default SectionHeader
