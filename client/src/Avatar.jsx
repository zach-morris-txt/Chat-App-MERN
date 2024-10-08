export default function Avatar({userId, username, online}) {
    const colors = ["bg-red-300", "bg-green-300", "bg-orange-300", "bg-purple-300", "bg-pink-300", "bg-blue-300", "bg-yellow-300"];
    const userIdBase10 = parseInt(userId, 16);
    const colorIndex = userIdBase10 % colors.length;
    const color = colors[colorIndex];

    return (
        <div className={"h-16 w-16 relative rounded-full flex items-center " +color} >
            <div className="text-center w-full opacity-40">{username[0]}</div>
            {online && (
                <div className="absolute w-4 h-4 bottom-0 right-0 rounded-full bg-emerald-500 border border-white"></div>
            )}
            {!online && (
                <div className="absolute w-4 h-4 bottom-0 right-0 rounded-full bg-gray-500 border border-white"></div>
            )}
        </div>
    );
}