import React from "react"
import PropTypes from "prop-types"

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
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default ColumnLayout
