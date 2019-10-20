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
   let index = Math.floor(Math.random()* 6);
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {  
         let destination = this.document.getElementById("missionTarget");
         destination.innerHTML = `
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[index].name}</li>
               <li>Diameter: ${json[index].diameter}</li>
               <li>Star: ${json[index].star}</li>
               <li>Distance from Earth: ${json[index].distance}</li>
               <li>Number of Moons: ${json[index].moons}</li>
            </ol>
         <img src="${json[index].image}">
         `;
      });
   });

   form.addEventListener('submit',function() {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName");
      let fuelLevel = document.querySelector("input[name=fuelLevel");
      let cargoMass = document.querySelector("input[name=cargoMass");
      let pilotNameArray = pilotName.value.split('');
      let copilotNameArray = copilotName.value.split('');
      let allGood = false
      let div = document.getElementById("faultyItems");
      let heading2 = document.getElementById("launchStatus");
      if (pilotName.value !== "" && copilotName.value !== "" && fuelLevel.value !== "" && cargoMass.value !== "") { 
         if (isNaN(Number(fuelLevel.value)) || isNaN(Number(cargoMass.value)) || isBadName(pilotNameArray) || isBadName(copilotNameArray)) { 
            alert("Make sure to enter valid information for each field!");
            event.preventDefault();
            console.log("fuelLevel.value is type and value " , typeof fuelLevel.value, fuelLevel.value);
            console.log("Number(fuelLevel.value) is type and value ", typeof Number(fuelLevel.value), Number(fuelLevel.value));
         } else {
            allGood = true;
         }
      }  else {
         alert("All fields are required!");
         event.preventDefault();
      } 
      if (allGood && Number(fuelLevel.value) < 10000) {
         heading2.textContent = "Shuttle Not Ready For Launch!";
         heading2.style.color  = "red";
         div.innerHTML = `
            <ol style="visibility:visible">
               <li id="pilotStatus">Pilot ${pilotName.value} is Ready</li>
               <li id="copilotStatus">Co-pilot ${copilotName.value} is Ready</li>
               <li id="fuelStatus" style="color:red">Fuel level is too low for launch</li>
               <li id="cargoStatus">Cargo mass low enough for launch</li>
            </ol>
         `; 
         event.preventDefault();
      } 
      if (allGood && Number(cargoMass.value) > 10000) {
         heading2.textContent = "Shuttle Not Ready For Launch!";
         heading2.style.color  = "red";
         div.innerHTML = `
            <ol style="visibility:visible">
               <li id="pilotStatus">Pilot ${pilotName.value} is Ready</li>
               <li id="copilotStatus">Co-pilot ${copilotName.value} is Ready</li>
               <li id="fuelStatus">Fuel level is high enough for launch</li>
               <li id="cargoStatus" style="color:red">Cargo mass is too great for launch</li>
            </ol>
         `; 
         event.preventDefault();
      } else if (allGood && Number(fuelLevel.value > 10000)) {
      heading2.textContent = "Shuttle Is Ready For Launch";
      heading2.style.color = "green";
      div.innerHTML = `
            <ol style="visibility:hidden">
         `; 
      event.preventDefault();
      }
   }); 
});