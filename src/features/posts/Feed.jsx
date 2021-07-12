import { useSelector } from "react-redux"
import { NewPost, PostCard } from "../../components"

export default function Feed() {
    const { allPosts } = useSelector((state) => state.posts);
    console.log(allPosts)
    return (
        <div>
            <NewPost/>
        </div>
    )
}