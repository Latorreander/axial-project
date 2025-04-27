const data = document.querySelectorAll(".data");
const lastData = document.querySelector(".last-data");
const data01 = document.getElementById("data-01");
const data02 = document.getElementById("data-02");
const data03 = document.getElementById("data-03");
const data04 = document.getElementById("data-04");
const data05 = document.getElementById("data-05");
const data06 = document.getElementById("data-06");
const data07 = document.getElementById("data-07");
const data08 = document.getElementById("data-08");
const data09 = document.getElementById("data-09");
const dataForm = document.getElementById("dataForm");

const inputTargetDay = document.getElementById("goal");
const goalBtn = document.querySelector(".goal-btn");
const inputTurn = document.getElementById("turn");
const inputRealized = document.getElementById("h-h_realized");
const inputRealized_01 = document.getElementById("h-h_realized_01");
const inputRealized_02 = document.getElementById("h-h_realized_02");
const inputRealized_03 = document.getElementById("h-h_realized_03");
const inputRealized_04 = document.getElementById("h-h_realized_04");
const inputRealized_05 = document.getElementById("h-h_realized_05");
const inputRealized_06 = document.getElementById("h-h_realized_06");
const inputRealized_07 = document.getElementById("h-h_realized_07");
const inputRealized_08 = document.getElementById("h-h_realized_08");
const inputRealized_09 = document.getElementById("h-h_realized_09");

const btnRealized_01 = document.querySelector(".btn-realized_01");
const btnRealized_02 = document.querySelector(".btn-realized_02");
const btnRealized_03 = document.querySelector(".btn-realized_03");
const btnRealized_04 = document.querySelector(".btn-realized_04");
const btnRealized_05 = document.querySelector(".btn-realized_05");
const btnRealized_06 = document.querySelector(".btn-realized_06");
const btnRealized_07 = document.querySelector(".btn-realized_07");
const btnRealized_08 = document.querySelector(".btn-realized_08");
const btnRealized_09 = document.querySelector(".btn-realized_09");

const turnBtn = document.querySelector(".turn-btn");
const messageDiv = document.querySelector(".message");
const inputRadioYes = document.getElementById("SIM");
const inputRadioNo = document.getElementById("NÃO");
const inputRadio = document.querySelector(".input-radio");
const displayInfo = document.querySelector(".info");

btnRealized_01.disabled = true;
btnRealized_02.disabled = true;
btnRealized_03.disabled = true;
btnRealized_04.disabled = true;
btnRealized_05.disabled = true;
btnRealized_06.disabled = true;
btnRealized_07.disabled = true;
btnRealized_08.disabled = true;
btnRealized_09.disabled = true;

inputRealized_01.disabled = true;
inputRealized_02.disabled = true;
inputRealized_03.disabled = true;
inputRealized_04.disabled = true;
inputRealized_05.disabled = true;
inputRealized_06.disabled = true;
inputRealized_07.disabled = true;
inputRealized_08.disabled = true;
inputRealized_09.disabled = true;

let workedHours = 0;
let workHour = 0;
let targetDay = 0;
let totalRealized = 0;
let balanceDay = 0;
let goalH_H = 0;

goalBtn.disabled = true;

const inputFocus = (inputEnabled) => {
    document.getElementById(inputEnabled).focus();
    
};

window.onbeforeunload = () => {
    event.preventDefault();
};

inputRadio.addEventListener("input", (e) => {
    inputTurn.value = e.target.value;
    if (e.target.value === undefined) {
        inputTurn.value = "";
    }
});

inputTargetDay.addEventListener("input", () => {
    if (inputTargetDay.value === "") {
        goalBtn.disabled = true;
    } else {
        goalBtn.disabled = false;
    }
});

