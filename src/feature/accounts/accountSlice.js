export const accountInitial = {
    loan: 0,
    balance: 0,
    loanPurpose: "",
};

export function depositAction(amount) {
    return { type: "account/deposit", payload: amount };
}

export function withdrawAction(amount) {
    return { type: "account/withdraw", payload: amount };
}

export function loanAction(loan, loanPurpose) {
    return { type: "account/loan", payload: { loan, loanPurpose } };
}

export function payLoanAction() {
    return { type: "account/payLoan" };
}

export const accountReducer = (state = accountInitial, action) => {
    switch (action.type) {
        case "account/deposit":
            return { ...state, balance: state.balance + action.payload };
        case "account/withdraw":
            return { ...state, balance: state.balance - action.payload };
        case "account/loan":
            return {
                ...state,
                balance: state.balance + action.payload.amount,
                loanPurpose: action.payload.purpose,
                loan: action.payload.loan,
            };
        case "account/payLoan": {
            return {
                ...state,
                loanPurpose: "",
                loan: 0,
                balance: state.balance - state.loan,
            };
        }
        default:
            return state;
    }
};
