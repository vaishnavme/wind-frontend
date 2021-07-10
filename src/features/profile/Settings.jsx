import { useState } from "react";
import { useSelector } from "react-redux";
import { InputFields } from "../../components";

export default function Settings() {
    const { profile } = useSelector((state) => state.profile);
    const [profileUpdates, setProfileUpdate] = useState({});

    const profileUpdateInputs = (e) => {
        const value = e.target.value;
        setProfileUpdate({
            ...profileUpdates,
            [e.target.name] : value
        })
    }
    const submitUpdates = () => {
        console.log(profileUpdates)
    }
    return (
        <div className="p-2">
            <Profile 
                profile={profile}
                profileUpdateInputs={profileUpdateInputs}
                submitUpdates={submitUpdates}
            />
            <Account/>
            <DeleteAccount/>
        </div>
    )
}

const Profile = ({profile, profileUpdateInputs, submitUpdates}) => {
    
    return (
        <div className="bg-white rounded-md shadow p-4">
            <h1 className="text-2xl mt-3">Profile</h1>
            <div className="flex items-center flex-col">
                <img 
                    className="w-28 h-auto rounded-md"
                    src={profile.profilePhoto}
                    alt="profile_photo"/>
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
                        onClick={(e) => {e.preventDefault(); submitUpdates();}}
                        className="text-lg text-white bg-blue-400 p-2 duration-300 rounded hover:bg-blue-700 w-full">Save</button>
                    <button className="text-lg text-red-600 bg-red-200 p-2 duration-300 rounded hover:bg-red-500 hover:text-white w-full">Cancel</button>
                </div>
            </form>
        </div>
    )
}

const Account = () => {
    return (
        <div className="bg-white rounded-md shadow p-4 my-8">
            <h1 className="text-2xl mt-3">Change Password</h1>
            <form className="mt-6">
                <InputFields
                    labelName={"Current Password"}
                    name={"currentPassword"}
                    type={"password"}
                    defaultValue=""
                    onChangeOperation=""
                />
                <InputFields
                    labelName={"New Password"}
                    name={"newPassword"}
                    type={"password"}
                    defaultValue=""
                    onChangeOperation=""
                />
                <button 
                    className="block text-center text-white bg-gray-800 p-3 duration-300 rounded hover:bg-black w-full"> Update  
                </button>
            </form>
        </div>
    )
}

const DeleteAccount = () => {
    return (
        <div className="bg-white rounded-md shadow p-4 my-8">
            <h1 className="text-2xl mt-3">Delete Account</h1>
            <p className="my-2 text-gray-600">Once account deleted cannot be, then data cannot be recovered.</p>
            <form className="mt-4">
                <InputFields
                    labelName={"Email"}
                    name={"email"}
                    type={"email"}
                    defaultValue=""
                    onChangeOperation=""
                />
                <InputFields
                    labelName={"Password"}
                    name={"password"}
                    type={"password"}
                    defaultValue=""
                    onChangeOperation=""
                />
                <button 
                    className="text-lg text-red-600 bg-red-200 p-2 duration-300 rounded hover:bg-red-500 hover:text-white w-full"> Delete Account  
                </button>
            </form>
        </div>
    )
}