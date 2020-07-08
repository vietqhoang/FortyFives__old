import React, { useEffect } from "react"
import PropTypes from "prop-types"
import BarbellPropType from "../lib/prop-types/barbell"
import PlatePropType from "../lib/prop-types/plate"
import BARBELLS from "../lib/constants/barbells"
import PLATES from "../lib/constants/plates"

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
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="barbells"
        >
          Barbells
        </label>
        <select
          id="barbells"
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => handleSetBarbell(findByWeight(BARBELLS, e.target.value))}
          value={barbell.weight}
        >
          {
            BARBELLS.map((barbellOption) => {
              const { weight, unit } = barbellOption

              return (
                <option key={barbellId(barbellOption)} value={weight}>
                  {weight} {unit}
                </option>
              )
            })
          }
        </select>
      </div>

      <div>
        {
          PLATES.map((plate) => {
            const { weight, unit, count } = plate

            return (
              <div key={plateId(plate)} className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor={plateId(plate)}
                >
                  {weight} {unit} plate
                </label>
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
              </div>
            )
          })
        }
      </div>
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