goalBtn.addEventListener("click", () => {
    inputRadioYes.disabled = true;
    inputRadioNo.disabled = true;
    inputRealized_01.disabled = false;
    btnRealized_01.disabled = false;
    inputFocus("h-h_realized_01");

    workHour = Number(inputTurn.value);
    goalBtn.disabled = true;

    targetDay = Number(inputTargetDay.value);
    console.log("Meta do dia:", targetDay);

    goalH_H = targetDay / workHour;

    data.forEach((elem) => {
        elem.innerHTML = `${Math.round(goalH_H)}`;
    });

    calcLast20Minutes(goalH_H);
    checkWorkedHour();
    showInfo(0, goalH_H);
    goalPpm(goalH_H);
});

const calcLast20Minutes = (goalH_H) => {
    let goalLast20Minutes = targetDay - goalH_H * (workHour - 0.3);

    lastData.innerHTML = `${Math.ceil(goalLast20Minutes) + 1}`;

    if (goalH_H < 0) {
        lastData.innerHTML = goalH_H;
    }
};

const calcLast20minH_H = (targetDay, balanceHour, hoursLeft) => {
    let goalLast20Minutes = targetDay - balanceHour * (hoursLeft - 0.3);

    lastData.innerHTML = `${Math.round(goalLast20Minutes)}`;

    if (balanceHour < 0) {
        lastData.innerHTML = 0;
    }
};

//função que confere a quantidade de horas trabalhadas
const checkWorkedHour = () => {
    if (workHour === 7.3) {
        data06.innerHTML = "INTERVALO";
        inputRealized_06.value = "❌";
        inputRealized_06.disabled = true;
    }
};

// função verifica valor da sexta hora para habilitar a mesma
const controlValue = () => {
    if (inputRealized_06.value !== "❌") {
        inputRealized_06.disabled = false;
        btnRealized_06.disabled = false;
        inputFocus("h-h_realized_06");
    } else {
        btnRealized_06.disabled = true;
        inputRealized_06.disabled = true;
        btnRealized_07.disabled = false;
        inputRealized_07.disabled = false;
    }
};

// função soma valores ja produzidos por hora:
const sumH_H = (x) => {
    return (totalRealized += Number(x.value));
};

// função calcula a meta diária menos a quantidade já produzida:
const goalBalanceDay = () => {
    balanceDay = targetDay - totalRealized;

    return balanceDay;
};

//função calcula o saldo de peças:
const balance_H_H = (balance) => {
    console.log("Saldo de peças:", balance);
};

//função  atualiza a meta hora/hora:
const insertNewBalance_H_H = (hours) => {
    let balance = `${Math.round(balanceDay / hours)}`;

    data.forEach((elem) => {
        elem.innerHTML = balance;

        if (balance < 0) {
            elem.innerHTML = "0";
        }
    });

    console.log("Meta atualizada por hora:", Number(balance));

    return balance;
};

//função insere a quantidade produzida em cada hora:
const insertValueH_H = (dataH_H, inputValue) => {
    dataH_H.innerHTML = `${inputValue}`;
};

const insertColor = (balance, inputValue, data) => {
    if (inputValue < balance) {
        data.style.backgroundColor = "#FF6347";
        data.style.color = "#B22222";
    } else if (inputValue >= balance) {
        data.style.backgroundColor = "#98FB98";

        data.style.color = "#008000";
    }
};
// função de confirmação de inserção de valor
const confirmDataInclusion = () => {
    let response = confirm("INSERIR QUANTIDADE?");
    if (response === false) {
        return response;
    }
};

//eventos dos botões de confirmação
btnRealized_01.addEventListener("click", () => {
   
    let trueOrFalse = confirmDataInclusion();

    if (trueOrFalse === false) {
        return;
    }

    btnRealized_01.disabled = true;
    btnRealized_02.disabled = false;
    inputRealized_01.disabled = true;
    inputRealized_02.disabled = false;
    inputFocus("h-h_realized_02");
 
    let totalRealized = sumH_H(inputRealized_01);

    console.log("Peças Produzidas:", totalRealized);
    balanceDay = goalBalanceDay();
    workHour;
    workedHours++;

    let hoursLeft = workHour - workedHours;

    let balanceHour = insertNewBalance_H_H(hoursLeft);
    insertValueH_H(data01, inputRealized_01.value);
    insertColor(balanceHour, inputRealized_01.value, data01);

    balance_H_H(balanceDay);

    calcLast20minH_H(balanceDay, balanceHour, hoursLeft);
    checkWorkedHour();
    showInfo(inputRealized_01.value, balanceHour);
     
});


