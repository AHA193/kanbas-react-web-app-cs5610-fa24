import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "../PassingDataOnEvent";
import PassingFunctions from "../PassingFunctions";
import EventObject from "../EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "../BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "../ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";


export default function Lab4() {
    function sayHello() {
    alert ("Hello");
    }
    return (
        <div>
            <h2>Lab 4</h2>
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ParentStateComponent />
            <ReduxExamples />
        
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}