import { Elements } from "./elements.js";
import { FunctionsJS } from "./JSfunctions.js";

const HTMLelements = Elements();
const JSfunctions = FunctionsJS({
    HTMLelements,
}) 

HTMLelements.buttonTranslatePt.addEventListener('click', JSfunctions.translateToPortuguese);
HTMLelements.buttonTranslateEng.addEventListener('click',JSfunctions.translateToEnglish);

document.querySelector('body').addEventListener('keydown', JSfunctions.buttonCloseModalESC)

HTMLelements.buttonCloseModal.addEventListener('click', JSfunctions.buttonCloseModal)

HTMLelements.buttonCalculates.addEventListener('click', JSfunctions.calculates);