import { Fragment } from "react";
import { ProfileCard } from "../../components";

export default function Explore() {
    return (
        <Fragment>
            <div className="bg-white rounded-md shadow px-4 py-2">
                <div className="text-gray-600 font-medium">Explore</div>
                <input
                    className="bg-gray-50 w-full p-2 rounded my-2"
                    placeholder="Search people"
                />
            </div>
            <div className="my-8">
                <ProfileCard/>
            </div>
        </Fragment>
    )
}