btnRealized_02.addEventListener("click", () => {
    
    let trueOrFalse = confirmDataInclusion();

    if (trueOrFalse === false) {
        return;
    }

    btnRealized_01.disabled = true;
    btnRealized_02.disabled = true;
    btnRealized_03.disabled = false;

    inputRealized_01.disabled = true;
    inputRealized_02.disabled = true;
    inputRealized_03.disabled = false;
   
    inputFocus("h-h_realized_03");

    let totalRealized = sumH_H(inputRealized_02);
    console.log("Peças Produzidas:", totalRealized);
    balanceDay = goalBalanceDay();
    balance_H_H(balanceDay);
    workHour;
    workedHours++;

    let hoursLeft = workHour - workedHours;

    let balanceHour = insertNewBalance_H_H(hoursLeft);
    insertValueH_H(data02, inputRealized_02.value);

    insertColor(balanceHour, inputRealized_02.value, data02);
    insertNewBalance_H_H(hoursLeft);
    insertValueH_H(data01, inputRealized_01.value);
    insertValueH_H(data02, inputRealized_02.value);

    calcLast20minH_H(balanceDay, balanceHour, hoursLeft);
    checkWorkedHour();
    showInfo(inputRealized_02.value, balanceHour);
   
});

btnRealized_03.addEventListener("click", () => {
    let trueOrFalse = confirmDataInclusion();

    if (trueOrFalse === false) {
        return;
    }

    btnRealized_01.disabled = true;
    btnRealized_02.disabled = true;
    btnRealized_03.disabled = true;
    btnRealized_04.disabled = false;

    inputRealized_01.disabled = true;
    inputRealized_02.disabled = true;
    inputRealized_03.disabled = true;
    inputRealized_04.disabled = false;
    inputFocus("h-h_realized_04");

    let totalRealized = sumH_H(inputRealized_03);
    console.log("Peças Produzidas:", totalRealized);
    balanceDay = goalBalanceDay();
    balance_H_H(balanceDay);

    workHour;
    workedHours++;

    let hoursLeft = workHour - workedHours;
    let balanceHour = insertNewBalance_H_H(hoursLeft);

    insertColor(balanceHour, inputRealized_03.value, data03);
    insertNewBalance_H_H(hoursLeft);
    insertValueH_H(data01, inputRealized_01.value);
    insertValueH_H(data02, inputRealized_02.value);
    insertValueH_H(data03, inputRealized_03.value);
    console.log("horas de trabalho restantes:", hoursLeft);

    calcLast20minH_H(balanceDay, balanceHour, hoursLeft);
    checkWorkedHour();
    showInfo(inputRealized_03.value, balanceHour);
    
});

btnRealized_04.addEventListener("click", () => {
    let trueOrFalse = confirmDataInclusion();

    if (trueOrFalse === false) {
        return;
    }

    btnRealized_01.disabled = true;
    btnRealized_02.disabled = true;
    btnRealized_03.disabled = true;
    btnRealized_04.disabled = true;
    btnRealized_05.disabled = false;

    inputRealized_01.disabled = true;
    inputRealized_02.disabled = true;
    inputRealized_03.disabled = true;
    inputRealized_04.disabled = true;
    inputRealized_05.disabled = false;
    inputFocus("h-h_realized_05");

    let totalRealized = sumH_H(inputRealized_04);
    console.log("Peças Produzidas:", totalRealized);
    balanceDay = goalBalanceDay();
    balance_H_H(balanceDay);
    workHour;
    workedHours++;

    let hoursLeft = workHour - workedHours;
    let balanceHour = insertNewBalance_H_H(hoursLeft);
    insertColor(balanceHour, inputRealized_04.value, data04);

    insertNewBalance_H_H(hoursLeft);
    insertValueH_H(data01, inputRealized_01.value);
    insertValueH_H(data02, inputRealized_02.value);
    insertValueH_H(data03, inputRealized_03.value);
    insertValueH_H(data04, inputRealized_04.value);
    console.log("horas de trabalho restantes:", hoursLeft);

    calcLast20minH_H(balanceDay, balanceHour, hoursLeft);
    checkWorkedHour();
    showInfo(inputRealized_04.value, balanceHour);
    
});

