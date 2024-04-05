export const DECREASE_QUANTITY = "DECREASE_QUANTITY" 

//action
export const decreaseQuantity = (data) => (
    {
        type : DECREASE_QUANTITY,
        payload : data  

    }
)