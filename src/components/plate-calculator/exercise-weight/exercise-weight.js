import React from "react"
import PropTypes from "prop-types"

const ExerciseWeight = ({
  handleSetExerciseWeight,
}) => {
  const id = "exercise-weight"

  return (
    <form className="w-full font-sans bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2>Step 2: Exercise weight?</h2>

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
          onChange={(e) => handleSetExerciseWeight({ weight: parseFloat(e.target.value), unit: "lbs", system: "imperial" })}
        />
      </div>
    </form>
  )
}

ExerciseWeight.propTypes = {
  handleSetExerciseWeight: PropTypes.func.isRequired
};

export default ExerciseWeight
