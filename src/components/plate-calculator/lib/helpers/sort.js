const sortByDescendingWeight = (collection) => {
  return collection.sort(({ weight: weightA }, { weight: weightB }) => {
    if (weightA < weightB) { return 1 }
    if (weightA > weightB) { return -1 }

    return 0
  })
}

export default sortByDescendingWeight
