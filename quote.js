
//CONTAINERS FOR FIRST INPUT FIELDS AND THEIR LABELS
const divapartments = document. getElementById ("div-number-apartments")
const divfloors = document .getElementById("div-number-of-floors-in-the-building")
const divoccupancy = document .getElementById("div-maxium-occupancy")
const divelevators = document . getElementById ("div-number-of-elevators-needed")

//INPUT FIELDS FOR USER TO TYPE INTO
const inputApartment = document.getElementById ("apartments-input")
const inputfloors = document.getElementById ("Floors-input")
const inputoccupancy = document.getElementById ("occupancy-input")
const inputelevator = document . getElementById ("Elevator-input")

//installtion fees
const feeinstalliton = document.getElementById("instaillation-fees")

//total cost
const costtotal = document.getElementById("total-cost")


//CONTAINER FOR STANDARD,PREMIUM,EXCELIUM
const divchoices= document. getElementById("div-standard-Premium-Excelium")


//PRICE PER UNIT 
const perunitprice=document.getElementById("price-per-unit")

//OUTPUTS DISPLAY
const divrequiredelavators =document. getElementById("div-required-elavators")

//ELAVATORS REQUIRED INPUT
const elavatorinput= document.getElementById("requirement-Elevators-input")


//ALL THREE FIRST BUTTONS SEEN 
const divbuttonfunctions=document.getElementById("div-button-functions")
const dropbuttoninput=document.getElementById("drop-buttons-input")



//FIRST BUTTONS SEEN
const residentialbutton=document.getElementById("residential-button")
const commericalbutton=document.getElementById("commercial-button")
const industrialbutton=document.getElementById("industrial-button")


//PRODUCT TIER LIST
const standardbutton = document.getElementById("standard-button")
const Premiumbutton  = document.getElementById("premium-button")
const Exceliumbutton = document.getElementById("excelium-button")

//DROP DOWN BUTTONS
divrequiredelavators.style.display="none"
divchoices.style.display="none"
divelevators.style.display="none"
divfloors.style.display="none"
divapartments.style.display="none"
divoccupancy.style.display="none"


//===============================BUILDING TYPE BUTTON EVENT LISTENERS===============================//

//Event listener for the residential button
residentialbutton.addEventListener("click", () => {
    divapartments.style.display="block"
    divfloors.style.display="block"
    divchoices.style.display="block"
})

//Event listener for the Commercial button
commericalbutton.addEventListener("click", () => {
    divfloors.style.display="block"
    divoccupancy.style.display="block"
    divchoices.style.display="block"
})

//Event listener for the Industrial button
industrialbutton.addEventListener("click", () => {
    divelevators.style.display="block"
    divchoices.style.display="block"
})  


//===============================PRODUCT TIER BUTTON EVENT LISTENERS===============================//


standardbutton.addEventListener("click", () => {

    //cost per elevator
    const unitPrice = 8000

    //instillation fee percentage
    const instillationFee = 0.10

    //number of elevators the user requires
 
    const requiredElevators = elavatorinput.value


    //Display the unit price to the user
    perunitprice.value = unitPrice

    //Get the total elevator cost (unit cost * number of elevators required)
    const totalElevatorCost =  unitPrice*requiredElevators


    //Get the total instillation fee (multiplying the number of elevators by the instillation fee)
    const installationTotal =  totalElevatorCost*instillationFee


    //Get the final cost by adding the total instillation fee and the total evelator cost

     const Totalcost= installationTotal+totalElevatorCost


    //Visually display the final cost and the instaillation cost to the user
   feeinstalliton.value=installationTotal
   costtotal.value=Totalcost
   
})

Premiumbutton.addEventListener("click", () => {
    //cost per elevator
    const unitPrice = 12000

    //instillation fee percentage
    const instillationFee = 0.15

    //number of elevators the user requires
 
    const requiredElevators = elavatorinput.value


    //Display the unit price to the user
    perunitprice.value = unitPrice

//Get the total elevator cost (unit cost * number of elevators required)
    const totalElevatorCost =  unitPrice*requiredElevators
   
   
    //Get the total instillation fee (multiplying the number of elevators by the instillation fee)
    const installationTotal =  totalElevatorCost*instillationFee


    //Get the final cost by adding the total instillation fee and the total evelator cost

     const Totalcost= installationTotal+totalElevatorCost


    //Visually display the final cost and the instaillation cost to the user
   feeinstalliton.value=installationTotal
   costtotal.value=Totalcost
})

Exceliumbutton.addEventListener("click",() => {
    //cost per elevator
    const unitPrice = 15000

    //instillation fee percentage
    const instillationFee = 0.20

    //number of elevators the user requires

    const requiredElevators = elavatorinput.value


    //Display the unit price to the user
    perunitprice.value = unitPrice

    //Get the total instillation fee (multiplying the number of elevators by the instillation fee)
    const installationTotal =  totalElevatorCost*instillationFee


    //Get the total elevator cost (unit cost * number of elevators required)
    const totalElevatorCost =  unitPrice*requiredElevators


    //Get the final cost by adding the total instillation fee and the total evelator cost

    const Totalcost= installationTotal+totalElevatorCost


    //Visually display the final cost and the instaillation cost to the user
    feeinstalliton.value=installationTotal
    costtotal.value=Totalcost

})


//===============================RESIDENTIAL ELEVATOR MATH===============================//

const residentialMath = () => {

    //apartmentinput
    const numberofapartment = inputApartment.value

    //floors input
    const numberoffloors = inputfloors.value

    //divide the number of apartments by the number of floors to obtain an average of apartments per floor
    const averageapartmentsperfloor = Math.ceil( numberofapartment/numberoffloors )

    // A elavator for every 6 apartment per floor
    const numberofelavators = Math.ceil(averageapartmentsperfloor/6)

    //turning on display for elavators required 
    divrequiredelavators.style.display="block"

    //how many elavator banks i need 
    const elavatorbanks = Math.ceil(numberoffloors/20)

    //finding how many elavators the customer needs
    const totalelavators = Math.ceil(numberofelavators * elavatorbanks)

    //displaying number to user
    elavatorinput.value = totalelavators

}


inputApartment.addEventListener("input", () => {

    residentialMath()

})

//PROBELM: number of floors needs an event listener
//Residential and commercial both use number of floors

inputfloors.addEventListener("input", () => {


    if(residentialbutton.checked){
        residentialMath()

    }else if(commericalbutton.checked){

        commercialmath()
    }


})

//===============================COMMERCIAL ELEVATOR MATH===============================//

const commercialmath = () => {

    const maxiumoccupancy = inputoccupancy.value

    const numberoffloors = inputfloors.value

    const totalnumberofoccupants= Math.ceil (maxiumoccupancy*numberoffloors)

    const  requiredelevatorsperbank  = Math.ceil (totalnumberofoccupants/200)

    const elavatorbanksrequierd = Math.ceil (numberoffloors/10)

    const totalnumberofelavator= Math.ceil (elavatorbanksrequierd*requiredelevatorsperbank+elavatorbanksrequierd)

    divrequiredelavators.style.display="block"

    elavatorinput.value =totalnumberofelavator

}



//*the maximum occupancy per floor by the number of floors to obtain the total number of occupants.
inputoccupancy.addEventListener("input",() => {

    commercialmath()

})

//===============================INDUSTRIAL ELEVATOR MATH===============================//

inputelevator.addEventListener("input", () => {
    
    divrequiredelavators.style.display="block"

    elavatorinput.value=inputelevator.value


})
