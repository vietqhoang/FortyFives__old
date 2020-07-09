import React from "react"
import PropTypes from "prop-types"
import PlatePropType from "../../lib/prop-types/plate"
import BarbellPropType from "../../lib/prop-types/barbell"
import ExerciseWeightPropType from "../../lib/prop-types/exercise-weight"
import Alert from "../../alert/alert"
import EquipmentDiagram from "../equipment-diagram/equipment-diagram"
import PlateTable from "../plate-table/plate-table"
import sortByDescendingWeight from "../../lib/helpers/sort"


const UnsuccessfulResult = ({
  suggestionPlates,
  utilizedPlates,
  exerciseWeightRemaining,
  selectedBarbell,
}) => {
  const combinedPlates = sortByDescendingWeight([...utilizedPlates.filter(({count}) => count > 0), ...suggestionPlates])

  return (
    <div className="unsuccessful-result">
      <Alert>
        No adequate plates for the <strong>remaining {exerciseWeightRemaining.weight} {exerciseWeightRemaining.unit}</strong>.
      </Alert>

      <EquipmentDiagram
        barbell={selectedBarbell}
        plates={combinedPlates}
      />

      <div>
        <PlateTable
          caption="Recommended configuration based on available plates"
          plates={combinedPlates}
        />
      </div>
    </div>
  )
}

UnsuccessfulResult.propTypes = {
  exerciseWeightRemaining: ExerciseWeightPropType.isRequired,
  suggestionPlates: PropTypes.arrayOf(PlatePropType).isRequired,
  utilizedPlates: PropTypes.arrayOf(PlatePropType).isRequired,
  selectedBarbell: BarbellPropType.isRequired,
};

export default UnsuccessfulResult
