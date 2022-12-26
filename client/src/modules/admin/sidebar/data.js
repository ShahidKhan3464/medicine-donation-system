// Sidebar Icons imports
import { BiHomeAlt } from "react-icons/bi";
import { FaDonate } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { SiWorldhealthorganization } from "react-icons/si";
import { AiOutlineUserAdd } from "react-icons/ai";

export const links = [
    {
        icon: BiHomeAlt,
        name: "dashboard",
        pathname: "/admin/dashboard",
    },
    {
        icon: FaDonate,
        name: "stock",
        pathname: "/admin/stock",
    },
    {
        icon: FiUsers,
        name: "users",
        pathname: "/admin/users",
    },
    {
        icon: SiWorldhealthorganization,
        name: 'ngos',
        pathname: "/admin/ngos",
    },
    {
        icon: AiOutlineUserAdd,
        name: 'addNgo',
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