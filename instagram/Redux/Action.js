const Action = (type, value) => ({
    
    type,
    payload: value
})

export default Action


/*  --- liste type action --- */
const type = {

    /* component EXEMPLE */
    EXEMPLE_ACTION: "EXEMPLE_ACTION",
    DETAIL_ACTION: "DETAIL_ACTION",
    COMMENTS_ADD: "COMMENTS_ADD",
    
}

export {type}