/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1+'.'+ d.getDate()+'.'+ d.getFullYear();

let baseurl= 'http://api.openweathermap.org/data/2.5/weather?zip=';

//I remove it because everyone has its own key 
const apikey= '';


//id="feelings" 


 document.getElementById('generate').addEventListener('click',perform);

 function perform(e){


    const z=document.getElementById('zip').value;
    if (z== ''){
        alert('Enter zip code');
    }
    const f=document.getElementById('feelings').value;
   const data= GetdataApi(baseurl,z,apikey)
//chain promises

 .then(function(data){

console.log(data); //berg3 elmafrod

   Postdata('/postdata',{temp:data.main.temp,date:newDate,feeling:f})

 })

 .then(() => UpdateUI());
//  .then (
// UpdateUI()

//  )

 
 }
 
const UpdateUI=async ()=>{
const req=await fetch('/update');

try{
  


const alldata=await req.json();

console.log(alldata.temp);
console.log(alldata.date);
console.log(alldata.feeling);
 document.getElementById('temp').innerHTML=alldata.temp;


 document.getElementById('date').innerHTML=alldata.date;


 document.getElementById('content').innerHTML=alldata.feeling;

}
catch(error){
    console.log("error", error);
  }


}



/* First Function */
/* Get/req data from openweather map api*/
const GetdataApi= async (baseurl,z,apikey)=>{
//code to fetch data from api  i req then api return response
const response = await fetch (baseurl+z+',&appid='+apikey +'&units=metric');
try{
 const data= await response.json();
 //console.log(data.main.temp);
 //console.log(data);
 
  return  data ;
}

catch (err){
    console.log("error", error);

}
};

const Postdata= async(url='',data={})=>{
const response =await fetch(url,{
method:'POST',
credentials:'same-origin',
headers:{'Content-Type': 'application/json'
},
body:JSON.stringify(data),

});
    try{
        const newdata= await response.json();
        console.log(newdata);
        return newdata;
       }
       
       catch (err){
           console.log("error", error);
       
       }


 }


