import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { InputFields, InitialDP } from "../../components";
import { updateUserProfile, updateUserPassword } from "./profileSlice";

export default function Settings() {
    const dispatch = useDispatch();
    const { profile } = useSelector((state) => state.profile);
    const [profileUpdates, setProfileUpdate] = useState({});
    const [passwordUpdate, setPasswordUpdate] = useState({});

    // profile 
    const profileUpdateInputs = (e) => {
        const value = e.target.value;
        setProfileUpdate({
            ...profileUpdates,
            [e.target.name] : value
        })
    }
    const updateProfile = () => {
        dispatch(updateUserProfile(profileUpdates));
    }

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
            <Profile 
                profile={profile}
                profileUpdateInputs={profileUpdateInputs}
                updateProfile={updateProfile}
            />
            <Account
                passwordUpdateInputs={passwordUpdateInputs}
                updatePassword={updatePassword}
            />
        </div>
    )
}

const Profile = ({profile, profileUpdateInputs, updateProfile}) => {

    return (
        <div className="bg-white rounded-md shadow p-4">
            <h1 className="text-2xl mt-3">Profile</h1>
            <div className="flex items-center flex-col">
                {
                    profile?.profilePhoto ?
                        <img 
                            className="w-36 h-auto rounded-md"
                            src="https://avatars.githubusercontent.com/u/42497931?v=4" alt={profile?.name}/>
                    :
                    <InitialDP 
                        name={profile?.name}
                        size={36}
                        fontSize={"text-7xl"}
                    />
                }
                <button className="text-sm font-medium text-blue-600">Change Profile Pic</button>
            </div>
            <form className="mt-6">
                <InputFields
                    labelName={"Name"}
                    name={"name"}
                    type={"text"}
                    defaultValue={profile?.name}
                    onChangeOperation={profileUpdateInputs}
                />
                <InputFields
                    labelName={"Username"}
                    name={"username"}
                    type={"text"}
                    defaultValue={profile?.username}
                    onChangeOperation={profileUpdateInputs}
                />
                <label htmlFor="bio" className="block text-gray-600 mt-2">Bio</label>
                <textarea 
                    id="bio" 
                    type="text" 
                    name="bio"
                    defaultValue={profile?.bio}
                    onChange={(e) => profileUpdateInputs(e)}
                    className="rounded font-normal px-4 py-2 mt-1 focus:outline-none bg-gray-100 w-full" 
                    placeholder="Bio" 
                />

                <div className="flex justify-between">
                    <button 
                        onClick={(e) => {e.preventDefault(); updateProfile();}}
                        className="text-lg text-white bg-blue-400 p-2 duration-300 rounded hover:bg-blue-700 w-full">Save</button>
                </div>
            </form>
        </div>
    )
}

const Account = ({passwordUpdateInputs, updatePassword}) => {
    return (
        <div className="bg-white rounded-md shadow p-4 my-8">
            <h1 className="text-2xl mt-3">Change Password</h1>
            <form className="mt-6">
                <InputFields
                    labelName={"Current Password"}
                    name={"oldPassword"}
                    type={"password"}
                    onChangeOperation={passwordUpdateInputs}
                />
                <InputFields
                    labelName={"New Password"}
                    name={"newPassword"}
                    type={"password"}
                    onChangeOperation={passwordUpdateInputs}
                />
                <button
                    onClick={(e) => {e.preventDefault(); updatePassword();}} 
                    className="block text-center text-white bg-gray-800 p-3 duration-300 rounded hover:bg-black w-full"> Update  
                </button>
            </form>
        </div>
    )
}