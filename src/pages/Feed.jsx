import { useSelector } from "react-redux";
import { NewPost, PostCard } from "../components";

export default function Feed() {
    const { feedPosts } = useSelector((state) => state.posts);

    return (
        <div>
            <NewPost/>
            {
                feedPosts?.map((post) => (
                    <PostCard key={post._id} post={post}/>
                ))
            }
        </div>
    )
}