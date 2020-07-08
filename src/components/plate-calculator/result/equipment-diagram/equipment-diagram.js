import React from "react"
import PropTypes from "prop-types"
import PlatePropType from "../../prop-types/plate"
import classnames from "classnames";

const EquipmentDiagram = ({
  plates
}) => {
  const plateElements = plates.map(({ weight, unit, count }) => {
    const plateClass = `plate__${weight.toString().replace(".", "p")}${unit}`

    return [...Array(count/2).keys()].reduce((elements, index) => {
      return [...elements, <li key={`${plateClass}--${index}`} className={classnames("plate", plateClass)}></li>]
    }, [])
  })

  return (
    <div className="equipment-diagram">
      <ol className="loaded-barbell">
        <li className="barbell barbell--bar"></li>
        { plateElements }
        <li className="barbell barbell--sleeve barbell__45lbs"></li>
      </ol>
    </div>
  )
}

EquipmentDiagram.propTypes = {
  plates: PropTypes.arrayOf(PlatePropType).isRequired,
};

export default EquipmentDiagram
