import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { resetProfile } from '../features/profile/profileSlice';
import { getUserProfile } from '../features/profile/request';
import { UserPostCard, ProfileHeader, Loader } from '../components';

export default function Profile() {
    const { profile, profileStatus } = useSelector((state) => state.profile);
    const { status } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { profileId } = useParams();

    useEffect(() => {
        if (profileId !== profile?._id && status === 'profileLoaded') {
            dispatch(getUserProfile(profileId));
        }
        return () => resetProfile();
        // eslint-disable-next-line
    }, [status, profileId]);

    const userPost = profile?.posts;

    return (
        <Fragment>
            {profileStatus === 'loading' && <Loader />}
            {profileStatus === 'dataReceived' && profile && (
                <div>
                    <ProfileHeader profile={profile} />
                    {userPost.length === 0 && (
                        <div className="text-center mt-5">No posts.</div>
                    )}
                    {userPost?.map((post) => (
                        <UserPostCard key={post._id} post={post} />
                    ))}
                </div>
            )}
        </Fragment>
    );
}
