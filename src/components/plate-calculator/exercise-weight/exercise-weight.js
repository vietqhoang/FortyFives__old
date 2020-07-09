import React from "react"
import PropTypes from "prop-types"

const ExerciseWeight = ({
  handleSetExerciseWeight,
}) => {
  const id = "exercise-weight"

  return (
    <form>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor={id}
        >
          Exercise weight (lbs)
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={id}
          type="number"
          min="0"
          max="1000"
          step="10"
          placeholder="Weight being lifted?"
          onChange={(e) => handleSetExerciseWeight({ weight: parseFloat(e.target.value), unit: "lbs", unitSystem: "imperial" })}
        />
      </div>
    </form>
  )
}

ExerciseWeight.propTypes = {
  handleSetExerciseWeight: PropTypes.func.isRequired
};

export default ExerciseWeight
