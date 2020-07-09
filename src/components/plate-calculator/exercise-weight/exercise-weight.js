import React from "react"
import PropTypes from "prop-types"
import UnitSystemPropType from "../lib/prop-types/unit-system"

const ExerciseWeight = ({
  handleSetExerciseWeight,
  selectedUnitSystem,
}) => {
  const formControlId = "exercise-weight"
  const { weightUnit, id, weightLimit, step } = selectedUnitSystem

  const removeDecimal = (value) => value.replace(".", "")
  const limitValue = (value, limit) => value > limit ? limit : value

  return (
    <form>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor={formControlId}
        >
          Exercise weight ({weightUnit})
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={formControlId}
          type="number"
          min="0"
          max={weightLimit}
          step={step}
          placeholder="Weight being lifted?"
          onChange={(e) => {
            e.target.value = limitValue(removeDecimal(e.target.value), weightLimit)
            handleSetExerciseWeight({ weight: parseInt(e.target.value), unit: weightUnit, unitSystemId: id })
          }}
        />
      </div>
    </form>
  )
}

ExerciseWeight.propTypes = {
  handleSetExerciseWeight: PropTypes.func.isRequired,
  selectedUnitSystem: UnitSystemPropType.isRequired,
};

export default ExerciseWeight
