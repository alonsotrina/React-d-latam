export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            // Método para  verificar si el ID existe en el state 'cart'
            const exists = state.items.some(cartItem => cartItem.id === action.payload.id);

            const updatedItems = exists ?
                // Si existe, aumenta el count del producto
                state.items.map(cartItem =>
                    cartItem.id === action.payload.id
                        ? { ...cartItem, count: cartItem.count + action.payload.count }
                        : cartItem
                )
                :
                // Si no se agregra un nuevo producto a cart
                [...state.items, { ...action.payload, count: action.payload.count }];

            // Recalcula el total y totalItem
            const updatedTotal = updatedItems.reduce((acc, item) => acc + item.price * item.count, 0);
            const updatedTotalItem = updatedItems.reduce((acc, item) => acc + item.count, 0);

            return {
                ...state,
                items: updatedItems,
                total: updatedTotal,
                totalItem: updatedTotalItem
            }

        case "REMOVE_FROM_CART":
            // Filtra el carrito para eliminar el producto cuyo ID coincide con el del payload
            const removeItems = state.items.filter(cartItem => cartItem.id !== action.payload.id);

            // Recalcula el total y totalItem
            const removeTotal = removeItems.reduce((acc, item) => acc + item.price * item.count, 0);
            const revomeTotalItem = removeItems.reduce((acc, item) => acc + item.count, 0);

            return {
                ...state,
                items: removeItems,
                total: removeTotal,
                totalItem: revomeTotalItem
            };

        case "INCREASE_COUNT":
            const increasedItems = state.items.map((item) =>
                item.id === action.payload.id ? { ...item, count: item.count + 1 } : item
            );

            const increasedTotal = increasedItems.reduce((acc, item) => acc + item.price * item.count, 0);
            const increasedTotalItem = increasedItems.reduce((acc, item) => acc + item.count, 0);

            return {
                ...state,
                items: increasedItems,
                total: increasedTotal,
                totalItem: increasedTotalItem
            };

        case "DECREASE_COUNT":
            const decreasedItems = state.items.map((item) =>
                item.id === action.payload.id ? { ...item, count: item.count - 1 } : item
            );
            const decreasedTotal = decreasedItems.reduce((acc, item) => acc + item.price * item.count, 0);
            const decreasedTotalItem = decreasedItems.reduce((acc, item) => acc + item.count, 0);

            return {
                ...state,
                items: decreasedItems,
                total: decreasedTotal,
                totalItem: decreasedTotalItem
            };

        case "CLEAR_CART":
            return {
                ...state,
                items: [],
                total: 0,
                totalItem: 0
            };

        default:
            return state;
    }
};