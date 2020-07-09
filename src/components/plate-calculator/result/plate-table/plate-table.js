import React from "react"
import PropTypes from "prop-types"
import PlatePropType from "../../lib/prop-types/plate"
import classnames from "classnames"

const PlateTable = ({
  caption,
  plates,
}) => {
  return (
    <table className="table-auto w-full">
      <caption className="text-left">{caption}</caption>
      <thead>
        <tr>
          <th className="px-4 py-2 text-left">Position</th>
          <th className="px-4 py-2 text-left">Weight ({ plates[0]?.unit })</th>
        </tr>
      </thead>
      <tbody>
        {
          plates.map(({ weight, unit, count }, index) => {
            return (
              <tr key={`plate__${weight}${unit}--${index}`} className={classnames({ "bg-gray-100": index % 2 !== 0 })}>
                <td className="border px-4 py-2" title="Plate position">{ index }</td>
                <td className="border px-4 py-2" title="Weight of plate">{ weight }</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

PlateTable.propTypes = {
  caption: PropTypes.string.isRequired,
  plates: PropTypes.arrayOf(PlatePropType).isRequired,
};

export default PlateTable
