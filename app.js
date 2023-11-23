import { monitorInputs } from "./functions.js";

const referenceInput = document.getElementById("reference");
const quantityInput = document.getElementById("quantity");
const saveBtn = document.querySelector(".save-btn");
const panelRef = document.querySelector(".reference-panel");
const ulRef = document.querySelector(".ul");
const totalInfo = document.querySelector(".total");
const skuInfo = document.querySelector(".total-sku");
const refInfo = document.querySelector(".total-ref");
const removeBtn = document.querySelector(".remove-btn");


const print = () => {
    window.print()
}

const arrReferences = [];
let totalSku = 0;

document.addEventListener("keypress", (e) => {
    
    if (e.keyCode === 13) {
        saveBtn.click();
    }
});

window.addEventListener('beforeunload', (e) => {
    e.preventDefault()
    e.returnValue = '';

})

removeBtn.disabled = true;

saveBtn.addEventListener("click", () => {
    
    referenceInput.focus()
    panelRef.classList.remove("hidden");
    
    monitorInputs()

    let referenceValue = referenceInput.value;
    let quantityValue = quantityInput.value;

    if (referenceInput.value === "") {
        panelRef.classList.add("hidden");
        removeBtn.disabled = true;
        alert("DIGITE UMA REFERÊNCIA!");
        return;
    }

    if (quantityInput.value === "") {
        panelRef.classList.add("hidden");
        removeBtn.disabled = true;
        alert("DIGITE A QUANTIDADE DE PEÇAS!");
        return;
    }

    if (quantityInput.value < 1){
        panelRef.classList.add("hidden");
        removeBtn.disabled = true;
        alert('DIGITE UM VALOR MAIOR QUE ZERO!')
        return
    }


    if (referenceValue.length < 6) {
        panelRef.classList.add("hidden");
        removeBtn.disabled = true;
        alert("REFERÊNCIA INVÁLIDA!");
        return
    }
    
    referenceInput.value = '';
    quantityInput.value = '';
    
    const oP = { Reference: referenceValue.toUpperCase(), Quantity: Number(quantityValue) };
    

    // removeBtn.disabled = false;
    

    const referenceToFind = referenceValue;
    const index = arrReferences.findIndex((ref) => ref.Reference === referenceToFind);
    console.log(index);

    if (index === -1) {
        totalSku += 1;
    } else {
        totalSku = totalSku;
    }

    arrReferences.push(oP);
    
    const totalQuantity = arrReferences.reduce(
        (totalQuantity, value) => totalQuantity + value.Quantity,
        0
        );
        
    ulRef.innerHTML += `<li>${oP.Reference}  »»»»  ${oP.Quantity}Pçs</li>`;
  

    totalInfo.innerHTML = `<span>TOTAL: ${totalQuantity}</span>`;
    skuInfo.innerHTML = `<span>SKU: ${totalSku}</span>`;
    refInfo.innerHTML = `<span>OP: ${arrReferences.length}</span>`;
});

export {referenceInput, panelRef, removeBtn, quantityInput}


