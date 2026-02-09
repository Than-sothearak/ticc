import { MdContentCopy, MdMeetingRoom, MdOutlinePayment, MdSpaceDashboard } from "react-icons/md";
import { FaCartArrowDown, FaChalkboardTeacher, FaUserCircle, FaUsers } from "react-icons/fa";
import { BiBookBookmark, BiCategory,  BiInfoCircle,  BiSolidReport } from "react-icons/bi";
import { MdOutlineWorkHistory } from "react-icons/md";
import { IoSettings, IoSettingsSharp } from "react-icons/io5";
import { IoIosHelpCircle } from "react-icons/io";
import { LogsIcon, TimerIcon } from "lucide-react";
export const pageNavigation = {
  name: "Pages",
  links: [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <MdSpaceDashboard size={18} />,
    },

    {
      name: "Content Management",
      icon: <MdContentCopy size={18} />,
      sublink: [
     
        {
          path: "/dashboard/application-form",
          name: "Application",
          icon: <BiInfoCircle size={16} />,
        },
           {
          path: "/dashboard/information",
          name: "Information & schedule",
          icon: <TimerIcon size={16} />,
        },
           {
          path: "/dashboard/partners",
          name: "Logo Partner",
          icon: <LogsIcon size={16} />,
        },
        {
          path: "/dashboard/mentors",
          name: "Mentors",
          icon: <FaChalkboardTeacher size={16} />,
        },
      ],
    },

    {
      path: "/dashboard/categories",
      name: "Category",
      icon: <BiCategory size={18} />,
    },

    {
      path: "/dashboard/users",
      name: "Users",
      icon: <FaUserCircle size={18} />,
    },
  ],
};


export const analyticNavigation = {
  name: "Analytics",
  links: [
    {
      path: "/reports",
      name: "Reports",
      icon: <BiSolidReport size={18} />,
    },
    {
      path: "/revenue",
      name: "Revenue",
      icon: <MdOutlineWorkHistory size={18} />, 
    },
    {
      path: "/dashboard/teams",
      name: "Teams",
      icon: <FaUsers size={18} />,
    },
  ]
}

export const userNavigation = {
  name: "Users",
  links: [

    {
      path: "/setting",
      name: "Setting",
      icon: <IoSettingsSharp size={18} />,
    },
    {
      path: "/help",
      name: "Help",
      icon: <IoIosHelpCircle size={18} />, 
    },

  ]
}
    
  ;
  
