import React from "react"
import PropTypes from "prop-types"
import PlatePropType from "../../prop-types/plate"
import classnames from "classnames"

const PlateTable = ({
  caption,
  plates,
  dividePlates,
}) => {
  return (
    <table className="table-auto w-full">
      <caption className="text-left">{caption}</caption>
      <thead>
        <tr>
          <th className="px-4 py-2 text-left">Number of plates</th>
          <th className="px-4 py-2 text-left">Weight ({ plates[0]?.weight })</th>
        </tr>
      </thead>
      <tbody>
        {
          plates.map(({ weight, unit, count }, index) => {
            return (
              <tr key={`plate__${weight}${unit}`} className={classnames({ "bg-gray-100": index % 2 !== 0 })}>
                <td className="border px-4 py-2" title="Number of plates">{ count / (dividePlates ? 2 : 1) }</td>
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
  dividePlates: PropTypes.bool,
};

PlateTable.defaultProps = {
  dividePlates: false
}

export default PlateTable
