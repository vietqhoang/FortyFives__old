import React from "react"
import PropTypes from "prop-types"
import UnitSystemPropType from "../lib/prop-types/unit-system"
import UNIT_SYSTEMS from "../lib/constants/unit-systems"
import FormElement from "../form/form-element/form-element"
import FormLabel from "../form/form-label/form-label"
import FormSelect from "../form/form-select/form-select"
import { findById } from "../lib/helpers/id"

const UnitSystem = ({
  handleSetUnitSystem,
  selectedUnitSystem,
}) => {
  const titleize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

  return (
    <form>
      <FormElement>
        <FormLabel htmlFor="measurement-systems">
          Unit systems
        </FormLabel>
        <FormSelect
          id="unit-systems"
          handleOnChange={(e) => handleSetUnitSystem(findById(UNIT_SYSTEMS, e.target.value))}
          value={selectedUnitSystem.id}
        >
          {
            UNIT_SYSTEMS.map(({ name, weightUnit, id }) => {
              return (
                <option key={id} value={id}>
                  {titleize(name)} ({weightUnit})
                </option>
              )
            })
          }
        </FormSelect>
      </FormElement>
    </form>
  )
}

UnitSystem.propTypes = {
  handleSetUnitSystem: PropTypes.func.isRequired,
  selectedUnitSystem: UnitSystemPropType.isRequired,
};

export default UnitSystem
