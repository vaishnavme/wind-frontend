import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile } from "./request";
import { ProfileCard } from "../../components";

export default function Following() {
    const dispatch = useDispatch();
    const { profile, profileStatus } = useSelector((state) => state.profile);
    const { userId, status } = useSelector((state) => state.auth);

    useEffect(() => {
        profileStatus === "idle" && 
        status === "profileLoaded" && dispatch(getUserProfile(userId))
        // eslint-disable-next-line
    },[status, userId])

    return (
        <div>
            <div className="rounded-md bg-white shadow py-2 px-4 mb-4 text-2xl text-gray-600">Following <span>{profile?.following?.length}</span></div>
            {
                profile?.following?.map((profile) => (
                    <ProfileCard key={profile._id} profile={profile}/>
                ))
            }
        </div>
    )
}