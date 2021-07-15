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
                notifications.map(({sourceUser, _id, time, notificationType}) => {
                    const notifyType = () => {
                        switch(notificationType){
                            case "LIKE":
                                return " recently like your post."
                            case "COMMENT":
                                return " commented on your post."
                            case "NEW POST":
                                return " made a new post."
                            case "FOLLOWED":
                                return " followed you."
                            default:
                                return ""
                        }
                    }
                    return (
                    <div key={_id} className="rounded-md bg-white shadow py-2 px-4 my-4 flex">
                        <div>
                        {
                            sourceUser.profilePhoto ?
                            <img 
                                className="w-10 h-auto rounded-md"
                                src={sourceUser.profilePhoto} alt={sourceUser.name}/>
                            :
                            <InitialDP 
                                name={sourceUser.name}
                                size={10}
                                fontSize={"text-xl"}
                            />
                        }
                        </div>
                        <div className="ml-2">
                            <p><Link className="font-medium hover:underline" to={`/profile/${sourceUser._id}`}>{sourceUser.name}
                            </Link>
                            {notifyType()}</p>
                            <p className="text-xs font-medium text-gray-600">{time.substring(0,10)}</p>
                        </div>
                    </div> 
                )   
            })
        }
    </div>
    )
}

