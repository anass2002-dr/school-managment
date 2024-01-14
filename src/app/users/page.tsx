export default function Users(){
    return(
        <>
            {/* <div>
                <table classNameName="table-auto bg-slate-50 p-5">
                    <thead classNameName="p-5">
                        <td>
                            Student id
                        </td>
                        <td>
                            first Name
                        </td>
                        <td>
                            Last Name
                        </td>
                        <td>
                            classNamee
                        </td>

                    </thead>
                </table>
            </div> */}
            

        <div className="w-1/2 shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Student ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Student name
                </th>
                <th scope="col" className="px-6 py-3">
                    Age
                </th>
                <th scope="col" className="px-6 py-3">
                    Level
                </th>
                <th scope="col" className="px-6 py-3">
                    Class
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b 0 hover:bg-gray-50 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple MacBook Pro 17
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600  hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white border-b   hover:bg-gray-50 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600  hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white  hover:bg-gray-50 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600  hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
            </div>

        </>
    )
}