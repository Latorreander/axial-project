import { quantityInput, referenceInput, panelRef, removeBtn, logoDiv, refList, totalInfo, skuInfo, refInfo, mediaInfo } from "./app.js";



const arrReferences = [];
let totalSku = 0;

const showReferenceSaved = () => {
   

    referenceInput.focus();

    let quantityValue = quantityInput.value;
    let referenceValue = referenceInput.value;
    
    referenceInput.value = "";
    quantityInput.value = "";

    const oP = {
        Reference: referenceValue.toUpperCase(),
        Quantity: Number(quantityValue),
    };

    // removeBtn.disabled = false;

    const referenceToFind = referenceValue;
    const index = arrReferences.findIndex(
        (ref) => ref.Reference === referenceToFind
        );
       
    setTimeout(() => {
        
   
    

        logoDiv.classList.add("hidden");
        panelRef.classList.remove("hidden");

        let refCount = 1;

        for (let i = 0; i < arrReferences.length; i++) {
           
            if (referenceToFind === arrReferences[i].Reference) {
                refCount++
                
            }
   
        }

        const notContainClass = document.querySelector('.not-contain')
        
        const notContainInArr = index === -1;
        const containInArr = index !== -1;

        if (notContainInArr) {
      
       
            totalSku += 1;

            refList.innerHTML += `<li class='not-contain'><input type="checkbox" id="reference"><label for="reference">\&emsp;${oP.Reference} \&emsp;  &rarr; &emsp; ${oP.Quantity}Pçs </label></li>`;
            
            

        } else if (containInArr) {

            totalSku

            console.log(notContainClass)

            notContainClass.classList.add('hidden')
            
            
            refList.innerHTML += `<li class='contain'><input type="checkbox" id="reference"><label for="reference">\&emsp;${oP.Reference} \&emsp;  &rarr; &emsp; ${oP.Quantity}Pçs <span>(${refCount})</span></label></li>`;
        

        }
        
        arrReferences.push(oP);

        const totalQuantity = arrReferences.reduce(
            (totalQuantity, value) => totalQuantity + value.Quantity,
            0
        );
    
        // refList.innerHTML += `<li><input type="checkbox" id="reference"><label for="reference">\&emsp;${oP.Reference} \&emsp;  &rarr; &emsp; ${oP.Quantity}Pçs <span>(${repeatRef})</span></label></li>`;
    
        totalInfo.innerHTML = `<span>TOTAL: ${totalQuantity}</span>`;
        skuInfo.innerHTML = `<span>SKU: ${totalSku}</span>`;
        refInfo.innerHTML = `<span>OP: ${arrReferences.length}</span>`;
        mediaInfo.innerHTML = `<span>MEDIA: ${Math.floor(
            totalQuantity / arrReferences.length
        )}</span>`;
    }, 1300);
}


export { showReferenceSaved }