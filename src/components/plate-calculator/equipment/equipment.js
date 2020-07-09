import React, { useEffect } from "react"
import PropTypes from "prop-types"
import BarbellPropType from "../lib/prop-types/barbell"
import PlatePropType from "../lib/prop-types/plate"
import BARBELLS from "../lib/constants/barbells"
import PLATES from "../lib/constants/plates"
import FormElement from "../form/form-element/form-element"
import FormLabel from "../form/form-label/form-label"
import FormSelect from "../form/form-select/form-select"

const Equipment = ({
  barbell,
  plates,
  handleSetBarbell,
  handleSetPlates,
}) => {
  const barbellId = ({ weight, unit }) => (weight && unit && `barbell__${weight}${unit}`) || ""
  const findByWeight = (collection, weightValue) => collection.find(({ weight }) => weight === parseFloat(weightValue))
  const plateId = ({ weight, unit }) => (weight && unit && `plate__${weight}${unit}`) || ""
  const rejectByWeight = (collection, weightValue) => collection.filter(({ weight }) => weight !== parseFloat(weightValue))

  useEffect(() => {
    handleSetBarbell(BARBELLS[0])
  }, [])

  return (
    <form>
      <FormElement>
        <FormLabel htmlFor="barbells">
          Barbells
        </FormLabel>
        <FormSelect
          id="barbells"
          handleOnChange={(e) => handleSetBarbell(findByWeight(BARBELLS, e.target.value))}
          value={barbell.weight}
        >
          {
            BARBELLS.map((aBarbell) => {
              const { weight, unit } = aBarbell

              return (
                <option key={barbellId(aBarbell)} value={weight}>
                  {weight} {unit}
                </option>
              )
            })
          }
        </FormSelect>
      </FormElement>

      {
        PLATES.map((plate) => {
          const { weight, unit, count } = plate
          const id = plateId(plate)

          return (
            <FormElement key={id}>
              <FormLabel htmlFor={id}>
                {weight} {unit} plate
              </FormLabel>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={plateId(plate)}
                type="number"
                min="0"
                max="10"
                step="2"
                data-weight={weight}
                placeholder="Number of plates?"
                value={count}
                onChange={(e) => handleSetPlates([...rejectByWeight(plates, e.target.dataset.weight), { ...findByWeight(PLATES, e.target.dataset.weight), count: parseInt(e.target.value) || 0 }].filter(({ count }) => count !== 0))}
              />
            </FormElement>
          )
        })
      }
    </form>
  )
}

Equipment.propTypes = {
  barbell: BarbellPropType.isRequired,
  plates: PropTypes.arrayOf(PlatePropType).isRequired,
  handleSetBarbell: PropTypes.func.isRequired,
  handleSetPlates: PropTypes.func.isRequired,
};

export default Equipment
