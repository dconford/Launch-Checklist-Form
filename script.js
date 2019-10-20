//Write your JavaScript code here!
function isBadName(array) {
   let badName = false;
   for (let i = 0; i < array.length; i++){
      if (isNaN(array[i])) {
      } else {
         let badName = true;
         console.log("badName = (true)", badName);
         return badName;
      }
   }
   console.log("badName = (false)", badName);
   return badName;
}

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener('submit',function() {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName");
      let fuelLevel = document.querySelector("input[name=fuelLevel");
      let cargoMass = document.querySelector("input[name=cargoMass");
      let pilotNameArray = pilotName.value.split('');
      let copilotNameArray = copilotName.value.split('');
      let isBlank = false;
      let div = document.getElementById("faultyItems"); //.style.visibility = "visible";
      let heading2 = document.getElementById("launchStatus");


      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         isBlank = true;
         alert("All fields are required!");
         event.preventDefault();
      } else if (!isBlank){
            if (isNaN(Number(fuelLevel.value)) || isNaN(Number(cargoMass.value)) || isBadName(pilotNameArray) || isBadName(copilotNameArray)) {
               alert("Make sure to enter valid information for each field!");
               event.preventDefault();
            } 
         }
      
      console.log("fuelLevel.value is type and value " , typeof fuelLevel.value, fuelLevel.value);
      console.log("Number(fuelLevel.value) is type and value ", typeof Number(fuelLevel.value), Number(fuelLevel.value));
      if (Number(fuelLevel.value) < 10000) {
         console.log("hit low fuel level function");
         heading2.textContent = "Shuttle Not Ready For Launch!";
         heading2.style.color  = "red";
         //document.getElementById("faultyItems").style.visibility = "visible";
         div.innerHTML = `
            <ol style="visibility:visible">
               <li id="pilotStatus">Pilot ${pilotName.value} is Ready</li>
               <li id="copilotStatus">Co-pilot ${copilotName.value} is Ready</li>
               <li id="fuelStatus">Fuel level is too low for launch</li>
               <li id="cargoStatus">Cargo mass low enough for launch</li>
            </ol>
         `; 
         event.preventDefault();
      }
   }); 
});
//style="visibility:visible"
// if (form.username.value == "") {
//    document.getElementById("surnameMissing").style.visibility = "visible";        
//  }


      // else {
      //    isBlank = false;
      // }


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
   // console.log(pilotNameArray);
   // console.log(copilotNameArray);
   // console.log("type of pilotName.value is ", typeof pilotName.value, "pilotName.Value is ",pilotName.value);
   // console.log("type of copilotName.value is ", typeof copilotName.value, "pilotName.Value is ",copilotName.value);
   // console.log("type of fuelLevel.value is ", typeof fuelLevel.value, typeof Number(fuelLevel), "fuelLevel.Value is ",fuelLevel.value);
   // console.log("type of cargoMass.value is ", typeof cargoMass.value, typeof Number(cargoMass), "cargoMass.Value is ",cargoMass.value);
      