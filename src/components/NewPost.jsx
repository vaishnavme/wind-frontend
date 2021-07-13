import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { InitialDP } from "."
import { createNewPost } from "../features/posts/postsSlice";

export const NewPost = () => {
    const { user } = useSelector((state) => state.auth);
    const [newPost, setNewPost] = useState("");
    const dispatch = useDispatch();

    const makePostHandler = () => {
        dispatch(createNewPost(newPost))
        setNewPost("")
    }

    return (
        <div>
            <div className="bg-white shadow rounded-md p-4">
                <div className="flex items-center justify-between">
                    {
                    user?.profilePhoto ?
                        <img 
                        className="w-12 h-auto rounded-md"
                        src={user.profilePhoto} alt={user?.name}/>
                    :
                        <InitialDP 
                            name={user?.name}
                            size={10}
                            fontSize={"text-xl"}
                        />
                    }
                    <textarea 
                        type="text"
                        placeholder="What's new?"
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                        className="bg-gray-50 w-full mx-2 px-1 rounded-md"
                    />
                    <button 
                        onClick={() => makePostHandler()}
                        className="bg-blue-600 w-24 text-white font-medium px-4 py-2 rounded-md">Post!</button>
                </div>
            </div>
        </div>
    )
}