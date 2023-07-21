import * as types from "./types"

export const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case types.POSTS_SUCCESS : {
            console.log(action)
            return {...state, posts: action.payload}
        }
    }
    console.log('não encontrei ')
    return { ...state }
}