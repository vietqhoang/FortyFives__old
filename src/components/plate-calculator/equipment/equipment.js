import React, { useEffect } from "react"
import PropTypes from "prop-types"
import BarbellPropType from "../lib/prop-types/barbell"
import PlatePropType from "../lib/prop-types/plate"
import UnitSystemPropType from "../lib/prop-types/unit-system"
import FormElement from "../form/form-element/form-element"
import FormLabel from "../form/form-label/form-label"
import FormSelect from "../form/form-select/form-select"
import { findById, rejectById } from "../lib/helpers/id"

const Equipment = ({
  selectedBarbell,
  selectedPlates,
  handleSetBarbell,
  handleSetPlates,
  selectedUnitSystem,
  availableBarbells,
  availablePlates,
}) => {
  useEffect(() => {
    handleSetBarbell(availableBarbells[0])
  }, [selectedUnitSystem]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <form>
      <FormElement>
        <FormLabel htmlFor="barbells">
          Barbells
        </FormLabel>
        <FormSelect
          id="barbells"
          handleOnChange={(e) => handleSetBarbell(findById(availableBarbells, e.target.value))}
          value={selectedBarbell.id || availableBarbells[0].id}
        >
          {
            availableBarbells.map(({ weight, unit, id }) => {
              return (
                <option key={id} value={id}>
                  {weight} {unit}
                </option>
              )
            })
          }
        </FormSelect>
      </FormElement>

      {
        availablePlates.map(({ weight, unit, count, id }) => {
          const plateId = `plate__${id}`

          return (
            <FormElement key={id}>
              <FormLabel htmlFor={plateId}>
                {weight} {unit} plate
              </FormLabel>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={plateId}
                type="number"
                min="0"
                max="10"
                step="2"
                data-id={id}
                placeholder="Number of plates?"
                value={count}
                onChange={(e) => handleSetPlates([...rejectById(selectedPlates, e.target.dataset.id), { ...findById(availablePlates, e.target.dataset.id), count: parseInt(e.target.value) || 0 }].filter(({ count }) => count !== 0))}
              />
            </FormElement>
          )
        })
      }
    </form>
  )
}

Equipment.propTypes = {
  selectedBarbell: BarbellPropType.isRequired,
  selectedPlates: PropTypes.arrayOf(PlatePropType).isRequired,
  handleSetBarbell: PropTypes.func.isRequired,
  handleSetPlates: PropTypes.func.isRequired,
  selectedUnitSystem: UnitSystemPropType.isRequired,
  availablePlates: PropTypes.arrayOf(PlatePropType).isRequired,
  availableBarbells: PropTypes.arrayOf(BarbellPropType).isRequired,
};

export default Equipment
