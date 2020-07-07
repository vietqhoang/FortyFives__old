import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import BarbellPropType from "../prop-types/barbell"
import ExerciseWeightPropType from "../prop-types/exercise-weight"
import PlatePropType from "../prop-types/plate"
import PLATES from "../constants/plates"

const Result = ({
  barbell,
  plates,
  exerciseWeight,
}) => {
  const [equipment, setEquipment] = useState({ barbell: {}, plates: [], exerciseWeightRemaining: exerciseWeight })

  const sortByDescendingWeight = (collection) => {
    return collection.sort((plateA, plateB) => {
      if (plateA.weight < plateB.weight) { return 1 }
      if (plateA.weight > plateB.weight) { return -1 }

      return 0
    })
  }

  const calculateExerciseWeightRemainingAfterEquipmentWeight = (exerciseWeightRemaining, weight) => exerciseWeightRemaining - weight

  const calculatePlatesAndRemainingExerciseWeight = () => {
    const exerciseWeightRemaining = { ...exerciseWeight };

    if (calculateExerciseWeightRemainingAfterEquipmentWeight(exerciseWeightRemaining.weight, barbell.weight) <= 0) {
      return { barbell, plates: [], exerciseWeightRemaining }
    }

    exerciseWeightRemaining.weight = calculateExerciseWeightRemainingAfterEquipmentWeight(exerciseWeightRemaining.weight, barbell.weight)

    const utilizedPlates = sortByDescendingWeight(plates).reduce((collection, plate) => {
      const { weight, availableCount } = plate
      const calculatedPlate = { ...plate, utilizedCount: 0 }
      let tallyAvailableCount = availableCount

      if (calculateExerciseWeightRemainingAfterEquipmentWeight(exerciseWeightRemaining.weight, weight * 2) < 0) {
        return collection
      }

      while (tallyAvailableCount > 1) {
        calculatedPlate.utilizedCount++
        calculatedPlate.utilizedCount++
        tallyAvailableCount--
        tallyAvailableCount--
        exerciseWeightRemaining.weight = calculateExerciseWeightRemainingAfterEquipmentWeight(exerciseWeightRemaining.weight, weight * 2)
      }

      return [...collection, calculatedPlate]
    }, [])

    return ({ barbell, plates: utilizedPlates, exerciseWeightRemaining })
  }

  const calculateSuggestionPlates = () => {
    const exerciseWeightRemaining = { ...equipment.exerciseWeightRemaining }

    const suggestedPlates = sortByDescendingWeight(PLATES).reduce((collection, plate) => {
      const { weight } = plate
      const suggestedPlate = { ...plate, suggestedCount: 0 }

      if (calculateExerciseWeightRemainingAfterEquipmentWeight(exerciseWeightRemaining.weight, weight * 2) < 0) {
        return collection
      }

      while (calculateExerciseWeightRemainingAfterEquipmentWeight(exerciseWeightRemaining.weight, weight * 2) >= 0) {
        suggestedPlate.suggestedCount++
        suggestedPlate.suggestedCount++
        exerciseWeightRemaining.weight = calculateExerciseWeightRemainingAfterEquipmentWeight(exerciseWeightRemaining.weight, weight * 2)
      }

      return [...collection, suggestedPlate]
    }, [])

    return suggestedPlates
  }

  useEffect(() => {
    if (Object.keys(barbell).length > 0 && Object.keys(exerciseWeight).length > 0) {
      setEquipment(calculatePlatesAndRemainingExerciseWeight())
    }
  }, [barbell, plates, exerciseWeight])

  return (
    <div className="w-full max-w-xs font-sans bg-white px-8 pt-6 pb-8 mb-4">
      <h2>Result</h2>
      { equipment.barbell.weight > exerciseWeight.weight && <p>Your exercise weight is less than the barbell weight</p> }

      <div className="barbell-diagram">
        This is some text
      </div>

      {
        Object.keys(equipment.barbell).length > 0 && (
          <div>
            <p>Barbell:</p>
            <p>{equipment.barbell.weight} {equipment.barbell.unit}</p>
          </div>
        )
      }

      {
        equipment.exerciseWeightRemaining.weight > 0 && (
          <div>
            {
              equipment.barbell.weight < exerciseWeight.weight && plates.length > 0 ? (
                <>
                  <p>There aren't any plates for the remaining {equipment.exerciseWeightRemaining.weight} {equipment.exerciseWeightRemaining.unit}.</p>
                  <p>Recommended to acquire the additional plates below to load the bar to your exercise weight.</p>

                  <ol>
                    {
                      calculateSuggestionPlates().map(({ weight, unit, suggestedCount }) => <li key={`plate__${weight}${unit}`}>{suggestedCount}x {weight} {unit}</li>)
                    }
                  </ol>
                </>
              ) : (
                <>
                  <p>Load each side of the bar with the following plates:</p>

                  <ol>
                    {
                      calculateSuggestionPlates().map(({ weight, unit, suggestedCount }) => <li key={`plate__${weight}${unit}`}>{suggestedCount/2}x {weight} {unit}</li>)
                    }
                  </ol>
                </>
              )
            }
          </div>
        )
      }
    </div>
  )
}

Result.propTypes = {
  barbell: BarbellPropType.isRequired,
  plates: PropTypes.arrayOf(PlatePropType).isRequired,
  exerciseWeight: ExerciseWeightPropType.isRequired,
};

export default Result
