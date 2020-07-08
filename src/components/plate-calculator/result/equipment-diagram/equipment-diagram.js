import React from "react"
import PropTypes from "prop-types"
import BarbellPropType from "../../prop-types/barbell"
import PlatePropType from "../../prop-types/plate"
import classnames from "classnames";

const EquipmentDiagram = ({
  barbell,
  plates,
}) => {
  const plateElements = plates.map(({ weight, unit, count }) => {
    const plateClass = `plate__${weight.toString().replace(".", "p")}${unit}`

    return [...Array(count/2).keys()].reduce((elements, index) => {
      return [...elements, <li key={`${plateClass}--${index}`} className={classnames("plate", plateClass)} title={`${weight} ${unit} plate`}></li>]
    }, [])
  })

  return (
    <div className="equipment-diagram">
      <ol className="loaded-barbell">
        <li className="barbell barbell--bar"></li>
        { plateElements }
        <li
          className={classnames("barbell", "barbell--sleeve", `barbell__${barbell.weight}${barbell.unit}`)}
          title={`${barbell.weight} ${barbell.unit} barbell`}
        ></li>
      </ol>
    </div>
  )
}

EquipmentDiagram.propTypes = {
  barbell: BarbellPropType.isRequired,
  plates: PropTypes.arrayOf(PlatePropType).isRequired,
};

export default EquipmentDiagram
