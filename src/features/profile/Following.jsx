import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { InitialDP } from "../../components";
import { getUserProfile } from "./profileSlice";


export default function Following() {
    const dispatch = useDispatch();
    const { profile, profileStatus } = useSelector((state) => state.profile);
    const { userId, status } = useSelector((state) => state.auth);

    useEffect(() => {
        profileStatus === "idle" && 
        status === "profileLoaded" && dispatch(getUserProfile(userId))
    })
    return (
        <div>
            <div className="rounded-md bg-white shadow py-2 px-4 mb-4 text-2xl text-gray-600">Following <span>{profile.following.length}</span></div>
            {
                profile.following && 
                profile.following.map((profile) => (
                    <Link to={`/profile/${profile._id}`} key={profile._id}>
                    <div className="rounded-md bg-white shadow py-2 px-4 my-4">
                        <div className="flex items-center">
                            <div className="my-2">
                            {
                                profile.profilePhoto ?
                                <img 
                                    className="w-12 h-auto rounded-md"
                                    src={profile.profilePhoto} alt={profile.name}/>
                                :
                                <InitialDP 
                                    name={profile.name}
                                    size={12}
                                    fontSize={"text-xl"}
                                />
                            }
                            </div>
                            <div className="ml-6">
                                <h4 className="text-lg font-semibold">{profile.name}</h4>
                                <span className="text-sm text-gray-400 font-normal">@{profile.username}</span>
                            </div>
                        </div>
                    </div>
                </Link>
                ))
            }
        </div>
    )
}