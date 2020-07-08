import React from "react"
import PropTypes from "prop-types"
import BarbellPropType from "../prop-types/barbell"
import PlatePropType from "../../prop-types/plate"
import EquipmentDiagram from "../equipment-diagram/equipment-diagram"
import PlateTable from "../plate-table/plate-table"

const SuccessfulResult = ({
  barbell,
  plates,
}) => {
  return (
    <div className="successful-result">
      <EquipmentDiagram
        barbell={barbell}
        plates={plates}
      />

      <h3 className="text-center text-gray-600 text-2xl my-4">{(exerciseWeight.weight - equipment.barbell.weight)/2} {exerciseWeight.unit}/side</h3>

      <PlateTable
        caption="Load each side of the bar with the following plates"
        plates={plates}
      />
    </div>
  )
}

SuccessfulResult.propTypes = {
  barbell: BarbellPropType.isRequired,
  plates: PropTypes.arrayOf(PlatePropType).isRequired,
};

export default SuccessfulResult
