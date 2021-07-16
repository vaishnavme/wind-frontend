import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserPassword, getUserProfile } from "./profileSlice";
import { ProfileUpdate, Account } from "./Setting Components";

export default function Settings() {
    const dispatch = useDispatch();
    const { profileStatus } = useSelector((state) => state.profile);
    const { userId, status } = useSelector((state) => state.auth)
    const [passwordUpdate, setPasswordUpdate] = useState({});

    useEffect(() => {
        profileStatus === "idle" && 
        status === "profileLoaded" && dispatch(getUserProfile(userId))
        // eslint-disable-next-line
    },[status, userId])

    // password
    const passwordUpdateInputs = (e) => {
        const value = e.target.value;
        setPasswordUpdate({
            ...passwordUpdate,
            [e.target.name] : value
        })
    }
    const updatePassword = () => {
        dispatch(updateUserPassword(passwordUpdate))
    }

    return (
        <div className="p-2">
            <ProfileUpdate/>
            <Account
                passwordUpdateInputs={passwordUpdateInputs}
                updatePassword={updatePassword}
                profileStatus={profileStatus}
            />
        </div>
    )
}
