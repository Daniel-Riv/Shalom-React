 export const initialState = {
    cart: [],
}

export const reducerCart = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, payload]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== payload)
            }
        case 'CLEAR_CART':
            return {
                ...state,
                cart: []
            }
        case 'SET_CART':
            return {
                ...state,
                cart: payload
            }
        default:
            return state;
    }
}