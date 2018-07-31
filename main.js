function loadJSON(file,callback)
{
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function()
  {
    if(xhr.readyState==="4" && xhr.status=="200")
    {
      callback(xhr.responsiveText);
    }
  }
  xhr.send();
}

function loadJSON(file){
  return new promise((resolve,reject)=>{
    return fetch(file).(response=>{
      if(response.ok){
        resolve(response.json());
      }else {
        reject(new Error('error'));
      }
    })
  })
}
var fetchedata=loadJSON("data.json");
fetcheData.then(data=>{
  console.log(data);
  career(data.career);
})
var child2=document.querySelector("#child2");
function career(car)
{
  var p=document.crateElement("p");
  p.textContent=car.info;
  child2.appendChild2(p);
}
