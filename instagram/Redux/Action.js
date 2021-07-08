const Action = (type, value) => ({
    
    type,
    payload: value
})

export default Action


/*  --- liste type action --- */
const type = {

    /* component EXEMPLE */
    EXEMPLE_ACTION: "EXEMPLE_ACTION",

    /* component Contact */
    CONTACTS_ADD_CONTACT: "CONTACTS_ADD_CONTACT",

    /* component Feed */
    FEED_ACTION: "FEED_ACTION",

    /* component detail */
    DETAIL_ACTION: "DETAIL_ACTION",

    /* component comments */
    COMMENTS_ADD: "COMMENTS_ADD",
    
}

export {type}