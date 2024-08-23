import { NavLink, useLocation } from "react-router-dom"
import {HiOutlineCog6Tooth, HiOutlineCalendar, HiOutlinePaperAirplane, HiOutlineShoppingCart, HiOutlineHome, HiOutlineLink, } from "react-icons/hi2"
function MainNav() {
    const location = useLocation();
    return (
        <ul className="flex flex-col gap-2">
            <li>
            <NavLink 
                to="/dashboard"
                className={({ isActive }) =>
                `flex items-center gap-4 text-lg font-medium py-3 px-6 transition-colors duration-300 rounded-sm
                ${isActive ? 'text-blue-900 bg-gray-50' : 'text-better-white hover:text-blue-800 hover:bg-gray-50'}`
                }
            >
                <HiOutlineHome className={({ isActive }) => `w-8 h-8 transition-colors duration-300 
                ${isActive ? 'text-brand-600' : 'text-gray-400 group-hover:text-brand-600 group-active:text-brand-600'}`} 
                />
                <span>Home</span>
            </NavLink>
            </li>

            <li><NavLink to="/registration"
            className={({ isActive }) =>
                `flex items-center gap-4 text-lg font-medium py-3 px-6 transition-colors duration-300 rounded-sm
                ${isActive ? 'text-blue-900 bg-gray-50' : 'text-better-white hover:text-blue-800 hover:bg-gray-50'}`
                }
            >
                <HiOutlineShoppingCart className={({ isActive }) => `w-8 h-8 transition-colors duration-300 
                ${isActive ? 'text-brand-600' : 'text-gray-400 group-hover:text-brand-600 group-active:text-brand-600'}`} 
                />
            <span>Classes</span>
            </NavLink></li>

            <li><NavLink to="/calendar"
            className={({ isActive }) =>
                `flex items-center gap-4 text-lg font-medium py-3 px-6 transition-colors duration-300 rounded-sm
                ${isActive ? 'text-blue-900 bg-gray-50' : 'text-better-white hover:text-blue-800 hover:bg-gray-50'}`
                }>
            <HiOutlineCalendar className={({ isActive }) => `w-8 h-8 transition-colors duration-300 
                ${isActive ? 'text-brand-600' : 'text-gray-400 group-hover:text-brand-600 group-active:text-brand-600'}`} 
                /><span>Calendar</span>
            </NavLink></li>

            <li><NavLink to="/links"
            className={({ isActive }) =>
                `flex items-center gap-4 text-lg font-medium py-3 px-6 transition-colors duration-300 rounded-sm
                ${isActive ? 'text-blue-900 bg-gray-50' : 'text-better-white hover:text-blue-800 hover:bg-gray-50'}`
                }>
            <HiOutlineLink className={({ isActive }) => `w-8 h-8 transition-colors duration-300 
                ${isActive ? 'text-brand-600' : 'text-gray-400 group-hover:text-brand-600 group-active:text-brand-600'}`} 
                /> <span>Links</span>
            </NavLink></li>

            <li><NavLink to="/studyabroadplanner"
            className={({ isActive }) =>
                `flex items-center gap-4 text-lg font-medium py-3 px-6 transition-colors duration-300 rounded-sm
                ${isActive ? 'text-blue-600 bg-gray-50' : 'text-better-white hover:text-blue-800 hover:bg-gray-50'}`
                }>
            <HiOutlinePaperAirplane className={({ isActive }) => `w-8 h-8 transition-colors duration-300 
                ${isActive ? 'text-blue-900' : 'text-gray-400 group-hover:text-brand-600 group-active:text-brand-600'}`} 
                /><span>Study Abroad</span>
            </NavLink></li>

            <li><NavLink to="/settings"
           className={({ isActive }) =>
            `flex items-center gap-4 text-lg font-medium py-3 px-6 transition-colors duration-300 rounded-sm
            ${isActive ? 'text-blue-900 bg-gray-50' : 'text-better-white hover:text-blue-800 hover:bg-gray-50'}`
            }s>
            <HiOutlineCog6Tooth className={({ isActive }) => `w-8 h-8 transition-colors duration-300 
                ${isActive ? 'text-brand-600' : 'text-gray-400 group-hover:text-brand-600 group-active:text-brand-600'}`} 
                /> <span>Settings</span>
            </NavLink></li>
        </ul>
    )
}

export default MainNav
