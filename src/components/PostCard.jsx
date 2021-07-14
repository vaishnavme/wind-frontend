import { useSelector, useDispatch } from "react-redux";
import { InitialDP } from "."
import { likePost, unLikePost } from "../features/posts/postsSlice";
import { alreadyExist } from "./utility";

export const PostCard = ({post}) => {
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch();

    const isLiked = alreadyExist(post.likes, user._id)
    
    return (
        <div className="my-4 bg-white rounded-md shadow">
            <div className="p-3 border-b">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        {
                            post.creator.profilePhoto ?
                            <img 
                                className="w-10 h-auto rounded-md"
                                src={post.creator.profilePhoto} alt={post.creator.name}/>
                            :
                            <InitialDP 
                                name={post.creator.name}
                                size={10}
                                fontSize={"text-xl"}
                            />
                        }
                        <div className="ml-3 leading-4">
                            <h4 className="font-medium">{post.creator.name}</h4>
                            <span className="text-xs text-gray-400">{post.creator.username}</span>
                        </div>
                    </div>
                    <div>
                        <span className="text-xs text-gray-400">{post.createdAt.substring(0,10)}</span>
                    </div>
                </div>
                <div className="p-1 my-1">
                    <p>{post.content}</p>
                </div>
            </div>
            <div className="flex items-center justify-around p-1">
                <button
                    onClick={() => isLiked ? dispatch(unLikePost(post._id)) : dispatch(likePost(post._id))} 
                    className="flex items-center">
                    <i className={`text-lg bx ${isLiked ? "bxs-heart text-red-600" : "bx-heart"}`}></i>
                    <span className="text-gray-400 font-normal ml-1">
                        {post.likes.length > 0 && post.likes.length}
                    </span>
                </button>
                <button className="flex items-center">
                    <i className="text-lg bx bx-comment"></i>
                    <span className="text-gray-400 font-normal ml-1">{post.comments.length > 0 && post.comments.length}</span>
                </button>
                <button className="flex items-center">
                    <i className="text-xl bx bx-repost"></i>
                </button>
            </div>
        </div>
    )
}