const disableButton = (hoursLeft) => {
    if (hoursLeft === 2) {
        btnRealized_06.disabled = true;
        btnRealized_07.disabled = false;
    }
};

btnRealized_05.addEventListener("click", () => {
    let trueOrFalse = confirmDataInclusion();

    if (trueOrFalse === false) {
        return;
    }

    btnRealized_01.disabled = true;
    btnRealized_02.disabled = true;
    btnRealized_03.disabled = true;
    btnRealized_04.disabled = true;
    btnRealized_05.disabled = true;
    btnRealized_06.disabled = false;

    inputRealized_01.disabled = true;
    inputRealized_02.disabled = true;
    inputRealized_03.disabled = true;
    inputRealized_04.disabled = true;
    inputRealized_05.disabled = true;
    inputRealized_06.disabled = false;

    controlValue();

    inputFocus("h-h_realized_07");

    let totalRealized = sumH_H(inputRealized_05);
    console.log("Peças Produzidas:", totalRealized);
    balanceDay = goalBalanceDay();
    balance_H_H(balanceDay);

    workHour;
    workedHours++;

    let hoursLeft = workHour - workedHours;
    let balanceHour = insertNewBalance_H_H(hoursLeft);

    disableButton(hoursLeft);
    insertColor(balanceHour, inputRealized_05.value, data05);
    insertNewBalance_H_H(hoursLeft);
    insertValueH_H(data01, inputRealized_01.value);
    insertValueH_H(data02, inputRealized_02.value);
    insertValueH_H(data03, inputRealized_03.value);
    insertValueH_H(data04, inputRealized_04.value);
    insertValueH_H(data05, inputRealized_05.value);
    console.log("horas de trabalho restantes:", hoursLeft);
    showMessage(balanceDay);

    calcLast20minH_H(balanceDay, balanceHour, hoursLeft);
    checkWorkedHour();
    showInfo(inputRealized_05.value, balanceHour);
    
});

btnRealized_06.addEventListener("click", () => {
    let trueOrFalse = confirmDataInclusion();

    if (trueOrFalse === false) {
        return;
    }

    btnRealized_01.disabled = true;
    btnRealized_02.disabled = true;
    btnRealized_03.disabled = true;
    btnRealized_04.disabled = true;
    btnRealized_05.disabled = true;
    btnRealized_06.disabled = true;
    btnRealized_07.disabled = false;

    inputRealized_01.disabled = true;
    inputRealized_02.disabled = true;
    inputRealized_03.disabled = true;
    inputRealized_04.disabled = true;
    inputRealized_05.disabled = true;
    inputRealized_06.disabled = true;
    inputRealized_07.disabled = false;
    inputFocus("h-h_realized_07");

    let totalRealized = sumH_H(inputRealized_06);
    console.log("Peças Produzidas:", totalRealized);

    balanceDay = goalBalanceDay();
    balance_H_H(balanceDay);
    workHour;
    workedHours++;

    let hoursLeft = workHour - workedHours;
    let balanceHour = insertNewBalance_H_H(hoursLeft);

    insertColor(balanceHour, inputRealized_06.value, data06);
    insertNewBalance_H_H(hoursLeft);
    insertValueH_H(data01, inputRealized_01.value);
    insertValueH_H(data02, inputRealized_02.value);
    insertValueH_H(data03, inputRealized_03.value);
    insertValueH_H(data04, inputRealized_04.value);
    insertValueH_H(data05, inputRealized_05.value);
    insertValueH_H(data06, inputRealized_06.value);

    console.log("horas de trabalho restantes:", hoursLeft);

    calcLast20minH_H(balanceDay, balanceHour, hoursLeft);
    checkWorkedHour();
    showMessage(balanceDay);
    showInfo(inputRealized_06.value, balanceHour);
    
});

