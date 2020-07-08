import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import BarbellPropType from "../lib/prop-types/barbell"
import ExerciseWeightPropType from "../lib/prop-types/exercise-weight"
import PlatePropType from "../lib/prop-types/plate"
import PLATES from "../lib/constants/plates"
import Alert from "../alert/alert"
import SuccessfulResult from "./successful-result/successful-result"
import UnsuccessfulResult from "./unsuccessful-result/unsuccessful-result"

const Result = ({
  barbell,
  plates,
  exerciseWeight,
}) => {
  const [equipment, setEquipment] = useState({ utilizedPlates: [], suggestedPlates: [], exerciseWeightRemaining: exerciseWeight })

  const sortByDescendingWeight = (collection) => {
    return collection.sort((plateA, plateB) => {
      if (plateA.weight < plateB.weight) { return 1 }
      if (plateA.weight > plateB.weight) { return -1 }

      return 0
    })
  }

  const calculateExerciseWeightRemainingAfterEquipmentWeight = (exerciseWeightRemaining, weight) => exerciseWeightRemaining - weight

  const calculateSuggestionPlates = (exerciseWeightRemainingObject, utilizedPlates) => {
    const exerciseWeightRemaining = { ...exerciseWeightRemainingObject };

    const suggestionPlates = sortByDescendingWeight(PLATES).reduce((collection, plate) => {
      const { weight } = plate
      const suggestionPlate = { ...plate, count: 0 }

      if (calculateExerciseWeightRemainingAfterEquipmentWeight(exerciseWeightRemaining.weight, weight * 2) < 0) {
        return collection
      }

      while (calculateExerciseWeightRemainingAfterEquipmentWeight(exerciseWeightRemaining.weight, weight * 2) >= 0) {
        suggestionPlate.count++
        suggestionPlate.count++
        exerciseWeightRemaining.weight = calculateExerciseWeightRemainingAfterEquipmentWeight(exerciseWeightRemaining.weight, weight * 2)
      }

      return [...collection, suggestionPlate]
    }, [])

    return suggestionPlates
  }

  const calculateUtilizedPlates = (exerciseWeightRemaining) => {
    return sortByDescendingWeight(plates).reduce((collection, plate) => {
      const { weight, count } = plate
      const calculatedPlate = { ...plate, count: 0 }
      let tallyAvailableCount = count

      if (calculateExerciseWeightRemainingAfterEquipmentWeight(exerciseWeightRemaining.weight, weight * 2) < 0) {
        return collection
      }

      while (tallyAvailableCount > 1) {
        if (calculateExerciseWeightRemainingAfterEquipmentWeight(exerciseWeightRemaining.weight, weight * 2) < 0) {
          break
        }

        calculatedPlate.count++
        calculatedPlate.count++
        tallyAvailableCount--
        tallyAvailableCount--
        exerciseWeightRemaining.weight = calculateExerciseWeightRemainingAfterEquipmentWeight(exerciseWeightRemaining.weight, weight * 2)
      }

      return [...collection, calculatedPlate]
    }, [])
  }

  const calculatePlatesAndRemainingExerciseWeight = () => {
    const exerciseWeightRemaining = { ...exerciseWeight };

    if (calculateExerciseWeightRemainingAfterEquipmentWeight(exerciseWeightRemaining.weight, barbell.weight) <= 0) {
      return { utilizedPlates: [], suggestionPlates: [], exerciseWeightRemaining }
    }

    exerciseWeightRemaining.weight = calculateExerciseWeightRemainingAfterEquipmentWeight(exerciseWeightRemaining.weight, barbell.weight)

    const utilizedPlates = calculateUtilizedPlates(exerciseWeightRemaining)
    const suggestionPlates = calculateSuggestionPlates(exerciseWeightRemaining, utilizedPlates)

    return ({ exerciseWeightRemaining, utilizedPlates, suggestionPlates })
  }

  useEffect(() => {
    if (Object.keys(barbell).length > 0 && Object.keys(exerciseWeight).length > 0) {
      setEquipment(calculatePlatesAndRemainingExerciseWeight())
    }
  }, [barbell, plates, exerciseWeight])

  return (
    <div>
      {
        (barbell.weight > exerciseWeight.weight && <Alert>Your exercise weight is less than the barbell weight</Alert>) ||
        (
          equipment.exerciseWeightRemaining.weight >= 0 && (
            barbell.weight < exerciseWeight.weight && equipment.utilizedPlates.length > 0 && equipment.suggestionPlates.length > 0 && (
              <UnsuccessfulResult
                suggestionPlates={equipment.suggestionPlates}
                utilizedPlates={equipment.utilizedPlates}
                exerciseWeightRemaining={equipment.exerciseWeightRemaining}
              />
            ) || (
              <SuccessfulResult
                barbell={barbell}
                exerciseWeight={exerciseWeight}
                plates={equipment.utilizedPlates.length > 0 ? equipment.utilizedPlates : equipment.suggestionPlates}
              />
            )
          )
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
