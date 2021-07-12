import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProfileCard } from "../../components";
import { getAllUserProfiles } from "./exploreSlice";

export default function Explore() {
    const { allProfiles, exploreStatus } = useSelector((state) => state.explore);
    const { userId } = useSelector((state) => state.auth);
    const [serachUser, setSearchUser] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if(exploreStatus === "idle") {
            dispatch(getAllUserProfiles())
        }
        //eslint-disable-next-line
    }, [exploreStatus])

    const exploreFeed = serachUser !== "" ? 
        (allProfiles.filter((profile) => 
            profile._id !== userId && (profile.name.includes(serachUser)
            || profile.username.includes(serachUser))
        )) :
        allProfiles.filter((profile) => profile._id !== userId)

    return (
        <Fragment>
            <div className="bg-white rounded-md shadow px-4 py-2">
                <div className="text-gray-600 font-medium">Explore</div>
                <input
                    onChange={(e) => setSearchUser(e.target.value)}
                    className="bg-gray-50 w-full p-2 rounded my-2"
                    placeholder="Search people"
                />
            </div>
            <div className="my-8">
                {
                    exploreFeed?.map((profile) => (
                        <ProfileCard profile={profile} key={profile._id}/>
                    ))
                }
            </div>
        </Fragment>
    )
}