btnRealized_07.addEventListener("click", () => {
    let trueOrFalse = confirmDataInclusion();

    if (trueOrFalse === false) {
        return;
    }

    btnRealized_01.disabled = true;
    btnRealized_02.disabled = true;
    btnRealized_03.disabled = true;
    btnRealized_04.disabled = true;
    btnRealized_05.disabled = true;
    btnRealized_06.disabled = true;
    btnRealized_06.disabled = true;
    btnRealized_07.disabled = true;
    btnRealized_08.disabled = false;

    inputRealized_01.disabled = true;
    inputRealized_02.disabled = true;
    inputRealized_03.disabled = true;
    inputRealized_04.disabled = true;
    inputRealized_05.disabled = true;
    inputRealized_06.disabled = true;
    inputRealized_07.disabled = true;
    inputRealized_08.disabled = false;
    inputFocus("h-h_realized_08");

    let totalRealized = sumH_H(inputRealized_07);
    console.log("Peças Produzidas:", totalRealized);
    balanceDay = goalBalanceDay();
    balance_H_H(balanceDay);
    workHour;
    workedHours++;

    let hoursLeft = workHour - workedHours;

    let balanceHour = insertNewBalance_H_H(hoursLeft);

    insertColor(balanceHour, inputRealized_07.value, data07);
    insertNewBalance_H_H(hoursLeft);
    insertValueH_H(data01, inputRealized_01.value);
    insertValueH_H(data02, inputRealized_02.value);
    insertValueH_H(data03, inputRealized_03.value);
    insertValueH_H(data04, inputRealized_04.value);
    insertValueH_H(data05, inputRealized_05.value);
    insertValueH_H(data06, inputRealized_06.value);
    insertValueH_H(data07, inputRealized_07.value);

    calcLast20minH_H(balanceDay, balanceHour, hoursLeft);
    checkWorkedHour();
    showMessage(balanceDay);
    showInfo(inputRealized_07.value, balanceHour);
    
});

btnRealized_08.addEventListener("click", () => {
    let trueOrFalse = confirmDataInclusion();

    if (trueOrFalse === false) {
        return;
    }

    btnRealized_01.disabled = true;
    btnRealized_02.disabled = true;
    btnRealized_03.disabled = true;
    btnRealized_04.disabled = true;
    btnRealized_05.disabled = true;
    btnRealized_06.disabled = true;
    btnRealized_06.disabled = true;
    btnRealized_07.disabled = true;
    btnRealized_08.disabled = true;
    btnRealized_09.disabled = false;

    inputRealized_01.disabled = true;
    inputRealized_02.disabled = true;
    inputRealized_03.disabled = true;
    inputRealized_04.disabled = true;
    inputRealized_05.disabled = true;
    inputRealized_06.disabled = true;
    inputRealized_07.disabled = true;
    inputRealized_08.disabled = true;
    inputRealized_09.disabled = false;
    inputFocus("h-h_realized_09");

    let totalRealized = sumH_H(inputRealized_08);
    console.log("Peças Produzidas:", totalRealized);
    balanceDay = goalBalanceDay();
    balance_H_H(balanceDay);
    workHour;
    workedHours++;

    let hoursLeft = workHour - workedHours;

    let balanceHour = insertNewBalance_H_H(hoursLeft);

    insertColor(balanceHour, inputRealized_08.value, data08);
    insertNewBalance_H_H(hoursLeft);
    insertValueH_H(data01, inputRealized_01.value);
    insertValueH_H(data02, inputRealized_02.value);
    insertValueH_H(data03, inputRealized_03.value);
    insertValueH_H(data04, inputRealized_04.value);
    insertValueH_H(data05, inputRealized_05.value);
    insertValueH_H(data06, inputRealized_06.value);
    insertValueH_H(data07, inputRealized_07.value);
    insertValueH_H(data08, inputRealized_08.value);

    console.log("horas de trabalho restantes:", hoursLeft);

    calcLast20minH_H(balanceDay, balanceHour, hoursLeft);
    checkWorkedHour();
    showMessage(balanceDay);700
    showInfo(inputRealized_08.value, balanceHour);
    
});

