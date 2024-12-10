import { useParams } from "react-router-dom";
export default function AddPathparameters() {
const { a, b } = useParams();
return (
<div id="wd-add"> <h4>Add Path Parameters</h4>
{a} + {b} = {parseInt(a as string)
	    + parseInt(b as string)}
</div>
);}
