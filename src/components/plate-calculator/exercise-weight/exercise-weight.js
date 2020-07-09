import React from "react"
import PropTypes from "prop-types"
import UnitSystemPropType from "../lib/prop-types/unit-system"
import FormLabel from "../form/form-label/form-label"

const ExerciseWeight = ({
  handleSetExerciseWeight,
  selectedUnitSystem,
}) => {
  const formControlId = "exercise-weight"
  const { weightUnit, id, weightLimit, step } = selectedUnitSystem

  const limitValue = (value, limit) => value > limit ? limit : value

  return (
    <form>
      <div className="mb-4">
        <FormLabel
          htmlFor={formControlId}
        >
          Exercise weight ({weightUnit})
        </FormLabel>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={formControlId}
          type="number"
          min="0"
          max={weightLimit}
          step={step}
          placeholder="Weight being lifted?"
          onChange={(e) => {
            e.target.value = limitValue(e.target.value, weightLimit)
            handleSetExerciseWeight({ weight: parseFloat(e.target.value), unit: weightUnit, unitSystemId: id })
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
