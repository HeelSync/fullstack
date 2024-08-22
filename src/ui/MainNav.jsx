import { NavLink } from "react-router-dom"
import {HiOutlineCog6Tooth, HiOutlineCalendar, HiOutlinePaperAirplane, HiOutlineShoppingCart, HiOutlineHome, HiOutlineLink, } from "react-icons/hi2"
function MainNav() {
    return (
        <ul className="flex flex-col gap-2">
            <li><NavLink to="/dashboard"
            className="flex items-center gap-4 text-carolina-blue text-lg font-medium py-3 px-6 transition-colors duration-300 hover:text-blue-600 hover:bg-gray-50 active:text-gray-800 active:bg-gray-50 rounded-sm">
           <HiOutlineHome className="w-6 h-6  text-gray-400 transition-colors duration-300 group-hover:text-brand-600 group-active:text-brand-600"/>
            <span>Home</span>
            </NavLink></li>

            <li><NavLink to="/registration"
            className="flex items-center gap-4 text-carolina-blue text-lg font-medium py-3 px-6 transition-colors duration-300 hover:text-blue-600 hover:bg-gray-50 active:text-gray-800 active:bg-gray-50 rounded-sm">
            <HiOutlineShoppingCart className="w-6 h-6 text-gray-400 transition-colors duration-300 group-hover:text-brand-600 group-active:text-brand-600"/>
            <span>Classes</span>
            </NavLink></li>

            <li><NavLink to="/calendar"
            className="flex items-center gap-4 text-carolina-blue text-lg font-medium py-3 px-6 transition-colors duration-300 hover:text-blue-600 hover:bg-gray-50 active:text-gray-800 active:bg-gray-50 rounded-sm">
            <HiOutlineCalendar className="w-6 h-6 text-gray-400 transition-colors duration-300 group-hover:text-brand-600 group-active:text-brand-600"/>
            <span>Calendar</span>
            </NavLink></li>

            <li><NavLink to="/links"
            className="flex items-center gap-4 text-carolina-blue text-lg font-medium py-3 px-6 transition-colors duration-300 hover:text-blue-600 hover:bg-gray-50 active:text-gray-800 active:bg-gray-50 rounded-sm">
            <HiOutlineLink className="w-6 h-6 text-gray-400 transition-colors duration-300 group-hover:text-brand-600 group-active:text-brand-600"/>
            <span>Links</span>
            </NavLink></li>

            <li><NavLink to="/studyabroadplanner"
            className="flex items-center gap-4 text-carolina-blue text-lg font-medium py-3 px-6 transition-colors duration-300 hover:text-blue-600 hover:bg-gray-50 active:text-gray-800 active:bg-gray-50 rounded-sm">
            <HiOutlinePaperAirplane className="w-6 h-6 text-gray-400 transition-colors duration-300 group-hover:text-brand-600 group-active:text-brand-600"/>
            <span>Study Abroad</span>
            </NavLink></li>

            <li><NavLink to="/settings"
            className="flex items-center gap-4 text-carolina-blue text-lg font-medium py-3 px-6 transition-colors duration-300 hover:text-blue-600 hover:bg-gray-50 active:text-gray-800 active:bg-gray-50 rounded-sm">
            <HiOutlineCog6Tooth className="w-6 h-6 text-gray-400 transition-colors duration-300 group-hover:text-brand-600 group-active:text-brand-600"/>
            <span>Settings</span>
            </NavLink></li>
        </ul>
    )
}

export default MainNav
