import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getUserProfile } from "./profileSlice";
import { InitialDP } from "../../components";

export default function Profile() {
    const { profile, profileStatus } = useSelector((state) => state.profile);
    const { userId, status } = useSelector((state) => state.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { profileId } = useParams();

    useEffect(() => {
        if(profileStatus === "idle" && status === "profileLoaded") {
            dispatch(getUserProfile(profileId))
        }
        // eslint-disable-next-line
    }, [profileStatus, status])
    
    return (
        <Fragment>
            {
                profileStatus === "loading" ? <i className="animate-spin bx bx-loader-alt"></i>
                :
                <div className="bg-white rounded-md shadow p-4 mt-2">
                <div className="flex items-center justify-center md:justify-start flex-col md:flex-row">
                    <div>
                        {
                        profile?.profilePhoto ?
                            <img 
                                className="w-36 h-auto rounded-md"
                                src="https://avatars.githubusercontent.com/u/42497931?v=4" alt={profile?.name}/>
                            :
                            <InitialDP 
                                name={profile?.name}
                                size={36}
                                fontSize={"text-7xl"}
                            />
                        }
                    </div>
                    <div className="mt-4 md:ml-12">
                        <div className="text-lg font-semibold ml-4 text-center md:text-left">{profile?.name}</div>
                        <div>
                            <ul className="flex items-center justify-around my-2 w-72">
                                <li className="flex flex-col items-center">
                                    <span className="text-lg font-medium">{profile?.posts.length}</span>
                                    <span className="font-sm">Posts</span>
                                </li>
                                <li 
                                    className="flex flex-col items-center">
                                    <span className="text-lg font-medium">{profile?.followers.length}</span>
                                    <span className="font-sm">Followers</span>
                                </li>
                                <li 
                                    className="flex flex-col items-center">
                                    <span className="text-lg font-medium">{profile?.following.length}</span>
                                    <span className="font-sm">Following</span>
                                </li>
                            </ul>
                        </div>
                        {
                            (userId === profileId) ?
                            <button 
                                onClick={() => navigate("/setting")}
                                className="border flex items-center justify-center w-full rounded p-1 ml-2 hover:bg-blue-600 hover:text-white duration-300 rounded hover:bg-blue-700">
                                <i className="bx bx-cog mx-2"></i>Edit
                            </button>
                            : null
                        }
                    </div>
                </div>
                <div className="mt-2">
                    <h4 className="text-gray-600">Bio</h4>
                    <p>{profile?.bio}</p>
                </div>
            </div>
            }
        </Fragment>
    )
}


