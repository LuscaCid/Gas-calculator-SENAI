export function Elements (){
    const textLegend = document.querySelector('form legend')
    const textLabelDistance = document.querySelector('#textDistance')
    const textHowMuchKm = document.querySelector('#howMuchKm')
    const textGasPrice = document.getElementById('gasPriceText')
    const inputDistance = document.querySelector('#travel-distance')
    const inputHowMuchKM = document.querySelector('#kml')
    const inputGasPrice = document.querySelector("#gas-price")
    const buttonCalculates = document.getElementById('calulates')
    const buttonCloseModal = document.querySelector('.close-card')
    const buttonTranslateEng = document.getElementById('eng')
    const buttonTranslatePt = document.getElementById('pt')
    const textInCardModal = document.querySelector('.close-card')
    let isEng = false
    return { 
        isEng,
        textInCardModal,
        buttonCloseModal,
        textLegend,
        textLabelDistance,
        textHowMuchKm,
        textGasPrice,
        inputDistance,
        inputHowMuchKM,
        inputGasPrice,
        buttonCalculates,
        buttonTranslateEng,
        buttonTranslatePt,
    }

}