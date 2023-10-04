export const FunctionsJS = function({
    HTMLelements
}){
    function calculates (){

    }
    function translateToEnglish(){
        HTMLelements.textLegend.innerHTML = ` The Travel calculator`
        HTMLelements.textLabelDistance.innerHTML = `Travel distance: <span>(km)</span>`
        HTMLelements.inputDistance.placeholder = `Distance`
        HTMLelements.textHowMuchKm.innerHTML = `How much kilometers? <span>(km)</span>`
        HTMLelements.textGasPrice.innerHTML = `Join the gas price`
        HTMLelements.inputGasPrice.placeholder = `price` 
        HTMLelements.buttonCalculates.innerHTML = `Calculates`
    }
    return {
        translateToEnglish
    }
}