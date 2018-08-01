// // function loadJSON(file,callback)
// {
//   var xhr=new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange=function()
//   {
//     if(xhr.readyState==="4" && xhr.status=="200")
//     {
//       callback(xhr.responsiveText);
//     }
//   }
//   xhr.send();
// }
// //
function loadJSON(file){
  return new Promise((resolve,request)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json())
      }
      else {
        reject(new Error("error"));
      }
    })
  })
}
var fetchedData=loadJSON("data.json");
fetchedData.then(data=>{
  console.log(data);
  carrer(data.carrer);
  education(data.education);
  skills(data.skills);
})
var child2=document.querySelector("#child2");
function carrer(car)
{
  var heading=document.createElement("h2");
  heading.textContent="Carrer Objective";
  child2.appendChild(heading);
  var hr=document.createElement("hr");
  child2.appendChild(hr);
  var p=document.createElement("p");
  p.textContent=car.info;
  child2.appendChild(p);
}

function education(edu)
{
  var heading=document.createElement("h2");
  heading.textContent="Education Qualification";
  child2.appendChild(heading);
  var hr=document.createElement("hr");
  child2.appendChild(hr);
  var table=document.createElement("table");
  child2.appendChild(table);
  var tr="<tr> <td> S.no </td> <td> DEGREE </td> <td> Institute </td> <td> data </td> </tr>";
  //table.innerHTML=tr;
  table.border="1";
  var tr1="";
  for (var i=0;i<edu.length;i++)
  {
    tr1+="<tr> <td>"+(i+1)+"</td> <td> "+edu[i].Degree+"</td><td>"+edu[i].Institute+"</td><td>"+edu[i].data+"</td></tr>"
  }
table.innerHTML=tr+tr1;
}
//skills
function skills(sk)
{
var heading=document.createElement("h2");
heading.textContent="Technical Skills";
child2.appendChild(heading);
var hr=document.createElement("hr");
child2.appendChild(hr);
for (var i=0;i<sk.length;i++){
var title=document.createElement("h4");
title.textContent=sk[i].title;
child2.appendChild(title);
var set=document.createElement("ul");
set.textContent=sk[i].set;
child2.appendChild(set);

}
}
