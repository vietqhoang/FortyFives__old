import React, { useState } from "react"
import ColumnHeader from "./column-header/column-header"
import ColumnLayout from "./column-layout/column-layout"
import ColumnSection from "./column-section/column-section"
import Equipment from "./equipment/equipment"
import ExerciseWeight from "./exercise-weight/exercise-weight"
import UnitSystem from "./unit-system/unit-system"
import SectionHeader from "./section-header/section-header"
import Result from "./result/result"

const PlateCalculator = () => {
  const [barbell, setBarbell] = useState({})
  const [plates, setPlates] = useState([])
  const [exerciseWeight, setExerciseWeight] = useState({})

  return (
    <div className="flex divide-x divide-gray-400 font-sans">
      <ColumnLayout>
        <ColumnHeader>Calculate plates required to set-up bar for exercise weight</ColumnHeader>
        <ColumnSection>
          <SectionHeader>Select a unit system</SectionHeader>
          <UnitSystem/>
        </ColumnSection>
        <ColumnSection>
          <SectionHeader>What is your exercise weight?</SectionHeader>
          <ExerciseWeight
            handleSetExerciseWeight={setExerciseWeight}
          />
        </ColumnSection>
        <ColumnSection>
          <SectionHeader>What is your equipment?</SectionHeader>
          <Equipment
            barbell={barbell}
            plates={plates}
            handleSetBarbell={setBarbell}
            handleSetPlates={setPlates}
          />
        </ColumnSection>
      </ColumnLayout>
      <ColumnLayout>
        <ColumnHeader>Result</ColumnHeader>
        <ColumnSection>
          <Result
            barbell={barbell}
            plates={plates}
            exerciseWeight={exerciseWeight}
          />
        </ColumnSection>
      </ColumnLayout>
    </div>
  )
}

export default PlateCalculator
