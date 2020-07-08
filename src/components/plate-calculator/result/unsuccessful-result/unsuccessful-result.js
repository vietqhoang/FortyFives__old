import React from "react"
import PropTypes from "prop-types"
import PlatePropType from "../../prop-types/plate"
import ExerciseWeightPropType from "../../prop-types/exercise-weight"
import PlateTable from "../plate-table/plate-table"

const UnsuccessfulResult = ({
  suggestionPlates,
  utilizedPlates,
  exerciseWeightRemaining,
}) => {
  return (
    <div className="unsuccessful-result">
      <div className="bg-red-100 p-4 mb-4 rounded text-center">
        <p className="text-red-800">No adequate plates for the <strong>remaining {exerciseWeightRemaining.weight} {exerciseWeightRemaining.unit}</strong>.</p>
      </div>

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
