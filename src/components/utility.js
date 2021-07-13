export const alreadyExist = (collection, itemId) => {
    return collection.find((item) => item._id === itemId)
}