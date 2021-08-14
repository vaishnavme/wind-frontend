import { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
    Login,
    SignUp,
    Feed,
    Explore,
    Profile,
    Settings,
    Following,
    Followers,
    PostDetails,
    Notifications
} from './features';
import { PrivateRoute, Navbar } from './components';
import { initializeAuthUser, logOutUser } from './features/auth/authSlice';
import { getFeed } from './features/posts/postsSlice';

function App() {
    const dispatch = useDispatch();
    const { status, userToken, userId, isAuthenticated } = useSelector(
        (state) => state.auth
    );
    const { postStatus } = useSelector((state) => state.posts);

    axios.interceptors.request.use(
        function (config) {
            if (userToken) {
                config.headers.Authorization = `Bearer ${userToken}`;
            }
            return config;
        },
        function (err) {
            console.log('general request rejected', err.response.status);
            return Promise.reject(err);
        }
    );
    axios.interceptors.response.use((response) => response,
        (error) => {
            if (error?.response?.status === 401) {
                dispatch(logOutUser())
            }
            return Promise.reject(error);
        }       
    );

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(getFeed());
        }
        // eslint-disable-next-line
    }, [status]);

    return (
        <div>
            {isAuthenticated && <Navbar />}
            <div
                className={`md:ml-0 ${isAuthenticated && 'md:ml-72 lg:mr-72'}`}
            >
                <div className="p-2 my-16 max-w-3xl mx-auto">
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <PrivateRoute path="/" element={<Feed />} />
                        <PrivateRoute
                            path="feed/:postId"
                            element={<PostDetails />}
                        />
                        <PrivateRoute path="/explore" element={<Explore />} />
                        <PrivateRoute
                            path="/notify"
                            element={<Notifications />}
                        />
                        <PrivateRoute
                            path="/profile/:profileId"
                            element={<Profile />}
                        />
                        <PrivateRoute
                            path="/profile/:profileId/following"
                            element={<Following />}
                        />
                        <PrivateRoute
                            path="/profile/:profileId/followers"
                            element={<Followers />}
                        />
                        <PrivateRoute
                            path="/profile/settings"
                            element={<Settings />}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
