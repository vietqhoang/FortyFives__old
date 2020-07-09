import React from "react"
import PropTypes from "prop-types"
import BarbellPropType from "../../lib/prop-types/barbell"
import PlatePropType from "../../lib/prop-types/plate"
import classnames from "classnames";

const EquipmentDiagram = ({
  barbell,
  plates,
}) => {
  const plateElements = plates.map(({ weight, unit, count }) => {
    const plateKey = `plate__${weight.toString().replace(".", "p")}${unit}`
    const classes = classnames(
      "plate",
      "inline-block",
      "relative",
      "h-full",
      "align-middle",
      "rounded-md",
      "mx-px",
      {
        "w-8": weight < 100,
        "w-10": weight >= 100,
      }
    )

    return [...Array(count/2).keys()].reduce((elements, index) => {
      return [...elements, <li key={`${plateKey}--${index}`} data-weight={weight} data-unit={unit} className={classes} title={`${weight} ${unit} plate`}></li>]
    }, [])
  })

  const barbellClasses = ["inline-block", "relative", "align-middle", "mx-px", "h-full", "w-16"]

  return (
    <div className="equipment-diagram text-center">
      <ol className="loaded-barbell inline-block m-0 p-0">
        <li className={classnames("barbell", "barbell--bar", ...barbellClasses)}></li>
        { plateElements }
        <li
          className={classnames("barbell", "barbell--sleeve", ...barbellClasses)}
          title={`${barbell.weight} ${barbell.unit} barbell`}
          data-weight={barbell.weight}
          data-unit={barbell.unit}
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
