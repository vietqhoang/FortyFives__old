import React from "react"
import PropTypes from "prop-types"
import BarbellPropType from "../../lib/prop-types/barbell"
import PlatePropType from "../../lib/prop-types/plate"
import ExerciseWeightPropType from "../../lib/prop-types/exercise-weight"
import EquipmentDiagram from "../equipment-diagram/equipment-diagram"
import PlateTable from "../plate-table/plate-table"

const SuccessfulResult = ({
  selectedBarbell,
  plates,
  exerciseWeight,
}) => {
  const isPlatesPresent = plates.length > 0
  const diagramSupplementText = isPlatesPresent && `${(exerciseWeight.weight - selectedBarbell.weight)/2} ${exerciseWeight.unit}/side` || `No plates required. Lift the barbell!`

  return (
    <div className="successful-result">
      <EquipmentDiagram
        barbell={selectedBarbell}
        plates={plates}
      />

      <h3 className="text-center text-gray-600 text-2xl my-4">
        {diagramSupplementText}
      </h3>

      {
        isPlatesPresent && (
          <PlateTable
            caption="Load each side of the bar with the following plates"
            plates={plates}
          />
        )
      }
    </div>
  )
}

SuccessfulResult.propTypes = {
  selectedBarbell: BarbellPropType.isRequired,
  exerciseWeight: ExerciseWeightPropType.isRequired,
  plates: PropTypes.arrayOf(PlatePropType).isRequired,
};

export default SuccessfulResult
