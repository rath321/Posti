
// const Update=()=>{

// }
// const Delete=()=>{

// }
import { useContext } from "react";
import { createContext } from "react";
import { useReducer } from "react";
import { postActions } from "./PostActions";
const PostState = { posts:[] };

const PostReducer = (state, action) => {
    switch (action.type) {
        case postActions.update:
            return {};
        case postActions.delete:
            return { };
         case postActions.create:
                return { posts:PostState.posts.push(action.payload)  };
        default:
            throw new Error();
    }
}

const PostContext = createContext();

export function usePost() {
    const context = useContext(PostContext);
    if (!context) {
        throw new Error(`useCounter must be used within a CounterProvider`);
    }
    return context;
}

export function PostProvider({children}) {
    const [state, dispatch] = useReducer(PostReducer, PostState);

    const providerValue = { postState: state, postDispatch: dispatch };

    return (
        <PostContext.Provider value={providerValue}>
            {children}
        </PostContext.Provider>
    );
}