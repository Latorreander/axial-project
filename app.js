import { showReferenceSaved } from "./services.js";

const referenceInput = document.getElementById("reference");
const quantityInput = document.getElementById("quantity");
const saveBtn = document.querySelector(".save-btn");
const refPanel = document.querySelector(".reference-panel");
const refList = document.querySelector(".list");
const totalInfo = document.querySelector(".total");
const skuInfo = document.querySelector(".total-sku");
const refInfo = document.querySelector(".total-ref");
const removeBtn = document.querySelector(".remove-btn");
const mediaInfo = document.querySelector(".media");
const logoDiv = document.querySelector(".logo-spinner");

window.onbeforeunload = () => {
    event.preventDefault();
};

document.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        saveBtn.click();
    }
});

removeBtn.disabled = true;

saveBtn.addEventListener("click", () => {
    logoDiv.classList.remove("hidden");

    let referenceValue = referenceInput.value;
    let quantityValue = quantityInput.value;

    if (referenceValue === "") {
        refPanel.classList.add("hidden");
        removeBtn.disabled = true;
        alert("DIGITE UMA REFERÊNCIA!");
        return;
    }

    if (quantityValue === "") {
        refPanel.classList.add("hidden");
        removeBtn.disabled = true;
        alert("DIGITE A QUANTIDADE DE PEÇAS!");
        return;
    }

    if (quantityValue < 1) {
        refPanel.classList.add("hidden");
        removeBtn.disabled = true;
        alert("DIGITE UM VALOR MAIOR QUE ZERO!");
        return;
    }

    if (referenceValue.length < 6) {
        refPanel.classList.add("hidden");
        removeBtn.disabled = true;
        alert("REFERÊNCIA INVÁLIDA!");
        return;
    }

    showReferenceSaved();
});

export {
    quantityInput,
    referenceInput,
    refPanel,
    removeBtn,
    logoDiv,
    refList,
    totalInfo,
    skuInfo,
    refInfo,
    mediaInfo,
};
