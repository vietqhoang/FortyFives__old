const filterById = (collection, objectId) => collection.filter(({ id }) => id === parseInt(objectId))
const filterByUnitSystemId = (collection, objectId) => collection.filter(({ unitSystemId }) => unitSystemId === parseInt(objectId))
const findById = (collection, objectId) => collection.find(({ id }) => id === parseInt(objectId))
const rejectById = (collection, objectId) => collection.filter(({ id }) => id !== parseInt(objectId))

export {
  filterById,
  filterByUnitSystemId,
  findById,
  rejectById,
}
