const container1 = document.querySelector('.container1')
const container2 = document.querySelector('.container2')
const startBtn = document.querySelector('.start')

const swap = () => {
    container1.style.transform = `rotateY(180deg)`
    container1.style.zIndex = `0`

    container2.style.transform = `rotateY(0deg)`
    container2.style.zIndex = `0`
}

startBtn.addEventListener('click', swap)

let inputContainer = document.querySelector('.input-container')
let resultContainer = document.querySelector('.result')

let ageInput = document.querySelector('.age-input')
let wgtInput = document.querySelector('.wgt-input')
let hgtInput = document.querySelector('.hgt-input')
let calc = document.querySelector('.calculate')
let gender = document.querySelector('.selectGender')
let activity = document.querySelector('.selectActivity')
let errorMeasage = document.querySelector('.error')

let maintain = document.querySelector('.maintain')
let mild = document.querySelector('.mild')
let loss = document.querySelector('.loss')
let extreme = document.querySelector('.extreme')

let mildpro = 90 / 100
let losspro = 79 / 100
let extremepro = 59 / 100 


let switchBtn = true

const calculate = () => {

    let womenBRM;
    let menBRM;
    let mildresult;
    let lossresult;
    let extremeresult;

    let inputKpi = {
        age: ageInput.value,
        wgt: wgtInput.value,
        hgt: hgtInput.value
    }
    
    let inputCheck = {
        gender: gender.value,
        activity: activity.value
    }


    let checkReq = Object.values(inputKpi).some(el => el == '')
    let checkReq1 = Object.values(inputCheck).some(el => el == 0)

    if(calc.innerHTML == 'Reset') {
        ageInput.style.display = 'block'
        wgtInput.style.display = 'block'
        hgtInput.style.display = 'block'
        gender.style.display = 'block'
        activity.style.display = 'block'
        resultContainer.style.display = 'none'
        calc.innerHTML = 'Calculate'
        ageInput.value = ''
        wgtInput.value = ''
        hgtInput.value = ''
        gender.value = '0'
        activity.value = '0'
    } else {
        if(checkReq == false &&
            checkReq1 == false &&
            inputKpi.age > 14  &&
            inputKpi.wgt > 34 &&
            inputKpi.age < 120 &&
            inputKpi.wgt < 250
             ) {
             if(inputCheck.gender == 1) {
                 let womenCalc = ((10 * inputKpi.wgt) + (6.25 * inputKpi.hgt) - (5 * inputKpi.age) - 161)
                 womenBRM = Math.floor(womenCalc * activity.value) 
                 mildresult = mildpro * womenBRM
                 lossresult = losspro * womenBRM
                 extremeresult = extremepro * womenBRM
                 maintain.innerHTML = `${womenBRM}`
                 mild.innerHTML = `${Math.floor(mildresult)}`
                 loss.innerHTML = `${Math.floor(lossresult)}`
                 extreme.innerHTML = `${Math.floor(extremeresult)}`
                 errorMeasage.innerHTML = ''
                 ageInput.style.display = 'none'
                 wgtInput.style.display = 'none'
                 hgtInput.style.display = 'none'
                 gender.style.display = 'none'
                 activity.style.display = 'none'
                 resultContainer.style.display = 'flex'
                 calc.innerHTML = 'Reset'
             }
             
             else if (inputCheck.gender  == 2) {
                 let menCalc = ((10 * inputKpi.wgt) + (6.25 * inputKpi.hgt) - (5 * inputKpi.age) +5)
                 menBRM = Math.floor(menCalc * activity.value)
                 mildresult = mildpro * menBRM
                 lossresult = losspro * menBRM
                 extremeresult = extremepro * menBRM
                 maintain.innerHTML = `${menBRM}`
                 mild.innerHTML = `${Math.floor(mildresult)}`
                 loss.innerHTML = `${Math.floor(lossresult)}`
                 extreme.innerHTML = `${Math.floor(extremeresult)}`
                 errorMeasage.innerHTML = ''
                 ageInput.style.display = 'none'
                 wgtInput.style.display = 'none'
                 hgtInput.style.display = 'none'
                 gender.style.display = 'none'
                 activity.style.display = 'none'
                 resultContainer.style.display = 'flex'
                 calc.innerHTML = 'Reset'
             }
         } else if(
             checkReq == true ||
             checkReq1 == true
         ) {
             errorMeasage.innerHTML = 'All fields are required'
         } else if (
             inputKpi.age < 15 ||
             inputKpi.age > 120 
         ) {
             errorMeasage.innerHTML = 'Age: please provide a value between 15 - 120'
         } else if (
             inputKpi.wgt < 35 ||
             inputKpi.wgt > 250
         ) {
             errorMeasage.innerHTML = 'Weight: please provide a value between 35 - 250'
         }        
    }   



}

calc.addEventListener('click', calculate)