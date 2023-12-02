import { quantityInput, referenceInput } from "./app.js";

let referenceValue = referenceInput.value;
 
const verifyInputs = () => {

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
}