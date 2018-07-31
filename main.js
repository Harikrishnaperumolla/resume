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
        resolve(response.json());
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
})
var child2=document.querySelector("#child2");
function carrer(car)
{
  var p=document.createElement("p");
  p.textContent=car.info;
  child2.appendChild(p);
}
