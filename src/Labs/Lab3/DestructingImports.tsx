import React from "react";
import Math, { add, substract, multiply, divide } from "./Math";
import * as Matematica from "./Math";
export default function DestructingImports() {
return (
<div id = "wd-destructing-imports">
<h2>Destructing Imports</h2>
<table className="table table-sm">
<thead>
<tr>
<th>Math</th>
<th>Matematica</th>
<th>Functions</th>
</tr>
</thead>
<tbody><tr>
<td>Math.add(2, 3) = {Math.add(2, 3)}</td>
<td>Matematica.add(2,3) = 
{Matematica.add(2, 3)}</td>
<td>add(2, 3) = {add(2, 3)}</td>
</tr>
<tr>
<td>Math.substract(5, 1) = {Math.substract(5, 1)}</td>
<td>Matematica.substract(5, 1) =
{Matematica.substract(5, 1)}</td>
<td>substract(5, 1) = {substract(5, 1)}</td>
</tr></tbody>
</table>
<hr />
</div>
);
}