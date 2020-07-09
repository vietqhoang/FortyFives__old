import React from "react"
import PropTypes from "prop-types"
import UNIT_SYSTEMS from "../lib/constants/unit-systems"
import FormElement from "../form/form-element/form-element"
import FormLabel from "../form/form-label/form-label"
import FormSelect from "../form/form-select/form-select"

const UnitSystem = ({

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
          handleOnChange={(e) => true}
          value={UNIT_SYSTEMS[0].name}
        >
          {
            UNIT_SYSTEMS.map(({ name, weightUnit }) => {
              return (
                <option key={name} value={name}>
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

};

export default UnitSystem
