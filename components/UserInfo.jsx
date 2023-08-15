export default function UserInfo()
{
    return <div className="grid place-item-center h-screen">
        <div className="shadow-lg p-8 bg-300/10 flex flex-col gap-2 my-6">
            <div className="underline">
                Your Account
            </div>
            <div>
                Name: <span className="font-bold">John</span>
            </div>
            <div>
                Email: <span className="font-bold">John@gmail.com</span>
            </div>
            <button className="bg-red-500 text-white font-bold px-6 py-2 mt-3">
                Log Out
            </button>
        </div>
    </div>
}