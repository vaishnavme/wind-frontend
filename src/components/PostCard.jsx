import { InitialDP } from "."

export const PostCard = () => {
    return (
        <div className="my-4 bg-white rounded-md shadow">
            <div className="p-3 border-b">
                <div className="flex items-center">
                    <InitialDP 
                        name={"Vaishnav Chandurkar"}
                        size={10}
                        fontSize={"text-xl"}
                    />
                    <div className="ml-3 leading-4">
                        <h4 className="font-medium">Vaishnav Chandurkar</h4>
                        <span className="text-xs text-gray-400 font-medium">@vaishnav0</span>
                    </div>
                </div>
                <div className="p-1 my-1">
                    <p>Fruit is be fruit gathered. Won't of thing fifth tree them she'd saw. Unto image together together after i, their over void was in cattle she'd seas, deep seasons blessed that she'd from good night winged replenish him life third.</p>
                </div>
            </div>
            <div className="flex items-center justify-around p-1">
                <button><i className="text-xl bx bx-heart"></i></button>
                <button><i className="text-xl bx bx-comment"></i></button>
                <button><i className="text-2xl bx bx-repost"></i></button>
            </div>
        </div>
    )
}
