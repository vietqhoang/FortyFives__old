import React, { useState } from "react"
import Equipment from "./equipment/equipment"
import ExerciseWeight from "./exercise-weight/exercise-weight"
import Result from "./result/result"

const PlateCalculator = () => {
  const [barbell, setBarbell] = useState({})
  const [plates, setPlates] = useState([])
  const [exerciseWeight, setExerciseWeight] = useState({})

  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <Equipment
          barbell={barbell}
          plates={plates}
          handleSetBarbell={setBarbell}
          handleSetPlates={setPlates}
        />
      </div>
      <div>
        <ExerciseWeight
          handleSetExerciseWeight={setExerciseWeight}
        />
      </div>
      <div>
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
