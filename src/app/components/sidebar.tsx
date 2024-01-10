import ListItem from "./list_item"
import style from "@/app/components/sidebar.module.css";
export default function SideBar(){
    return(
        <>
 
            <ul className={"list-none bg-white shadow-lg m-5 p-5 rounded-lg min-h-10 " + style.menu } >
            <li className="p-3 flex relative text-lg bg-gray-100 rounded-lg transition-all mb-5 h-12">
                <button className="absolute right-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

            </li>
            <li className="p-3 flex relative text-lg hover:bg-gray-100 rounded-lg transition-all h-12">
                <span className="">Anass Dermaj</span> 
                <img
                        className="rounded-full absolute right-4 w-8 h-8"
                        src="https://i.imgur.com/1bX5QH6.jpg"
                        alt="Lin Lanying"
                        width={"25%"}
                        height={"25%"}
                />
            </li>
                <ListItem name={"User"} svg_name={"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"}/>
                <ListItem name={"New user"} svg_name={"M12 4.5v15m7.5-7.5h-15"}/>
                <ListItem name={"Classrooms"} svg_name={"M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"}/>
                <ListItem name={"Teachers"} svg_name={"M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}/>


            </ul>
        </>
    )
}