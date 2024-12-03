import { NavLink, useLocation } from "react-router-dom";
import {
  HiOutlineCog6Tooth,
  HiOutlineCalendar,
  HiOutlinePaperAirplane,
  HiOutlineShoppingCart,
  HiOutlineHome,
  HiOutlineLink,
} from "react-icons/hi2";
function MainNav() {
  const location = useLocation();
  return (
    <ul className="flex flex-col gap-2">
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-4 rounded-sm px-6 py-3 text-lg font-medium transition-colors duration-300 ${isActive ? "bg-gray-50 text-blue-900" : "text-better-white hover:bg-gray-50 hover:text-blue-800"}`
          }
        >
          <HiOutlineHome
            className={({ isActive }) =>
              `h-8 w-8 transition-colors duration-300 ${isActive ? "text-brand-600" : "group-hover:text-brand-600 group-active:text-brand-600 text-gray-400"}`
            }
          />
          <span>Home</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/registration"
          className={({ isActive }) =>
            `flex items-center gap-4 rounded-sm px-6 py-3 text-lg font-medium transition-colors duration-300 ${isActive ? "bg-gray-50 text-blue-900" : "text-better-white hover:bg-gray-50 hover:text-blue-800"}`
          }
        >
          <HiOutlineShoppingCart
            className={({ isActive }) =>
              `h-8 w-8 transition-colors duration-300 ${isActive ? "text-brand-600" : "group-hover:text-brand-600 group-active:text-brand-600 text-gray-400"}`
            }
          />
          <span>Classes</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/calendar"
          className={({ isActive }) =>
            `flex items-center gap-4 rounded-sm px-6 py-3 text-lg font-medium transition-colors duration-300 ${isActive ? "bg-gray-50 text-blue-900" : "text-better-white hover:bg-gray-50 hover:text-blue-800"}`
          }
        >
          <HiOutlineCalendar
            className={({ isActive }) =>
              `h-8 w-8 transition-colors duration-300 ${isActive ? "text-brand-600" : "group-hover:text-brand-600 group-active:text-brand-600 text-gray-400"}`
            }
          />
          <span>Calendar</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/links"
          className={({ isActive }) =>
            `flex items-center gap-4 rounded-sm px-6 py-3 text-lg font-medium transition-colors duration-300 ${isActive ? "bg-gray-50 text-blue-900" : "text-better-white hover:bg-gray-50 hover:text-blue-800"}`
          }
        >
          <HiOutlineLink
            className={({ isActive }) =>
              `h-8 w-8 transition-colors duration-300 ${isActive ? "text-brand-600" : "group-hover:text-brand-600 group-active:text-brand-600 text-gray-400"}`
            }
          />{" "}
          <span>Links</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/studyabroadplanner"
          className={({ isActive }) =>
            `flex items-center gap-4 rounded-sm px-6 py-3 text-lg font-medium transition-colors duration-300 ${isActive ? "bg-gray-50 text-blue-600" : "text-better-white hover:bg-gray-50 hover:text-blue-800"}`
          }
        >
          <HiOutlinePaperAirplane
            className={({ isActive }) =>
              `h-8 w-8 transition-colors duration-300 ${isActive ? "text-blue-900" : "group-hover:text-brand-600 group-active:text-brand-600 text-gray-400"}`
            }
          />
          <span>Abroad</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-4 rounded-sm px-6 py-3 text-lg font-medium transition-colors duration-300 ${isActive ? "bg-gray-50 text-blue-900" : "text-better-white hover:bg-gray-50 hover:text-blue-800"}`
          }
          s
        >
          <HiOutlineCog6Tooth
            className={({ isActive }) =>
              `h-8 w-8 transition-colors duration-300 ${isActive ? "text-brand-600" : "group-hover:text-brand-600 group-active:text-brand-600 text-gray-400"}`
            }
          />{" "}
          <span>Settings</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default MainNav;
