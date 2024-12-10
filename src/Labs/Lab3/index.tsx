import VariablesAndConstants from "./VariablesAndConstants"
import VariablesTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import LegacyFunctions from "./LegacyFunctions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import TemplateLiterals from "./TemplateLiterals";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import House from "./House";
import TodoList from "./TodoList";
import Spreading from "./Spreading";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";
import Classes from "./Classes";
import Styles from "./Styles";
import Add from "./Add";
import Square from "./Square";
import HighLight from "./HighLight";
import PathParameters from "./PathParameters";

export default function Lab3() {
    return (
        <div id="wd-lab3">
            <h3>Lab 3</h3>
            <VariablesAndConstants />
            <VariablesTypes />
            <BooleanVariables />
            <TernaryOperator />
            <ConditionalOutputIfElse />
            <ConditionalOutputInline />
            <LegacyFunctions />
            <ArrowFunctions />
            <ImpliedReturn />
            <TemplateLiterals />
            <SimpleArrays />
            <ArrayIndexAndLength />
            <AddingAndRemovingToFromArrays />
            <ForLoops />
            <MapFunction />
            <House />
            <TodoList />
            <Spreading />
            <Destructing />
            <FunctionDestructing />
            <DestructingImports />
            <Classes />
            <Styles />
            <Add a={2} b={3} />
            <h4><HighLight>Square of 4</HighLight></h4>
            Square of 4 = <Square>4</Square>
            <br />
            Square of 8 = <Square>8</Square>
            <hr />
            <HighLight>
                Lorem ipsum dolor sit, amet consectetur adipisicing 
                elit. Reiciendis ab ad aut placeat consequuntur 
                sint totam sed necessitatibus nesciunt praesentium!
            </HighLight>
            <PathParameters />
        </div>
    );
}