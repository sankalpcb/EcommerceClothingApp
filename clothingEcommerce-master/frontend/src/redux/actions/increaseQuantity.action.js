export const INCREASE_QUANTITY = "INCREASE_QUANTITY" 

//action
export const increaseQuantity = (data) => (
    {
        type : INCREASE_QUANTITY,
        payload : data  

    }
)