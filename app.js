const referenceInput = document.getElementById("reference");
const quantityInput = document.getElementById("quantity");
const saveBtn = document.querySelector(".save-btn");
const panelRef = document.querySelector(".reference-panel");
const ulRef = document.querySelector(".ul");
const totalInfo = document.querySelector(".total");
const skuInfo = document.querySelector(".total-sku");
const refInfo = document.querySelector(".total-ref");
const removeBtn = document.querySelector(".remove-btn");

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

    const referenceValue = referenceInput.value;
    const quantityValue = quantityInput.value;

    // removeBtn.disabled = false;

    reference = { Reference: referenceValue.toUpperCase(), Quantity: Number(quantityValue) };

    const referenceToFind = referenceValue;

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

    if (referenceValue.length < 6) {
        panelRef.classList.add("hidden");
        removeBtn.disabled = true;
        alert("REFERÊNCIA INVÁLIDA!");
        return;
    }

    referenceInput.value = "";
    quantityInput.value = "";

    index = arrReferences.findIndex((ref) => ref.Reference === referenceToFind);
    console.log(index);

    if (index === -1) {
        totalSku += 1;
    } else {
        totalSku = totalSku;
    }

    arrReferences.push(reference);

    const totalQuantity = arrReferences.reduce(
        (totalQuantity, value) => totalQuantity + value.Quantity,
        0
    );
     

ulRef.innerHTML += `<li><strong>${reference.Reference}  »»»»  ${reference.Quantity}Pçs</strong></li>`;
console.log(ulRef)    // arrReferences.forEach((item) => {
    //     ulRef.innerHTML += `<li><strong>${item.Reference}  »»»»  ${item.Quantity}Pçs</strong></li>`;
    // });

    totalInfo.innerHTML = `<span>TOTAL: ${totalQuantity}</span>`;
    skuInfo.innerHTML = `<span>SKU: ${totalSku}</span>`;
    refInfo.innerHTML = `<span>OP: ${arrReferences.length}</span>`;

    
});

// removeBtn.addEventListener('click', () => {

//     const totalQuantity = arrReferences.reduce(
//         (totalQuantity, value) => totalQuantity + value.Quantity,
//         0
//     );
  
//     lastRef = arrReferences[arrReferences.length -1]

    
//     differenceQuantity = totalQuantity - lastRef.Quantity
    
//     console.log(differenceQuantity)
//     arrReferences.pop()


//     // for (let i = 0; i < arrReferences.length; i++) {
//     //     const ref = arrReferences[i];
//     //     console.log(ref)
        
//     //     if(lastRef.Reference === ref.Reference){
//     //         totalSku = totalSku
//     //     }else {
//     //         totalSku -=1
//     //     }
       
  
//     // }


//     arrReferences.forEach((ref) => {


//         if(lastRef.Reference === ref.Reference){
//         console.log(' já existe a referencia no array')
//         totalSku = totalSku

//         }else{
//         console.log('não existe')
//         totalSku -1
//         }
    
//     })


//     if(arrReferences.length === 0){
//         totalSku = 0
//         panelRef.classList.add("hidden");

//     }

//     // ulRef.innerHTML = `<li><strong>${lastRef.Reference}  »»»»  ${lastRef.Quantity}Pçs</strong></li>`;

//     totalInfo.innerHTML = `<span>TOTAL: ${differenceQuantity}</span>`;
//     skuInfo.innerHTML = `<span>SKU: ${totalSku}</span>`;
//     refInfo.innerHTML = `<span>OP: ${arrReferences.length}</span>`;
   

// })




// removeBtn.addEventListener("click", () => {
//     const response = confirm("DESEJA REMOVER A ÚLTIMA REFERÊNCIA?");

//     if (response == false) {
//         return;
//     }

//     lastRef = arrReferences[arrReferences.length -1].Reference

//  for (let i = 0; i < arrReferences.length; i++) {
//     const element = arrReferences[i].Reference;

//     removedRef = arrReferences.pop();

//     if(element.includes()){
//         console.log('tinha uma ref igual')
//     }else{console.log('não tinha uma ref igual')}

//     if(element.Reference === lastRef ){
//         console.log('tinha duas ref iguais')

//     }else if(element.Reference !== lastRef)
//     {totalSku -= 1}

//  }

//     if(arrReferences.includes(lastReference)){
//         totalSku -= 1
//     }else {
//         totalSku = totalSku
//     }

//     arrReferences.forEach((item) => {
//         ulRef.innerHTML = `<span>${item.Reference} »»»» ${item.Quantity}</span>`;
//     });

//     const totalQuantity = arrReferences.reduce(
//         (totalQuantity, value) => totalQuantity + value.Quantity,
//         0
//     );

//     totalInfo.innerHTML = `<span>TOTAL: ${totalQuantity}</span>`;
//     skuInfo.innerHTML = `<span>SKU: ${totalSku}</span>`;
//     refInfo.innerHTML = `<span>REF: ${arrReferences.length}</span>`;

//     if (totalQuantity === 0) {
//         panelRef.classList.add("hidden");
//         ulRef.innerHTML = "";
//         totalInfo.innerHTML = "";

//         skuInfo.innerHTML = '';
//         refInfo.innerHTML = '';
//     }
// });
