import React, { useState } from "react"
import ColumnLayout from "./column-layout/column-layout"
import Equipment from "./equipment/equipment"
import ExerciseWeight from "./exercise-weight/exercise-weight"
import Result from "./result/result"

const PlateCalculator = () => {
  const [barbell, setBarbell] = useState({})
  const [plates, setPlates] = useState([])
  const [exerciseWeight, setExerciseWeight] = useState({})

  return (
    <div className="flex divide-x divide-gray-400 font-sans">
      <ColumnLayout>
        <Equipment
          barbell={barbell}
          plates={plates}
          handleSetBarbell={setBarbell}
          handleSetPlates={setPlates}
        />
      </ColumnLayout>
      <ColumnLayout>
        <ExerciseWeight
          handleSetExerciseWeight={setExerciseWeight}
        />
      </ColumnLayout>
      <ColumnLayout>
        <Result
          barbell={barbell}
          plates={plates}
          exerciseWeight={exerciseWeight}
        />
      </ColumnLayout>
    </div>
  )
}

export default PlateCalculator
