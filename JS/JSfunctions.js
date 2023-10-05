export const FunctionsJS = function({
    HTMLelements
}){
    function verifyEmptyInputs  (){
        const emptyInputs = []
        if(HTMLelements.inputDistance.value == '' || HTMLelements.inputGasPrice.value == '' || HTMLelements.inputHowMuchKM.value == ''){
            const allInputWrappers = document.querySelectorAll('.input-wrapper')
            allInputWrappers.forEach((div)=>{
                const actualInput = div.querySelector('input')
                if(actualInput.value == ''){
                    emptyInputs.push(actualInput);
                }
            })
            return emptyInputs;
        }
        else return false;
    }

    function showAlertNoData(isEmpty){
        console.log(isEmpty)
        isEmpty.forEach((EmptyInput)=> {
            const actualInputWrapper = EmptyInput.parentNode;
            const alertNoDataDiv = actualInputWrapper.querySelector('.alert-no-data')
            alertNoDataDiv.classList.remove('hide')
            setTimeout(()=>{
                alertNoDataDiv.classList.add('close')
                setTimeout(()=>{
                    alertNoDataDiv.classList.add('hide')
                    alertNoDataDiv.classList.remove('close')
                },300)
            },2300)
        })
    }
    function buttonCloseModal(){
        document.querySelector('.card-modal').classList.add('hide')
    }

    function buttonCloseModalESC(e){
        if(e.key=='Escape'){
            console.log('escape')
            document.querySelector('.card-modal').classList.add('hide')
        }
    }
    function calculates (event){
        event.preventDefault()
        let isEmpty = verifyEmptyInputs()
        if (!isEmpty){
            const numDist = HTMLelements.inputDistance.value;
            const numKMper = HTMLelements.inputHowMuchKM.value;
            const numPrice = HTMLelements.inputGasPrice.value;
            const result = (numDist/numKMper)*numPrice

            /**variables calculates */
            if (HTMLelements.isEng){
                const txt = `O preço do combustivel para a viagem vai ser de ${result.toFixed(2)}`
            } else { const txt = `the price of the travel i'll be ${result.toFixed(2)} bucks` }
            console.log(txt)
            HTMLelements.textInCardModal.querySelector('h1').innerHTML = txt
            if(!HTMLelements.isEng){
                
            } 
            document.querySelector('.card-modal').classList.remove('hide')

        } else {
            showAlertNoData(isEmpty)
            
        }
    }
    function translateToEnglish(){
        HTMLelements.isEng = true;
        HTMLelements.textLegend.innerHTML = `The Travel calculator`;
        HTMLelements.textLabelDistance.innerHTML = `Travel distance: <span>(km)</span>`;
        HTMLelements.inputDistance.placeholder = `Distance`;
        HTMLelements.textHowMuchKm.innerHTML = `How much kilometers? <span>(km)</span>`;
        HTMLelements.textGasPrice.innerHTML = `Join the gas price`;
        HTMLelements.inputGasPrice.placeholder = `price` ;
        HTMLelements.buttonCalculates.innerHTML = `Calculates`;
    }
    function translateToPortuguese(){
        HTMLelements.isEng = false
        HTMLelements.textLegend.innerHTML = `Calculadora de viagem`;
        HTMLelements.textLabelDistance.innerHTML = `Distância da viagem <span>(km)</span>`;
        HTMLelements.inputDistance.placeholder = `Distância`;
        HTMLelements.textHowMuchKm.innerHTML = `Quantos quilometros por litro?  <span>(km)</span>`;
        HTMLelements.textGasPrice.innerHTML = `Preço da gasolina`;
        HTMLelements.inputGasPrice.placeholder = `preço` ;
        HTMLelements.buttonCalculates.innerHTML = `Calcular`;
        
       
    }
    return {
        buttonCloseModalESC,
        buttonCloseModal,
        calculates,
        translateToPortuguese,
        translateToEnglish
    }
}