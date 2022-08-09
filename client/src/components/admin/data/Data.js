// Sidebar Icons imports
import { BiHomeAlt } from "react-icons/bi";
import { FaDonate } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { SiWorldhealthorganization } from "react-icons/si";
import { AiOutlineUserAdd } from "react-icons/ai";

// Sidebar Data
export const SidebarData = [
    {
        icon: BiHomeAlt,
        heading: "Dashboard",
        pathname: "/admin/dashboard",
    },
    {
        icon: FaDonate,
        heading: "Stock",
        pathname: "/admin/stock",
    },
    {
        icon: FiUsers,
        heading: "Users",
        pathname: "/admin/users",
    },
    {
        icon: SiWorldhealthorganization,
        heading: 'Ngo',
        pathname: "/admin/ngos",
    },
    {
        icon: AiOutlineUserAdd,
        heading: 'Add Ngo',
        pathname: "/admin/addNgo",
    },
];

export const Style = {
    done: {
        color: 'white',
        margin: '0 10px',
        cursor: 'pointer',
        fontSize: '1.2rem',
        borderRadius: '50%',
        background: 'green',
    },
    cancel: {
        color: 'white',
        margin: '0 10px',
        cursor: 'pointer',
        background: 'red',
        fontSize: '1.2rem',
        borderRadius: '50%',
    }
}