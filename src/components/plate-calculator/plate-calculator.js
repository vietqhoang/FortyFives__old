import React, { useState } from "react"
import ColumnLayout from "./column-layout/column-layout"
import Equipment from "./equipment/equipment"
import ExerciseWeight from "./exercise-weight/exercise-weight"
import SectionHeader from "./section-header/section-header"
import Result from "./result/result"

const PlateCalculator = () => {
  const [barbell, setBarbell] = useState({})
  const [plates, setPlates] = useState([])
  const [exerciseWeight, setExerciseWeight] = useState({})

  return (
    <div className="flex divide-x divide-gray-400 font-sans">
      <ColumnLayout>
        <SectionHeader>What is your exercise weight?</SectionHeader>
        <ExerciseWeight
          handleSetExerciseWeight={setExerciseWeight}
        />
        <SectionHeader>What is your equipment?</SectionHeader>
        <Equipment
          barbell={barbell}
          plates={plates}
          handleSetBarbell={setBarbell}
          handleSetPlates={setPlates}
        />
      </ColumnLayout>
      <ColumnLayout>
        <SectionHeader>Result</SectionHeader>
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
