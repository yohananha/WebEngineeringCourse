// // my notes
// // https://codepen.io/Marshjek/pen/KQZVBQ

// /// ---------------------------------------------------------------
// /// ---------------------- HTML -----------------------------------
// /// ---------------------------------------------------------------
// <h2>HTML Table</h2>

// <table id="myTable">
//   <tr>
//     <th>Company</th>
//     <th>Contact</th>
//     <th>Country</th>
//   </tr>
//   <tr>
//     <td>Alfreds Futterkiste</td>
//     <td>Maria Anders</td>
//     <td>Germany</td>
//   </tr>
//   <tr>
//     <td>Centro comercial Moctezuma</td>
//     <td>Francisco Chang</td>
//     <td>Mexico</td>
//   </tr>
//   <tr>
//     <td>Ernst Handel</td>
//     <td>Roland Mendel</td>
//     <td>Austria</td>
//   </tr>

// </table>
// <button type="button" onclick="foo()">Change Content</button>

// /// ---------------------------------------------------------------
// /// ---------------------- CSS ------------------------------------
// /// ---------------------------------------------------------------
// font-family: arial, sans-serif;
// border-collapse: collapse;
// width: 100%;
// }

// td, th {
// border: 1px solid #dddddd;
// text-align: left;
// padding: 8px;
// }

// tr:nth-child(even) {
// background-color: #dddddd;
// }
// /// ---------------------------------------------------------------
// /// ---------------------- JS -------------------------------------
// /// ---------------------------------------------------------------
// const myList = [
//     {name: " nano",
//     age: "12",
//     birth: "1/2/3"},
//      {name: " mosh",
//     age: "55",
//     birth: "77/5/3"},
//      {name: " yoni",
//     age: "16",
//     birth: "1/66/6"}
//   ]
  
//   function foo(){
//     myList.forEach((el => {
//       inser(el);
//     }));
//   }
//   function inser(el){
//     var table = document.getElementById("myTable");
//     var row = table.insertRow();
//     Object.keys(el).forEach(function(key) {
//     row.insertCell().innerHTML = el[key];      
//   });
//   }