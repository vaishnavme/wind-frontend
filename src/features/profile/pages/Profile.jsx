import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getUserProfile } from "../request";
import { PostCard, Loader } from "../../../components";
import { ProfileHeader } from "../shared";

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

    const userPost = allPosts?.filter((post) => post?.creator._id === profileId);
    
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


        
                

