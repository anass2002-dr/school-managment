export default function TestGrid(){
    return(
        <>
                <div className="grid sm:grid-cols-2 gap-2 lg:grid-cols-5 md:grid-cols-3">
            <div className="bg-red-500 rounded-md min-h-[50px]"/>
            <div className="bg-blue-500 rounded-md min-h-[50px]"/>
            <div className="bg-pink-500 rounded-md min-h-[50px]"/>
            <div className="bg-green-500 rounded-md min-h-[50px]"/>
            <div className="bg-gray-500 rounded-md min-h-[50px]"/>
        </div> 
        </>
    )
}