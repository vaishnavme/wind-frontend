import { useSelector } from "react-redux"
import { NewPost, PostCard } from "../../components"

export default function Feed() {
    const { allPosts } = useSelector((state) => state.posts);

    return (
        <div>
            <NewPost/>
            {
                allPosts?.map((post) => (
                    <PostCard key={post._id} post={post}/>
                ))
            }
        </div>
    )
}