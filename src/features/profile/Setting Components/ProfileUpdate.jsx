import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { InitialDP, getImageLink } from "../../../components";
import { updateUserProfile } from "../profileSlice";


export const ProfileUpdate = () => {
    const { profile, profileStatus } = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const [username, setUsername] = useState("");
    const [bio, setBio] = useState("");
    const [image, setImage] = useState("");
    const [profilePhoto, setProfilePhoto] = useState("");
    const [loading, setLoading] = useState(false);

    const uploadImage = async() => {
        try {
            setLoading(true)
            const link = await getImageLink(image)
            setProfilePhoto(link)
            setLoading(false)
        } catch(err) {
            console.log(err)
        } finally {
            setLoading(false);
        }
    }

    const updateProfile = () => {
        let profileUpdates = {
            name: name || profile?.name,
            username: username || profile?.username,
            bio: bio || profile?.bio,
            profilePhoto: profilePhoto || profile?.profilePhoto
        }
        dispatch(updateUserProfile(profileUpdates));
    }

    return (
        <div className="bg-white rounded-md shadow p-4">
            <h1 className="text-2xl mt-3">Profile</h1>
            <div className="flex items-center flex-col">
                {
                   ( profile?.profilePhoto || profilePhoto) ?
                        <img 
                            className="w-36 h-auto rounded-md"
                            src={profile?.profilePhoto || profilePhoto} alt={profile?.name}/>
                    :
                    <InitialDP 
                        name={profile?.name}
                        size={36}
                        fontSize={"text-7xl"}
                    />
                }
                <div className="my-2">
                    <label className="bg-white text-blue px-4 py-1 rounded border border-blue cursor-pointer hover:bg-blue-400 hover:text-white">
                        <span className="mt-2 text-base leading-normal my-2">
                            <i className="bx bx-upload"></i>
                        </span>
                        <input type="file" onChange={(e) => setImage(e.target.files[0])} className="hidden"/>
                    </label>
                </div>

                <button 
                    onClick={() => uploadImage()}
                    className="text-sm px-4 py-1 font-medium text-blue-600 rounded border border-blue cursor-pointer">
                        {loading ?  <i className="animate-spin bx bx-loader-alt font-thin"></i> : "Upload Image"}
                    </button>
            </div>
            <form className="mt-6">
                <div className="my-5 text-sm">
                    <label htmlFor="name" className="block text-gray-600">Name</label>
                    <input 
                        id="name"
                        type="text"
                        name="name"
                        defaultValue={profile?.name}                       
                        onChange={(e) => setName(e.target.value)}
                        className="rounded font-normal px-4 py-2 mt-1 focus:outline-none bg-gray-100 w-full" 
                        placeholder="Name" 
                    />
                </div>
                <div className="my-5 text-sm">
                    <label htmlFor="username" className="block text-gray-600">Username</label>
                    <input 
                        id="username" 
                        type="text"
                        name="username" 
                        defaultValue={profile?.username}     
                        onChange={(e) => setUsername(e.target.value)}
                        className="rounded font-normal px-4 py-2 mt-1 focus:outline-none bg-gray-100 w-full" 
                        placeholder="Username" 
                    />
                </div>
                <label htmlFor="bio" className="block text-gray-600 mt-2">Bio</label>
                <textarea 
                    id="bio" 
                    type="text" 
                    name="bio"
                    defaultValue={profile?.bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="rounded font-normal px-4 py-2 mt-1 focus:outline-none bg-gray-100 w-full" 
                    placeholder="Bio" 
                />

                <div className="flex justify-between">
                    <button 
                        onClick={(e) => {e.preventDefault(); updateProfile()}}
                        className="text-lg text-white bg-blue-400 p-2 duration-300 rounded hover:bg-blue-700 w-full">
                            {profileStatus === "updating" ? <i className="animate-spin bx bx-loader-alt font-thin"></i> : "Update"}
                        </button>
                </div>
            </form>
        </div>
    )
}