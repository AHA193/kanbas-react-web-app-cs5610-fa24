import { Link, useLocation } from "react-router-dom";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsSpeedometer2 } from "react-icons/bs";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineCog8Tooth } from "react-icons/hi2";



export default function KanbasNavigation() {
const { pathname } = useLocation();
const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: BsSpeedometer2 },
    { label: "Courses", path: "/Kanbas/Courses", icon: LiaBookSolid },
    { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: HiOutlineCog8Tooth },
    ];
return (
<div className="border-0 text-center bottom-0 top-0 position-fixed d-none d-md-block list-group rounded-0 bg-black" id="wd-kanbas-navigation" style={{ width: 120 }}>
<a className="border-0 text-center bg-black text-white list-group-item" href="https://www.northeastern.edu/"
id="wd-neu-link" target="_blank">Northeastern</a>

<Link to="/Kanbas/Account" className={`list-group-item text-center border-0 bg-black
${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
<FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
<br />
Account
</Link>
{links.map((link) => (
<Link 
key={link.label} 
to={link.path} 
className={`list-group-item bg-black text-center border-0
${
    pathname.includes(link.label) 
    ? "text-danger bg-white" 
    : "text-white bg-black"
    }`}
    
    >
{link.icon({ className: "fs-1 text-danger"})}
<br />
{link.label}
</Link>
))}
{/* Hardcoded...
<Link className="border-0 text-center bg-white text-danger list-group-item" to="/Kanbas/Account" id="wd-account-link"><RiAccountCircleLine className="fs-1" /><br />
Account</Link>
<Link className="border-0 text-center bg-black text-white list-group-item" to="/Kanbas/Dashboard" id="wd-dashboard-link"><BsSpeedometer2 className="fs-1 text-danger" /><br />
Dashboard</Link>
<Link className="border-0 text-center bg-black text-white list-group-item" to="/Kanbas/Courses" id="wd-courses-link"><LiaBookSolid className="fs-1 text-danger" /><br />Courses</Link>
<Link className="border-0 text-center bg-black text-white list-group-item" to="/Kanbas/Calendar" id="wd-calendar-link"><IoCalendarOutline className="fs-1 text-danger" /><br />Calendar</Link>
<Link className="border-0 text-center bg-black text-white list-group-item" to="/Kanbas/Inbox" id="wd-inboxt-link"><FaInbox className="fs-1 text-danger" /><br />Inbox</Link>
<Link className="border-0 text-center bg-black text-white list-group-item" to="/Labs" id="wd-labs-link"><HiOutlineCog8Tooth className="fs-1 text-danger" /><br />Labs</Link> */}
</div>
);
}

