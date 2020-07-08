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
    const classes = classnames(
      "plate",
      plateClass,
      "inline-block",
      "relative",
      "h-full",
      "align-middle",
      "rounded-md",
      "mx-px",
      "w-8"
    )

    return [...Array(count/2).keys()].reduce((elements, index) => {
      return [...elements, <li key={`${plateClass}--${index}`} className={classes} title={`${weight} ${unit} plate`}></li>]
    }, [])
  })

  const barbellClasses = ["inline-block", "relative", "align-middle", "mx-px", "bg-gray-400", "h-8", "w-16"]

  return (
    <div className="equipment-diagram text-center">
      <ol className="loaded-barbell inline-block m-0 p-0">
        <li className={classnames("barbell", "barbell--bar", ...barbellClasses)}></li>
        { plateElements }
        <li
          className={classnames("barbell", "barbell--sleeve", `barbell__${barbell.weight}${barbell.unit}`, ...barbellClasses, "rounded-r-md")}
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
