import { Routes, Route, Navigate, useParams } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import CoursesNavigation from "./Navigation";
// import { courses } from "../Database";
import { FaAlignJustify } from "react-icons/fa6";
import PeopleTable from "./People/Table";

export default function Courses({ courses }: {courses: any;}) {
    const { cid } = useParams();
    // const parameters = useParams();
    const course = courses.find((course: any) => course._id === cid); // let's find the course 
    return (
    <div id="wd-courses">
   <h2 className="text-danger">
<FaAlignJustify className="me-4 fs-4 mb-1" />
{course && course.name} {/* let's render it */}
</h2>
    {/* <h3>{cid}</h3>
    <pre>{JSON.stringify(course, null, 3)}</pre>  ONLY FOR DEBUGGING PURPOSES*/} 
    <div className="d-flex">
        {/* <table>
    <tbody>
        <tr>
            <td valign="top"> */}
            <div className="d-none d-md-block">
                <CoursesNavigation />
                </div>
                {/* </td>
            <td valign="top"> */}
            <div className="flex-fill">
                <Routes>
                <Route path="/" element={<Navigate to="/Kanbas/Courses/1234/Home" />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Modules" element={<Modules />} />            
                <Route path="Assignments" element={<Assignments />} />
                <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                <Route path="People" element={<PeopleTable />} />
                </Routes>
            {/* </td>
            </tr>
        </tbody>
    </table> */}
    </div>
    </div>
    </div>
    );
    }
    