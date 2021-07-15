import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUserNotifications } from "./notifySlice";
import { Loader, InitialDP } from "../../components";

export default function Notifications() {
    const { status } = useSelector(state => state.auth);
    const { notifyStatus, notifications } = useSelector(state => state.notify)
    const dispatch = useDispatch();
    
    useEffect(() => {
        status === "profileLoaded" && dispatch(getUserNotifications())
        // eslint-disable-next-line
    },[status])
    return (
        <div>
            <div className="rounded-md bg-white shadow py-2 px-4 mb-4 text-2xl text-gray-600">Notifications </div>
            {   notifyStatus === "loading" && <Loader/>  }
            {
                notifications &&
                notifications.map(({sourceUser, _id, time}) => (
                    <div key={_id} className="rounded-md bg-white shadow py-2 px-4 my-4 flex items-center justify-between">
                        <Link to={`/profile/${sourceUser._id}`}>
                        <div className="flex items-center">
                            <div className="my-2">
                                {
                                sourceUser.profilePhoto ?
                                    <img 
                                        className="w-12 h-auto rounded-md"
                                        src={sourceUser.profilePhoto} alt={sourceUser.name}/>
                                :
                                    <InitialDP 
                                        name={sourceUser.name}
                                        size={12}
                                        fontSize={"text-xl"}
                                    />
                                }
                            </div>
                            <div className="ml-6">
                                <h4 className="text-lg font-semibold">{sourceUser.name}</h4>
                                <span className="text-sm text-gray-400 font-normal">@{sourceUser.username}</span>
                            </div>
                        </div>
                    </Link>
                </div>
                ))
            }
        </div>
    )
}


