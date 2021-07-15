import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getUserProfile } from "./profileSlice";
import { Loader } from "../../components";
import ProfileHeader from "./ProfileHeader";

export default function Profile() {
    const { profile, profileStatus } = useSelector((state) => state.profile);
    const { status } = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const { profileId } = useParams();
    
    useEffect(() => {
        if(profileId !== profile?._id && status === "profileLoaded") {
            dispatch(getUserProfile(profileId))
        }
        // eslint-disable-next-line
    }, [status, profileId])
    
    return (
    <Fragment>
        {   profileStatus === "loading" && <Loader/>  }
        {
            (profileStatus === "dataReceived" && profile) &&
            <div>
                <ProfileHeader profile={profile}/>
            </div>
        }
    </Fragment>
    )
}


        
                // {
                //     profile?.posts.map((post) => (
                //         <PostCard key={post._id} post={post}/>
                //     ))
                // }

