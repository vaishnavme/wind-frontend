import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getUserProfile } from "../features/profile/request";
import { PostCard, ProfileHeader,Loader } from "../components";

export default function Profile() {
    const { profile, profileStatus } = useSelector((state) => state.profile);
    const { allPosts } = useSelector((state) => state.posts)
    const { status } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { profileId } = useParams();
    
    useEffect(() => {
        if(profileId !== profile?._id && status === "profileLoaded") {
            dispatch(getUserProfile(profileId))
        }
        // eslint-disable-next-line
    }, [status, profileId])

    console.log(profile)

    const userPost = profile?.posts;
    
    return (
    <Fragment>
        {   profileStatus === "loading" && <Loader/>  }
        {
            (profileStatus === "dataReceived" && profile) &&
            <div>
                <ProfileHeader profile={profile}/>
                {
                    userPost?.map((post) => (
                        <PostCard key={post._id} post={post}/>
                    ))
                }
            </div>
        }
    </Fragment>
    )
}


        
                

