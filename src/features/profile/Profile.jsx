import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getUserProfile } from "./profileSlice";

export default function Profile() {
    const { profile, profileStatus } = useSelector((state) => state.profile);
    const { userId } = useSelector((state) => state.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { profileId } = useParams();

    
    useEffect(() => {
        dispatch(getUserProfile(profileId))
    }, [dispatch, profileId])
    
    return (
        <Fragment>
            {
                profileStatus === "loading" ? <i className="animate-spin bx bx-loader-alt"></i>
                :
                <div className="bg-white rounded-md shadow p-4 mt-2">
                <div className="flex items-center justify-center md:justify-start flex-col md:flex-row">
                    <div>
                        <img 
                            className="w-36 h-auto rounded-md"
                            src={profile?.profilePhoto}
                            alt="profile_photo"/>
                    </div>
                    <div className="mt-4 md:ml-12">
                        <div className="text-lg font-semibold ml-4 text-center md:text-left">{profile?.name}</div>
                        <div>
                            <ul className="flex my-2">
                                <li className="flex flex-col items-center mx-4">
                                    <span className="text-lg font-medium">{profile?.posts.length}</span>
                                    <span className="font-sm">Posts</span>
                                </li>
                                <li 
                                    className="flex flex-col items-center mx-4">
                                    <span className="text-lg font-medium">{profile?.followers.length}</span>
                                    <span className="font-sm">Followers</span>
                                </li>
                                <li 
                                    className="flex flex-col items-center mx-4">
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
                <div>
                    <h4 className="text-gray-600">Bio</h4>
                    <p>{profile?.bio}</p>
                </div>
            </div>
            }
        </Fragment>
    )
}


