const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { product } = action.payload
      const existingItem = state.items[product.productId]
      const updatedItem = {
        productId: product.productId,
        image: product.image,
        title: product.title,
        size: product.size,
        quantity: existingItem ? existingItem.quantity + 1 : 1,
        price: product.price,
      }
      return {
        ...state,
        items: {
          ...state.items,
          [product.productId]: updatedItem,
        },
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalQuantity + product.price,
      }
    }

    case "REMOVE_FROM_CART": {
      const { productId } = action.payload
      const itemToRemove = state.items[productId]
      const priceReduction = itemToRemove.quantity * itemToRemove.price
      const removedTotalQuantity = state.totalQuantity - itemToRemove.quantity
      const removedTotalPrice = state.totalPrice - priceReduction
      const newItems = { ...state.items }
      delete newItems[productId]
      return {
        ...state,
        items: newItems,
        totalQuantity: removedTotalQuantity,
        totalPrice: removedTotalPrice,
      }
    }

    case "INCREMENT_ITEM": {
      const { productId, product } = action.payload
      const existingItem = state.items[productId] || {
        quantity: 0,
        price: product.price,
        title: product.title,
        image: product.image,
        size: product.size,
        productId: product.productId,
      }

      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      }
      const newTotalQuantity = state.totalQuantity + 1
      const newTotalPrice = state.totalPrice + product.price
      return {
        ...state,
        items: {
          ...state.items,
          [productId]: updatedItem,
        },
        totalQuantity: newTotalQuantity,
        totalPrice: newTotalPrice,
      }
    }

    case "DECREMENT_ITEM": {
      const { productId, product } = action.payload
      const existingItem = state.items[productId] || {
        quantity: 0,
        price: product.price,
        title: product.title,
        image: product.image,
        size: product.size,
        productId: product.productId,
      }

      const updatedItem = {
        ...existingItem,
        quantity: Math.max(0, existingItem.quantity - 1),
      }
      const newTotalQuantity =
        existingItem.quantity > 0
          ? state.totalQuantity - 1
          : state.totalQuantity
      const newTotalPrice =
        existingItem.quantity > 0
          ? state.totalPrice - product.price
          : state.totalPrice
      return {
        ...state,
        items: {
          ...state.items,
          [productId]: updatedItem,
        },
        totalQuantity: newTotalQuantity,
        totalPrice: newTotalPrice,
      }
    }

    case "RESET_CART": {
      return {
        ...initialState,
      }
    }
    default:
      return state
  }
}
