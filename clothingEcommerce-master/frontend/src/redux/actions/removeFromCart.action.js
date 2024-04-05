export const REMOVE_FROM_CART = "REMOVE_FROM_CART" 

//action
export const removeFromCart = (data) => (
    {
        type : REMOVE_FROM_CART,
        payload : data  

    }
)