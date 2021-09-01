import { Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../features/auth/authSlice';
import { resetFeed } from '../features/posts/postsSlice';
import { resetProfile } from '../features/profile/profileSlice';
import { Navlinks, InitialDP } from '.';

export const Navbar = () => {
    const { userId, user } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const logOutHandler = () => {
        dispatch(logOutUser());
        dispatch(resetFeed());
        dispatch(resetProfile());
    };

    return (
        <Fragment>
            <header className="fixed top-0 left-0 w-full bg-white px-4 z-20">
                <div className="flex items-center justify-center md:justify-start h-12 py-2">
                    <NavLink
                        to="/"
                        className="flex items-center text-xl to-blue-500"
                    >
                        <i className="bx bx-wind text-2xl transform -rotate-90 mx-4"></i>
                        <span className="hidden md:block">Wind</span>
                    </NavLink>
                </div>
            </header>

            <nav className="md:flex justify-between flex-col fixed bottom-2 w-full md:w-72 md:top-0 md:mt-16 p-4">
                <div>
                    <Link to={`/profile/${userId}`}>
                        <div className="hidden shadow md:flex items-center bg-white p-3 rounded-md mb-8">
                            {user?.profilePhoto ? (
                                <img
                                    className="w-12 h-auto rounded-md"
                                    src={user.profilePhoto}
                                    alt={user?.name}
                                />
                            ) : (
                                <InitialDP
                                    name={user?.name}
                                    size={14}
                                    fontSize={'text-3xl'}
                                />
                            )}
                            <div className="ml-3">
                                <h4 className="font-medium">{user?.name}</h4>
                                <span className="text-sm font-medium text-gray-500">
                                    @{user?.username}
                                </span>
                            </div>
                        </div>
                    </Link>

                    <div className="bg-white shadow rounded-xl p-2">
                        <ul className="flex justify-around md:flex-col">
                            <li>
                                {' '}
                                <Navlinks
                                    link={'/'}
                                    icon={'home'}
                                    linkName={'Feed'}
                                />{' '}
                            </li>
                            <li>
                                {' '}
                                <Navlinks
                                    link={'/explore'}
                                    icon={'planet'}
                                    linkName={'Explore'}
                                />{' '}
                            </li>
                            <li>
                                {' '}
                                <Navlinks
                                    link={'/notify'}
                                    icon={'bell'}
                                    linkName={'Notifications'}
                                />{' '}
                            </li>
                            <li>
                                {' '}
                                <Navlinks
                                    link={`/profile/${userId}`}
                                    icon={'user'}
                                    linkName={'Profile'}
                                />{' '}
                            </li>
                        </ul>
                    </div>
                </div>
                <button
                    onClick={() => logOutHandler()}
                    className="hidden shadow md:flex items-center bg-white p-3 hover:text-blue rounded-md"
                >
                    <i className="bx bx-log-out text-lg"></i>
                    <span className="text-base whitespace-nowrap ml-4">
                        Log Out
                    </span>
                </button>
            </nav>
        </Fragment>
    );
};
