const findById = (collection, objectId) => collection.find(({ id }) => id === parseInt(objectId))
const rejectById = (collection, objectId) => collection.filter(({ id }) => id !== parseInt(objectId))

export {
  findById,
  rejectById,
}
