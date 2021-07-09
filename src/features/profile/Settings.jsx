import { Link } from "react-router-dom"

export default function Settings() {
    return (
        <div className="p-2">
            <Profile/>
            <Account/>
            <DeleteAccount/>
        </div>
    )
}

const Profile = () => {
    return (
        <div className="bg-white rounded-md shadow p-4">
            <h1 className="text-2xl mt-3">Profile</h1>
            <div className="flex items-center flex-col">
                <img 
                    className="w-28 h-auto rounded-md"
                    src="https://avatars.githubusercontent.com/u/42497931?v=4"
                    alt="profile_photo"/>
                <button className="text-sm font-medium text-blue-600">Change Profile Pic</button>
            </div>
            <form className="mt-6">
            <div>
                    <div className="my-5 text-sm">
                        <label htmlFor="name" className="block text-gray-600">Name</label>
                        <input 
                            type="text" 
                            autoFocus id="name" 
                            className="rounded font-normal px-4 py-2 mt-1 focus:outline-none bg-gray-100 w-full" 
                            placeholder="Name" />

                        <label htmlFor="username" className="block text-gray-600 mt-2">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            className="rounded font-normal px-4 py-2 mt-1 focus:outline-none bg-gray-100 w-full" 
                            placeholder="Username" />

                        <label htmlFor="bio" className="block text-gray-600 mt-2">Bio</label>
                        <textarea 
                            type="text" 
                            id="bio" 
                            className="rounded font-normal px-4 py-2 mt-1 focus:outline-none bg-gray-100 w-full" 
                            placeholder="Bio" />
                    </div>
                </div>
                <div className="flex justify-between">
                    <button className="text-lg text-white bg-blue-400 p-2 duration-300 rounded hover:bg-blue-700 w-full">Save</button>
                    <button className="text-lg text-red-600 bg-red-200 p-2 duration-300 rounded hover:bg-red-500 hover:text-white w-full">Cancel</button>
                </div>
            </form>
        </div>
    )
}

const Account = () => {
    return (
        <div className="bg-white rounded-md shadow p-4 my-8">
            <h1 className="text-2xl mt-3">Account</h1>
            <form className="mt-6">
                <div className="my-5 text-sm">
                    <label htmlFor="email" className="block text-black">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                        required={true}  
                        placeholder="Email" />
                </div>
                <div className="my-5 text-sm">
                    <label htmlFor="currPassword" className="block text-black">Current Password</label>
                    <input 
                        type="passowrd" 
                        id="currPassword" 
                        className="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" 
                        required={true} 
                        placeholder="Current Password" />
                </div>
                <div className="my-5 text-sm">
                    <label htmlFor="newPassword" className="block text-black">New Password</label>
                    <input 
                        type="password" 
                        id="newPassword" 
                        className="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" 
                        required={true} 
                        placeholder="New Password" />
                </div>

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
                <div className="my-5 text-sm">
                    <label htmlFor="email" className="block text-black">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                        required={true}  
                        placeholder="Email" />
                </div>
                <div className="my-5 text-sm">
                    <label htmlFor="password" className="block text-black">Password</label>
                    <input 
                        type="passowrd" 
                        id="password" 
                        className="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" 
                        required={true} 
                        placeholder="Password" />
                </div>
                <button 
                    className="text-lg text-red-600 bg-red-200 p-2 duration-300 rounded hover:bg-red-500 hover:text-white w-full"> Delete Account  
                </button>
            </form>
        </div>
    )
}