import React from "react"
import PropTypes from "prop-types"
import PlatePropType from "../../lib/prop-types/plate"
import ExerciseWeightPropType from "../../lib/prop-types/exercise-weight"
import Alert from "../../alert/alert"
import PlateTable from "../plate-table/plate-table"

const UnsuccessfulResult = ({
  suggestionPlates,
  utilizedPlates,
  exerciseWeightRemaining,
}) => {
  return (
    <div className="unsuccessful-result">
      <Alert>
        No adequate plates for the <strong>remaining {exerciseWeightRemaining.weight} {exerciseWeightRemaining.unit}</strong>.
      </Alert>

      <div className="mb-8">
        <PlateTable
          caption="Utilized plates you have available"
          plates={utilizedPlates}
          dividePlates={false}
        />
      </div>

      <div>
        <PlateTable
          caption="Recommended additional plates to load the bar to your exercise weight"
          plates={suggestionPlates}
          dividePlates={false}
        />
      </div>
    </div>
  )
}

UnsuccessfulResult.propTypes = {
  exerciseWeightRemaining: ExerciseWeightPropType.isRequired,
  suggestionPlates: PropTypes.arrayOf(PlatePropType).isRequired,
  utilizedPlates: PropTypes.arrayOf(PlatePropType).isRequired,
};

export default UnsuccessfulResult
