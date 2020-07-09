import React, { useState } from "react"
import ColumnHeader from "./column-header/column-header"
import ColumnLayout from "./column-layout/column-layout"
import ColumnSection from "./column-section/column-section"
import Equipment from "./equipment/equipment"
import ExerciseWeight from "./exercise-weight/exercise-weight"
import UnitSystem from "./unit-system/unit-system"
import SectionHeader from "./section-header/section-header"
import Result from "./result/result"
import BARBELLS from "./lib/constants/barbells"
import PLATES from "./lib/constants/plates"
import UNIT_SYSTEMS from "./lib/constants/unit-systems"
import { filterByUnitSystemId } from "./lib/helpers/id"

const PlateCalculator = () => {
  const [selectedUnitSystem, setSelectedUnitSystem] = useState(UNIT_SYSTEMS[0])
  const [selectedBarbell, setSelectedBarbell] = useState({})
  const [selectedPlates, setSelectedPlates] = useState([])
  const [exerciseWeight, setExerciseWeight] = useState({})

  const availableBarbells = filterByUnitSystemId(BARBELLS, selectedUnitSystem.id)
  const availablePlates = filterByUnitSystemId(PLATES, selectedUnitSystem.id)

  return (
    <div className="flex divide-x divide-gray-400 font-sans">
      <ColumnLayout>
        <ColumnHeader>Calculate plates required to set-up bar for exercise weight</ColumnHeader>
        <ColumnSection>
          <SectionHeader>Select a unit system</SectionHeader>
          <UnitSystem
            selectedUnitSystem={selectedUnitSystem}
            handleSetUnitSystem={setSelectedUnitSystem}
          />
        </ColumnSection>
        <ColumnSection>
          <SectionHeader>What is your exercise weight?</SectionHeader>
          <ExerciseWeight
            handleSetExerciseWeight={setExerciseWeight}
            selectedUnitSystem={selectedUnitSystem}
          />
        </ColumnSection>
        <ColumnSection>
          <SectionHeader>What is your equipment?</SectionHeader>
          <Equipment
            selectedBarbell={selectedBarbell}
            selectedPlates={selectedPlates}
            availableBarbells={availableBarbells}
            availablePlates={availablePlates}
            handleSetBarbell={setSelectedBarbell}
            handleSetPlates={setSelectedPlates}
            selectedUnitSystem={selectedUnitSystem}
          />
        </ColumnSection>
      </ColumnLayout>
      <ColumnLayout>
        <ColumnHeader>Result</ColumnHeader>
        <ColumnSection>
          <Result
            selectedBarbell={selectedBarbell}
            selectedPlates={selectedPlates}
            exerciseWeight={exerciseWeight}
            selectedUnitSystem={selectedUnitSystem}
          />
        </ColumnSection>
      </ColumnLayout>
    </div>
  )
}

export default PlateCalculator
