export const customerInitialState = {
    username: "",
    nationalId: "",
    createdAt: "",
};

export const customerReducer = (state = customerInitialState, action) => {
    switch (action.type) {
        case "customer/createCustomer":
            return {
                username: action.payload.username,
                nationalId: action.payload.nationalId,
                createdAt: new Date().toISOString(),
            };
        default:
            return state;
    }
};

export const createCustomer = ({ username, createdAt, nationalId }) => {
    return { type: "customer/createCustomer", payload: { username, nationalId } };
};