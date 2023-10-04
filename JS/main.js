import { Elements } from "./elements.js";
import { FunctionsJS } from "./JSfunctions.js";

const HTMLelements = Elements()
const JSfunctions = FunctionsJS({
    HTMLelements
}) 

HTMLelements.buttonCalculates.addEventListener('click', JSfunctions.calculates)

HTMLelements.buttonTranslateEng.addEventListener('click',JSfunctions.translateToEnglish)