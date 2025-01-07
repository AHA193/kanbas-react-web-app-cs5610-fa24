import LessonControlButtons from "../../LessonControlButtons";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import * as db from "../../Database"; 
import { useState } from "react";
import ModuleControlButtons from "./ModuleControlButtons";
export default function Modules() {
    const { cid } = useParams();
    const [modules, setModules] = useState<any[]>(db.modules);
    const [moduleName, setModuleName] = useState("");
    const addModule = () => {
        setModules([ ...modules,
        { _id: new Date().getTime().toString(),
        name: moduleName,
        course: cid, 
        lessons: [],
     },
     ]);
        setModuleName("");
        };     
        const deleteModule = (moduleId: string) => {
            setModules(modules.filter((m) => m._id !== moduleId));
            };  
        const editModule = (moduleId: string) => {
            setModules(modules.map((m) => (m._id === moduleId ?
            { ...m, editing: true } : m)));
            };
        const updateModule = (module: any) => {
            setModules(modules.map((m) => (m._id === module._id ?
            module : m)));
            };
    return (
    <div>
    {/* Implement Collapse All button, View Progress button, etc. */}
    <ModulesControls 
    moduleName={moduleName}
    setModuleName={setModuleName}
    addModule={addModule} />
<br />
<br />
    <ul className="mt-2 list-group rounded-0 w-100">
        {modules.filter((module: any) => module.course === cid)
        .map((module: any) => (
            <li 
            key={module._id}
            className="wd-module list-group-item p-0
        mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            {!module.editing && module.name}
            { module.editing && (
            <input className="form-control w-50 d-inline-block"
            onChange={(e) => updateModule(
            { ...module, name: e.target.value })}
            onKeyDown={(e) => {
            if (e.key === "Enter") {
            updateModule({ ...module, editing: false });
            }
            }}
            value={module.name}/>
            )}
        

            <ModuleControlButtons moduleId={module._id} deleteModule={deleteModule}
            editModule={editModule}/></div>
        
        
                <ul className="wd-lessons list-group rounded-0">
                    {module.lessons && module.lessons.map((lesson: any) => (<li className="wd-lessons list-group-item p-3 ps-1">
                        {lesson.name} <LessonControlButtons 
                        /></li>))}
                    {/* <li className="wd-lesson list-group-item p-3 ps-1">
                        LESSON 2 <LessonControlButtons /></li> */}
                </ul>
                </li>
                ))} 
                    {/* <li className="wd-module list-group-item p-0
                    mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                Week 2 </div>
                <ul className="wd-lessons list-group rounded-0">
                    <li className="wd-lesson list-group-item p-3 ps-1">
                        LEARNING OBJECTIVES <LessonControlButtons /></li>
                    <li className="wd-lesson list-group-item p-3 ps-1">
                        LESSON 1 <LessonControlButtons /></li>
                    <li className="wd-lesson list-group-item p-3 ps-1">
                        LESSON 2 <LessonControlButtons /></li>
                </ul>
                </li>  */}
                </ul>
    </div>
    );
}