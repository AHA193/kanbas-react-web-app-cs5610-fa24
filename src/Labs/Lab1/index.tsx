export default function Lab1() {
    return (<div id="wd-lab1">
        <h2>Lab 1</h2>
        <h3>HTML Examples</h3>
        <div id="wd-h-tag">
            <h4>Heading Tags</h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eius reiciendis voluptatum molestias
             sit blanditiis doloribus praesentium qui consequuntur numquam rem cumque saepe debitis laboriosam 
             placeat, ipsam laborum ipsum expedita culpa ea et! Voluptatum asperiores nostrum minima, ab neque 
             omnis fugiat assumenda unde aperiam ex hic commodi nihil quidem beatae. Eaque iure deserunt sit
              doloribus vel laboriosam officiis explicabo? Voluptatem illum, itaque accusantium nostrum saepe 
              quis obcaecati reiciendis sapiente necessitatibus, earum tempore eius officia. Sit at facere ut 
              aperiam iste adipisci, obcaecati soluta omnis dolores rem id commodi molestiae odit autem 
              voluptatem similique nesciunt porro perferendis, quis quas. Consequuntur laudantium temporibus 
              fugit esse iusto architecto voluptatibus quia est molestiae! Provident tenetur odio voluptate 
              consectetur nemo sapiente error culpa, commodi perferendis alias, necessitatibus dignissimos 
              accusamus quam eius aperiam ipsa nesciunt omnis expedita repudiandae deleniti eaque suscipit.
              <h4>Paragraphs</h4> 
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repellat veniam temporibus 
                culpa porro ex quibusdam reprehenderit accusamus, delectus nostrum expedita blanditiis 
                natus minus hic esse commodi. Deleniti, atque debitis. Cumque est quaerat incidunt a, 
                quas debitis. Excepturi saepe nostrum magnam distinctio, est enim ratione dolorem debitis 
                error at iure!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repellat veniam temporibus 
                culpa porro ex quibusdam reprehenderit accusamus, delectus nostrum expedita blanditiis 
                natus minus hic esse commodi. Deleniti, atque debitis. Cumque est quaerat incidunt a, 
                quas debitis. Excepturi saepe nostrum magnam distinctio, est enim ratione dolorem debitis 
                error at iure!
              </p>
              <div id="wd-lists">
                <h4>List Tags</h4>
                <h5>Ordered List Tag</h5>
                How to make pancakes:
                <ol>
                    <li>Exemple 1</li>
                    <li>Exemple 2</li>
                    <li>Exemple 3</li>
                    <li>Exemple 4</li>
                    <li>Exemple 5</li>
                    <li>Exemple 6</li>
                    <li>Exemple 7</li>
                    <li>Exemple 8</li>
                </ol>
              </div>


              <div id="wd-tables">
            <h4>Table Tag</h4>
        
<table border ={1} width="100%">
<thead>  
    <tr>  
        <th>Quiz</th>  
        <th>Topics</th>  
        <th>Date</th>  
	<th>Grade</th>  
    </tr>  
</thead>  
<tbody>  
    <tr>  
        <td>Q1</td>  
        <td>HTML</td>  
        <td>2/3/21</td>  
    	<td>85</td>  
    </tr>  
    <tr>  
        <td>Q2</td>  
        <td>HTML</td>  
        <td>2/3/21</td>  
    	<td>85</td>  
    </tr>  
    <tr>  
        <td>Q3</td>  
        <td>HTML</td>  
        <td>2/3/21</td>  
    	<td>85</td>  
    </tr>  
    <tr>  
        <td>Q4</td>  
        <td>HTML</td>  
        <td>2/3/21</td>  
    	<td>85</td>  
    </tr>  
    <tr>  
        <td>Q5</td>  
        <td>HTML</td>  
        <td>2/3/21</td>  
    	<td>85</td>  
    </tr>  
    <tr>  
        <td>Q1</td>  
        <td>HTML</td>  
        <td>2/3/21</td>  
    	<td>85</td>  
    </tr>  

    </tbody>  
    <tfoot>
    <tr> 
        <td colSpan={3}>Average</td>  
        <td>90</td>  
    </tr>  
    </tfoot> 
    </table>  
        </div>
        </div>
        <div id = "wd-images">
<h4>Image tag</h4>
Loading an image from the internet:
<br/>
<img id="wd-starship"
width="400px"
src=""/>
<br />
Loading a local image:
<br />
<img id="wd-teslabot" src="images/teslabot.jpg" 
height="200px" />

</div>
<div id="wd-forms">
<h4>Form Elements</h4>
{/* <form id="wd-text-fields"> */}
<h5>Text Fields</h5>
<label htmlFor="usernameFld">Username:</label>
<input id="usernameFld" placeholder="jdoe" /> <br />
<label htmlFor="wd-text-fields-password">Password:</label>
<input type="password" id="wd-text-fields-password" value="123@#$asd" />
<br />
<label htmlFor="wd-text-fields-first-name">First name:</label>
<input type="text" id="wd-text-fields-first-name" title="John" /> <br />
<label htmlFor="wd-text-fields-last-name">Last name:</label>
<input 
type="text" 
id="wd-text-fields-las-name" 
placeholder="Doe"
value="Wonderland" 
title="The last name" 
/>
<h5>Text boxes</h5>
<label>Biography</label>
<br/>
<textarea id="wd-textarea" cols={30} rows={15}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Eligendi ipsum sint minima minus numquam perspiciatis 
    voluptate vitae dolor a voluptatem corporis inventore 
    placeat, quia expedita neque, perferendis molestiae 
    debitis fugit unde. Blanditiis ullam nemo quaerat impedit 
    nulla dolore ut? Quos dolorum vero ipsam dolore animi 
    nesciunt, minima eos molestiae enim.
</textarea>
<h5 id="wd-buttons">Buttons</h5>
<button id="wd-all-good"
onClick={() => alert("Life is Good!")}
>
Hello World!
</button>

<h5 id="wd-radio-buttons">Radio buttons</h5>
<label>Favorite movie genre</label><br />
<input type="radio" name="radio-genre" id="wd-radio-comedy"/>
<label htmlFor="wd-radio-comedy">Comedy</label><br />

<input type="radio" name="radio-genre" id="wd-radio-drama"/>
<label htmlFor="wd-radio-drama">Drama</label><br />

<input type="radio" name="radio-genre" id="wd-radio-scifi"/>
<label htmlFor="wd-radio-scifi">Science Fiction</label><br />

<input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
<label htmlFor="wd-radio-fantasy">Fantasy</label><br />

<label><input type="radio" name="radio-genre" />
Horror
</label>
<h5 id="wd-radio-buttons">Checkboxes</h5>
<label>Favorite movie genre</label><br />
<input type="checkbox" name="radio-genre" id="wd-chkbox-comedy"/>
<label htmlFor="wd-chkbox-comedy">Comedy</label><br />

<input type="checkbox" name="radio-genre" id="wd-chkbox-drama"/>
<label htmlFor="wd-chkbox-drama">Drama</label><br />

<input type="checkbox" name="radio-genre" id="wd-chkbox-scifi"/>
<label htmlFor="wd-chkbox-scifi">Science Fiction</label><br />

<input type="checkbox" name="radio-genre" id="wd-chkbox-fantasy"/>
<label htmlFor="wd-chkbox-fantasy">Fantasy</label><br />
{/* </form> */}
<h4 id="wd-dropdowns">Dropdowns</h4>
<h5>Select one</h5>
<label htmlFor="wd-select-one-genre">
    Favorite movie genre: </label><br/>
<select id="wd-select-one-genre">
<option value="COMEDY">Comedy (makes you laugh)</option>
<option value="DRAMA">Drama</option>
<option selected value="SCIFI">Science Fiction</option>
<option value="FANTASY">Fantasy</option>
</select>

<h5>Select many</h5>
<label htmlFor="wd-select-many-genre">
    Favorite all movie genres: </label><br/>
<select id="wd-select-many-genre" multiple>
<option selected value="COMEDY">Comedy</option>
<option value="DRAMA">Drama</option>
<option selected value="SCIFI">Science Fiction</option>
<option value="FANTASY">Fantasy</option>
</select>

<h4>Other HTML field types</h4>
<label htmlFor="wd-text-fields-salary-start">Starting salary:</label>
<input
type="number"
id="wd-text-fields-salary-start"
placeholder="1000"
defaultValue="10001"
min="10000"
max="10005"
/>
<br />
<label htmlFor="wd-text-fields-rating">Rating: </label>
<input
type="range"
id="wd-text-fields-rating"
placeholder="Doe"
max="5"
defaultValue="4"
/>
<br />
<label htmlFor="wd-text-fields-email">Email: </label>
<input 
type="email"
placeholder="jdoe@somewhere.com"
id="wd-text-fields-email"
/>
<br />
<label htmlFor="wd-text-fields-dob">Date of birth: </label>
<input 
type="date" id="wd-text-fields-dob" defaultValue="2000-01-21"/>
<br />
</div>
</div>
    );
}