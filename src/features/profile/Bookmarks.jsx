import { useSelector } from "react-redux";
import { PostCard } from "../../components";

export default function Bookmarks() {
    const { user } = useSelector((state) => state.auth);

    const allBookmarks = user?.bookmarks
    return (
        <div>
            <div className="rounded-md bg-white shadow py-2 px-4 mb-4 text-2xl text-gray-600">Bookmarks <span>{user?.bookmarks.length}</span></div>
            {
                allBookmarks?.map((post) => (
                    <PostCard key={post._id} post={post}/>
                ))
            }
        </div>
    )
}