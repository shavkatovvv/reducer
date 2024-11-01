const initialState = {
    userList: [],
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "add":
            return { ...state, userList: [...state.userList, action.value] };
        case "delete":
            const delUSers = state.userList.filter(
                (item) => item.id !== action.id
            );
            return { ...state, userList: delUSers };
        case "editItem":
            return {
                ...state,
                userList: state.userList.map((item) =>
                    item.id === action.id ? action.value : item
                ),
            };

        default:
            return state;
    }
};
