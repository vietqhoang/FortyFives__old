import React from "react"
import ChildrenPropType from "../lib/prop-types/children"

const SectionHeader = ({
  children,
}) => {
  return (
    <h3 className="text-lg font-bold mb-2">
      {children}
    </h3>
  )
}

SectionHeader.propTypes = {
  children: ChildrenPropType.isRequired
};

export default SectionHeader
