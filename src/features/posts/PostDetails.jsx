import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getSinglePost, postComment, deleteComment } from "./postsSlice";
import { PostCard, InitialDP, Loader } from "../../components";

export default function PostDetails() {
    const { status, user } = useSelector((state) => state.auth);
    const { singlePost, postStatus } = useSelector((state) => state.posts);
    const [comment, setComment] = useState("")
    const dispatch = useDispatch();
    const { postId } = useParams();

    useEffect(() => {
        if(status === "profileLoaded") {
            dispatch(getSinglePost(postId))
        }
        // eslint-disable-next-line
    }, [postId, status])

    const makeCommentHandler = () => {
        let variable = {
            comment,
            postId
        }
        dispatch(postComment(variable));
    }

    const deleteCommentHandler = (commentID) => {
        let variable = {
            postId,
            commentID
        }
        dispatch(deleteComment(variable))
    }

    return (
        <div>
            {
                postStatus === "loading" ?
                <Loader/>
                :
                singlePost &&
                <div> 
                    <PostCard post={singlePost}/>
                    <div className="bg-white shadow rounded-md p-4">
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="bg-gray-50 w-full p-2 rounded"
                            placeholder="Comment..."
                        />
                        <div className="flex justify-end border-b">
                            <button
                                onClick={() => makeCommentHandler()}
                                className="border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white px-2 py-1 my-1 mx-2 w-24 rounded">
                                    Comment
                            </button>
                        </div>
                        <div>
                        {  
                        singlePost.comments.map((item) => (
                            <div key={item._id} className="border-b">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="my-2">
                                            {
                                            item.commentBy.profilePhoto ?
                                                <img 
                                                    className="w-10 h-auto rounded-md"
                                                    src={item.commentBy.profilePhoto} alt={item.commentBy.name}/>
                                            :
                                                <InitialDP 
                                                    name={item.commentBy.name}
                                                    size={10}
                                                    fontSize={"text-xl"}
                                                />
                                            }
                                        </div>
                                        <div className="ml-6">
                                            <h4 className="text-lg font-semibold">{item.commentBy.name}</h4>
                                            <span className="text-sm text-gray-400 font-normal">@{item.commentBy.username}</span>
                                        </div>
                                    </div>
                                    {   
                                        item.commentBy._id === user._id &&
                                        <button
                                            onClick={() => deleteCommentHandler(item._id)}
                                            className="text-xs font-semibold border-2 border-red-600 text-red-700 hover:bg-red-600 hover:text-white px-2 py-1 my-1 mx-2 rounded">
                                                Delete
                                        </button>
                                    }
                                </div>
                                <div className="mt-2 mb-6">
                                    <p>{item.comment}</p>
                                </div>
                            </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}