btnRealized_09.addEventListener("click", () => {
    let trueOrFalse = confirmDataInclusion();

    if (trueOrFalse === false) {
        return;
    }

    btnRealized_01.disabled = true;
    btnRealized_02.disabled = true;
    btnRealized_03.disabled = true;
    btnRealized_04.disabled = true;
    btnRealized_05.disabled = true;
    btnRealized_06.disabled = true;
    btnRealized_06.disabled = true;
    btnRealized_07.disabled = true;
    btnRealized_08.disabled = true;
    btnRealized_09.disabled = true;

    let totalRealized = sumH_H(inputRealized_09);
    balanceDay = goalBalanceDay();
    balance_H_H(balanceDay);
    hoursLeft = 0.25;

    let balanceHour = insertNewBalance_H_H(hoursLeft);

    insertColor(balanceHour, inputRealized_09.value, data09);
    insertNewBalance_H_H(hoursLeft);
    insertValueH_H(data01, inputRealized_01.value);
    insertValueH_H(data02, inputRealized_02.value);
    insertValueH_H(data03, inputRealized_03.value);
    insertValueH_H(data04, inputRealized_04.value);
    insertValueH_H(data05, inputRealized_05.value);
    insertValueH_H(data06, inputRealized_06.value);
    insertValueH_H(data07, inputRealized_07.value);
    insertValueH_H(data08, inputRealized_08.value);
    insertValueH_H(data09, inputRealized_09.value);

    console.log("horas de trabalho restantes:", hoursLeft);
    console.log("Peças Produzidas:", totalRealized);

    checkWorkedHour();
    showMessage(balanceDay);
    showInfo(inputRealized_09.value, balanceHour);
   
});

const goalPpm = (goalData) =>{
    return (goalData / 60).toFixed(1);

}
const showInfo = (realized, goalData ) => {
  

    const goalPpm =  (goalData / 60).toFixed(1);
    const ppm = (realized / 60). toFixed(1); 
    
    
    displayInfo.innerHTML = `<P>Produzido: <span>${totalRealized}</span></P>
    <P>Saldo: <span>${balanceDay}</span></P> <P>PPm(atual): <span id="x">${ppm}</span></P> <P>PPm(Planejado): <span>${goalPpm}</span></P>`;

    const idX = document.getElementById("x");
    console.log(idX)
    
    if (ppm >= goalPpm){
        idX.style.backgroundColor="#98FB98";
        idX.style.color="#008000"
    }else {
        idX.style.backgroundColor= "#FF6347";
        idX.style.color = "#B22222";
    }
    displayInfo.style.display ="flex";
};

const showMessage = () => {
    let goalRealizedText = "META ALCANÇADA";

    if (totalRealized >= targetDay) {
        messageDiv.innerHTML = `${goalRealizedText} ${totalRealized}pçs.`;

        btnRealized_01.disabled = true;
        btnRealized_02.disabled = true;
        btnRealized_03.disabled = true;
        btnRealized_04.disabled = true;
        btnRealized_05.disabled = true;
        btnRealized_06.disabled = true;
        btnRealized_06.disabled = true;
        btnRealized_07.disabled = true;
        btnRealized_08.disabled = true;
        btnRealized_09.disabled = true;

        inputRealized_01.disabled = true;
        inputRealized_02.disabled = true;
        inputRealized_03.disabled = true;
        inputRealized_04.disabled = true;
        inputRealized_05.disabled = true;
        inputRealized_06.disabled = true;
        inputRealized_07.disabled = true;
        inputRealized_08.disabled = true;
        inputRealized_09.disabled = true;
        return;
    }
};
