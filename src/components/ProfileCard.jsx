import { Link } from "react-router-dom"
import { InitialDP } from "."

export const ProfileCard = ({profile}) => {
    return (
        <Link to={`/profile/${profile._id}`}>
            <div className="rounded-md bg-white shadow py-2 px-4 flex items-center flex-col sm:flex-row sm:justify-between sm:items-start">
                <div className="flex flex-col items-center text-center sm:flex-row sm:text-left">
                    <div className="my-2">
                    {
                        profile.profilePhoto ?
                        <img 
                            className="w-12 h-auto rounded-md"
                            src={profile.profilePhoto} alt={profile.name}/>
                        :
                        <InitialDP 
                            name={profile.name}
                            size={28}
                            fontSize={"text-4xl"}
                        />
                    }
                    </div>
                    <div className="sm:ml-12">
                        <h4 className="text-lg font-semibold">{profile.name}</h4>
                        <span className="text-sm text-gray-400 font-normal">@{profile.username}</span>
                        <div className="flex my-2">
                            <div className="font-semibold">{profile.posts.length} <span className="text-gray-400 text-sm">posts</span></div>
                            <div className="font-semibold ml-6">{profile.followers.length} <span className="text-gray-400 text-sm">Followers</span></div>
                            <div className="font-semibold ml-6">{profile.following.length} <span className="text-gray-400 text-sm">Following</span></div>
                        </div>
                        <p className="text-gray-600">{profile.bio}</p>
                    </div>
                </div>
                <div className="w-32 text-center my-2">
                    <button className="rounded px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white">Follow</button>
                </div>
            </div>
        </Link>
    )
}