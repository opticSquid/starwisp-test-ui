export const initialState = {
    posts: [],
};
const reducer = (state,action) =>{
    switch(action.type)
    {
        case "ADD_POST":
            console.log("added");
            return{
                ...state,
                posts: [...state.posts, action.item],
            };
        default:
            return state;
    }
}
export default reducer;