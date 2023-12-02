const referenceInput = document.getElementById("reference");
const quantityInput = document.getElementById("quantity");
const saveBtn = document.querySelector(".save-btn");
const panelRef = document.querySelector(".reference-panel");
const ulRef = document.querySelector(".ul");
const totalInfo = document.querySelector(".total");
const skuInfo = document.querySelector(".total-sku");
const refInfo = document.querySelector(".total-ref");
const removeBtn = document.querySelector(".remove-btn");
const mediaInfo = document.querySelector(".media");
const logoDiv = document.querySelector(".logo-spinner");

const arrReferences = [];
let totalSku = 0;

document.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        saveBtn.click();
    }
});

window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "";
});

removeBtn.disabled = true;

saveBtn.addEventListener("click", () => {
    logoDiv.classList.remove("hidden");

    setTimeout(() => {
        logoDiv.classList.add("hidden");
        panelRef.classList.remove("hidden");
    }, 1300);

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

    ulRef.innerHTML += `<li><input type="checkbox" id="reference"><label for="reference">\&emsp;${oP.Reference} \&emsp;  &rarr; &emsp; ${oP.Quantity}Pçs</label></li>`;

    totalInfo.innerHTML = `<span>TOTAL: ${totalQuantity}</span>`;
    skuInfo.innerHTML = `<span>SKU: ${totalSku}</span>`;
    refInfo.innerHTML = `<span>OP: ${arrReferences.length}</span>`;
    mediaInfo.innerHTML = `<span>MEDIA: ${Math.floor(
        totalQuantity / arrReferences.length
    )}</span>`;
});

export { quantityInput, referenceInput };
