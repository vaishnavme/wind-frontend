import { useState, Fragment } from "react"

export default function Profile() {
    const [isEditBoxVisible, setEditBoxVisible] = useState(false);
    const [isProfileModel, setProfileModel] = useState(false);

    const editProfileHandler = () => setEditBoxVisible((preState) => !preState)

    return (
        <Fragment>
            <div className="m-auto w-full max-w-2xl">
            <div className="border-b relative">
                <div className="my-4 flex">
                    <div>
                        <img 
                            className="w-36 h-auto rounded-full"
                            src="https://via.placeholder.com/160"
                            alt="profile_photo"/>
                    </div>
                    <div className="ml-12">
                        <div className="text-lg font-semibold ml-4">Vaishnav Chandurkar</div>
                        <div>
                            <ul className="flex my-2">
                                <li className="flex flex-col items-center mx-4">
                                    <span className="text-lg font-medium">15</span>
                                    <span className="font-sm">Posts</span>
                                </li>
                                <li 
                                    onClick={() => setProfileModel((preState) => !preState)}
                                    className="flex flex-col items-center mx-4">
                                    <span className="text-lg font-medium">348</span>
                                    <span className="font-sm">Followers</span>
                                </li>
                                <li 
                                    onClick={() => setProfileModel((preState) => !preState)}
                                    className="flex flex-col items-center mx-4">
                                    <span className="text-lg font-medium">356</span>
                                    <span className="font-sm">Following</span>
                                </li>
                            </ul>
                        </div>
                        <div className="ml-4">
                            <button 
                                onClick={() => editProfileHandler()}
                                className="border w-full">Edit</button>
                        </div>
                    </div>
                </div>
                <div className="w-96 mb-2">
                    <p className="text-sm">Above. Under. Don't night were him fourth. Second them. Image lights image said created, shall blessed saw there fill days seasons there together green itself given fourth kind fifth. Earth.</p>
                </div>
            </div>
            {isProfileModel && <ProfileModel/>}
            {isEditBoxVisible && <EditProfile/>}
            <div>
                <ul>
                    <li className="border rounded-md my-3">
                        <div className="p-2">
                            <div className="text-xl font-semibold">Getting Started</div>
                            <div className="text-sm">Upon set gathered don't him together shall doesn't years kind tree. Form winged the upon grass. Brought their won't of whales divide image creepeth rule fourth female seas face you're blessed second. Air without. There. To man can't night second heaven Place great to doesn't air void. Replenish morning two.</div>
                        </div>
                        <div className="flex justify-around bg-gray-50">
                            <div className="flex items-center ">
                                <i className='bx bx-heart mx-2'></i> likes
                            </div>
                            <div className="flex items-center ">
                                <i className='bx bx-heart mx-2'></i> likes
                            </div>
                            <div className="flex items-center ">
                                <i className='bx bx-heart mx-2'></i> likes
                            </div>
                        </div>
                    </li>
                    <li className="border rounded-md my-3">
                        <div className="p-2">
                            <div className="text-xl font-semibold">Getting Started</div>
                            <div className="text-sm">Upon set gathered don't him together shall doesn't years kind tree. Form winged the upon grass. Brought their won't of whales divide image creepeth rule fourth female seas face you're blessed second. Air without. There. To man can't night second heaven Place great to doesn't air void. Replenish morning two.</div>
                        </div>
                        <div className="flex justify-around bg-gray-50">
                            <div className="flex items-center ">
                                <i className='bx bx-heart mx-2'></i> likes
                            </div>
                            <div className="flex items-center ">
                                <i className='bx bx-heart mx-2'></i> likes
                            </div>
                            <div className="flex items-center ">
                                <i className='bx bx-heart mx-2'></i> likes
                            </div>
                        </div>
                    </li>
                    <li className="border rounded-md my-3">
                        <div className="p-2">
                            <div className="text-xl font-semibold">Getting Started</div>
                            <div className="text-sm">Upon set gathered don't him together shall doesn't years kind tree. Form winged the upon grass. Brought their won't of whales divide image creepeth rule fourth female seas face you're blessed second. Air without. There. To man can't night second heaven Place great to doesn't air void. Replenish morning two.</div>
                        </div>
                        <div className="flex justify-around bg-gray-50">
                            <div className="flex items-center ">
                                <i className='bx bx-heart mx-2'></i> likes
                            </div>
                            <div className="flex items-center ">
                                <i className='bx bx-heart mx-2'></i> likes
                            </div>
                            <div className="flex items-center ">
                                <i className='bx bx-heart mx-2'></i> likes
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </Fragment>
    )
}


const EditProfile = () => {
    return (
        <div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-30 outline-none focus:outline-none">
                <div className="relative mx-auto w-96 bg-white p-2 rounded">
                <div className="flex items-center flex-col">
                    <img 
                        className="w-16 h-auto rounded-full"
                        src="https://via.placeholder.com/160"
                        alt="profile_photo"/>
                        <button className="text-sm font-medium text-blue-500">Change Profile Pic</button>
                </div>
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
                    <button className="w-full bg-blue-100">Save</button>
                    <button className="w-full bg-gray-100 py-2 ">Cancel</button>
                </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-20 bg-black"></div>
    </div>
    )
}

const ProfileModel = () => {
    return (
        <div>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-30 outline-none focus:outline-none">
            <div className="relative mx-auto w-96 bg-white p-2 rounded">
                <div className="flex justify-between">
                    <button className="w-full bg-blue-100">Followers</button>
                    <button className="w-full bg-gray-100 py-2 ">Following</button>
                </div>
                <div className="overflow-y-scroll overscroll-y-auto max-h-64 my-1">
                    <ul className="mx-4">
                        <li className="py-1">Josh Smith</li>
                        <li className="py-1">Josh Smith</li>
                        <li className="py-1">Josh Smith</li>
                        <li className="py-1">Josh Smith</li>
                        <li className="py-1">Josh Smith</li>
                        <li className="py-1">Josh Smith</li>
                        <li className="py-1">Josh Smith</li>
                        <li className="py-1">Josh Smith</li>
                        <li className="py-1">Josh Smith</li>
                        <li className="py-1">Josh Smith</li>
                        <li className="py-1">Josh Smith</li>
                        <li className="py-1">Josh Smith</li>
                        <li className="py-1">Josh Smith</li>
                        <li className="py-1">Josh Smith</li>
                        <li className="py-1">Josh Smith</li>
                    </ul>
                </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-20 bg-black"></div>
        </div>
    )
}

