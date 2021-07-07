import { Link } from "react-router-dom"

export default function Account() {
    return (
        <div className="py-4 px-4 max-w-xl mx-auto">
        <h1 className="font-light text-4xl mt-3 text-center">Account</h1>
        <form action="" className="mt-6">
        <div className="my-5 text-sm">
                <label htmlFor="name" className="block text-black">Name</label>
                <input 
                    type="text" 
                    autoFocus id="name" 
                    className="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                    required={true} 
                    placeholder="Name" />
            </div>
            <div className="my-5 text-sm">
                <label htmlFor="username" className="block text-black">Username</label>
                <input 
                    type="text" 
                    id="username" 
                    className="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                    required={true}  
                    placeholder="Username" />
            </div>
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
                    type="password" 
                    id="password" 
                    className="rounded px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" 
                    required={true} 
                    placeholder="Password" />
            </div>

            <button 
                className={`block text-center text-white bg-gray-800 p-3 duration-300 rounded "hover:bg-black" w-full`}> Save  
            </button>
        </form>
    </div>
    )
}