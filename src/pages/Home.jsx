export default function Home() {
    return (
        <div>
            <div className="bg-white shadow rounded-md p-4">
                <div className="flex items-center justify-between">
                    <img 
                        className="w-11 h-auto rounded-md"
                        src="https://avatars.githubusercontent.com/u/42497931?v=4" alt="profile"/>
                    <textarea 
                        type="text"
                        placeholder="What's new?"
                        className="bg-gray-50 w-full mx-2 px-1 rounded-md"
                    />
                    <button className="bg-blue-600 w-24 text-white font-medium px-4 py-2 rounded-md">Post It!</button>
                </div>
            </div>
        </div>
    )
}