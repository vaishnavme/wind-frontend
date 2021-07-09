import { useState, Fragment } from "react"

export default function Profile() {

    return (
        <Fragment>
            <div className="bg-white rounded-md shadow p-4 mt-2">
                <div className="flex items-center justify-center md:justify-start flex-col md:flex-row">
                    <div>
                        <img 
                            className="w-36 h-auto rounded-full"
                            src="https://via.placeholder.com/160"
                            alt="profile_photo"/>
                    </div>
                    <div className="mt-4 md:ml-12">
                        <div className="text-lg font-semibold ml-4 text-center md:text-left">Vaishnav Chandurkar</div>
                        <div>
                            <ul className="flex my-2">
                                <li className="flex flex-col items-center mx-4">
                                    <span className="text-lg font-medium">15</span>
                                    <span className="font-sm">Posts</span>
                                </li>
                                <li 
                                    className="flex flex-col items-center mx-4">
                                    <span className="text-lg font-medium">348</span>
                                    <span className="font-sm">Followers</span>
                                </li>
                                <li 
                                    className="flex flex-col items-center mx-4">
                                    <span className="text-lg font-medium">356</span>
                                    <span className="font-sm">Following</span>
                                </li>
                            </ul>
                        </div>
                        <button className="border flex items-center justify-center w-full rounded p-1 ml-2 hover:bg-blue-600 hover:text-white duration-300 rounded hover:bg-blue-700">
                        <i className="bx bx-cog mx-2"></i>Edit
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


{/* <div className="bg-white shadow rounded-md p-4">
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
                                    className="flex flex-col items-center mx-4">
                                    <span className="text-lg font-medium">348</span>
                                    <span className="font-sm">Followers</span>
                                </li>
                                <li 
                                    className="flex flex-col items-center mx-4">
                                    <span className="text-lg font-medium">356</span>
                                    <span className="font-sm">Following</span>
                                </li>
                            </ul>
                        </div>
                        <div className="ml-4">
                            <button 
                                className="border w-full">Edit</button>
                        </div>
                    </div>
                </div>
                <div className="w-96 mb-2">
                    <p className="text-sm">Above. Under. Don't night were him fourth. Second them. Image lights image said created, shall blessed saw there fill days seasons there together green itself given fourth kind fifth. Earth.</p>
                </div>
            </div>


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
            </div> */}