import React, { useState } from "react"
import Equipment from "./equipment/equipment"
import ExerciseWeight from "./exercise-weight/exercise-weight"
import Result from "./result/result"

const PlateCalculator = () => {
  const [barbell, setBarbell] = useState({})
  const [plates, setPlates] = useState([])
  const [exerciseWeight, setExerciseWeight] = useState({})

  return (
    <div className="flex">
      <div className="flex-1">
        <Equipment
          barbell={barbell}
          plates={plates}
          handleSetBarbell={setBarbell}
          handleSetPlates={setPlates}
        />
      </div>
      <div className="flex-1">
        <ExerciseWeight
          handleSetExerciseWeight={setExerciseWeight}
        />
      </div>
      <div className="flex-1">
        <Result
          barbell={barbell}
          plates={plates}
          exerciseWeight={exerciseWeight}
        />
      </div>
    </div>
  )
}

export default PlateCalculator
