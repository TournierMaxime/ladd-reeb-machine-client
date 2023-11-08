const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: { product },
})

const removeFromCart = (productId) => ({
  type: "REMOVE_FROM_CART",
  payload: { productId },
})

const incrementItem = (productId, product) => ({
  type: "INCREMENT_ITEM",
  payload: { productId, product },
})

const decrementItem = (productId, product) => ({
  type: "DECREMENT_ITEM",
  payload: { productId, product },
})

const resetCart = () => ({
  type: "RESET_CART",
})

export { addToCart, removeFromCart, incrementItem, decrementItem, resetCart }
