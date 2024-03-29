import { quantityInput, referenceInput, refPanel, removeBtn, logoDiv, refList, totalInfo, skuInfo, refInfo, mediaInfo} from "./app.js";

const arrReferences = [];
let totalSku = 0;

const showReferenceSaved = () => {
   
    referenceInput.focus();

    let quantityValue = Number(quantityInput.value);
    let referenceValue = referenceInput.value;
    
    referenceInput.value = "";
    quantityInput.value = "";

    const oP = {
        Reference: referenceValue.toUpperCase(),
        Quantity: Number(quantityValue)
    };

    removeBtn.disabled = true;

    const referenceToFind = referenceValue;

    const index = arrReferences.findIndex(
        (ref) => ref.Reference === referenceToFind
        
        );
        
    setTimeout(() => {
        
        logoDiv.classList.add("hidden");
        refPanel.classList.remove("hidden");

        let refCount = 1;

        for (let i = 0; i < arrReferences.length; i++) {
           
            if (referenceToFind === arrReferences[i].Reference) {
                refCount ++ 

            } 

        }

        const notContainInArr = index === -1;
        const containInArr = index !== -1;
        
        const elementWithCounter = `<li class='contain'><input type="checkbox" id="reference"><label for="reference">\&emsp;${oP.Reference} \&emsp;  &rarr; &emsp; ${oP.Quantity}Pçs &emsp;<span>(${refCount})</span>&emsp;</label></li>`;

        const elementWithoutCounter = `<li class='not-contain'><input type="checkbox" id="reference"><label for="reference">\&emsp;${oP.Reference} \&emsp;  &rarr; &emsp; ${oP.Quantity}Pçs &emsp;</label></li>`;

        const accumulatedCounterElement = `<li class='not-contain'><input type="checkbox" id="reference"><label for="reference">\&emsp;${oP.Reference} \&emsp;  &rarr; &emsp; ${  oP.Quantity + quantityValue }Pçs &emsp;</label></li>`;

        
        if (notContainInArr) {
            
            totalSku += 1;
           
             refList.innerHTML += `${elementWithoutCounter}`
           
        } 
        if(containInArr) {

    
            refList.innerHTML += `${elementWithoutCounter}`
           
            }

            arrReferences.push(oP);

            totalSku
        
        const totalQuantity = arrReferences.reduce(
            (totalQuantity, value) => totalQuantity + value.Quantity,
            0
        );

        if(arrReferences.length >= 15){
            refList.style.fontSize= 14+'px'        
        }

        if(arrReferences.length >= 20){
            refList.style.fontSize= 12+'px'        
        }
    
        totalInfo.innerHTML = `<span>TOTAL: ${totalQuantity}</span>`;
        skuInfo.innerHTML = `<span>SKU: ${totalSku}</span>`;
        refInfo.innerHTML = `<span>OP: ${arrReferences.length}</span>`;
        mediaInfo.innerHTML = `<span>MEDIA: ${Math.floor(
            totalQuantity / arrReferences.length
        )}</span>`;
    }, 1300);
}

export { showReferenceSaved }