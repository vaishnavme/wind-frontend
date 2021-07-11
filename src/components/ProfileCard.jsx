export const ProfileCard = () => {
    return (
        <div className="flex flex-col items-center text-center sm:flex-row sm:text-left bg-white rounded-md white shadow hover:shadow-md p-4">
            <div className="my-2">
                <img 
                    className="w-28 h-auto rounded-md"
                    src="https://avatars.githubusercontent.com/u/42497931?v=4" 
                    alt="profile"
                />
            </div>
            <div className="sm:ml-12">
                <h4 className="text-lg font-semibold">Vaishnav Chandurkar</h4>
                <span className="text-sm text-gray-400 font-normal">@vaishnav</span>
                <div className="flex my-2">
                    <div className="font-semibold">15 <span className="text-gray-400 text-sm">posts</span></div>
                    <div className="font-semibold ml-6">15 <span className="text-gray-400 text-sm">Followers</span></div>
                    <div className="font-semibold ml-6">15 <span className="text-gray-400 text-sm">Following</span></div>
                </div>
                <p className="text-gray-600">Need For Speed Most Wanted</p>
            </div>
        </div>
    )
}