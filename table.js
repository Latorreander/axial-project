const data = document.querySelectorAll(".data");
const data01 = document.getElementById("data-01");
const data02 = document.getElementById("data-02");
const data03 = document.getElementById("data-03");
const data04 = document.getElementById("data-04");
const data05 = document.getElementById("data-05");
const data06 = document.getElementById("data-06");
const data07 = document.getElementById("data-07");
const data08 = document.getElementById("data-08");

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
const btnRealized_01 = document.querySelector(".btn-realized_01");
const btnRealized_02 = document.querySelector(".btn-realized_02");
const btnRealized_03 = document.querySelector(".btn-realized_03");
const btnRealized_04 = document.querySelector(".btn-realized_04");
const btnRealized_05 = document.querySelector(".btn-realized_05");
const btnRealized_06 = document.querySelector(".btn-realized_06");
const btnRealized_07 = document.querySelector(".btn-realized_07");
const btnRealized_08 = document.querySelector(".btn-realized_08");
const turnBtn = document.querySelector(".turn-btn");
const messageDiv = document.querySelector(".message");
const inputRadioYes = document.getElementById("SIM");
const inputRadioNo = document.getElementById("NÃO");
const inputRadio = document.querySelector(".input-radio");

btnRealized_01.disabled = true;
btnRealized_02.disabled = true;
btnRealized_03.disabled = true;
btnRealized_04.disabled = true;
btnRealized_05.disabled = true;
btnRealized_06.disabled = true;
btnRealized_07.disabled = true;
btnRealized_08.disabled = true;

inputRealized_01.disabled = true;
inputRealized_02.disabled = true;
inputRealized_03.disabled = true;
inputRealized_04.disabled = true;
inputRealized_05.disabled = true;
inputRealized_06.disabled = true;
inputRealized_07.disabled = true;
inputRealized_08.disabled = true;

let workedHours = 0;
let workHour = 0;
let targetDay = 0;
let totalRelized = 0;
let balanceDay = 0;
goalBtn.disabled = true;

window.onbeforeunload = () => {
    event.preventDefault();
};

inputRadio.addEventListener("click", (e) => {
    inputTurn.value = e.target.value;
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

    workHour = Number(inputTurn.value);
    checkWorkedHour();
    goalBtn.disabled = true;
    btnRealized_01.disabled = false;
    inputRealized_07.disabled = true;

    targetDay = Number(inputTargetDay.value);
    console.log("Meta do dia:", targetDay);

    goalH_H = targetDay / workHour;

    data.forEach((elem) => {
        elem.innerHTML = `${Math.round(goalH_H)}`;
    });
});

const checkWorkedHour = () => {
    if (workHour === 7) {
        data06.innerHTML = "INTERVALO";
        inputRealized_06.value = "❌";
        inputRealized_06.disabled = true;
        inputRealized_07.disabled = false;
    }
};

// função soma valores ja produzidos por hora:
const sumH_H = (x) => {
    return (totalRelized += Number(x.value));
};

// função calcula a meta diária menos a quantidade já produzida:
const goalBalanceDay = () => {
    return (balanceDay = targetDay - totalRelized);
};

//função calcula o saldo de peças:
const balance_H_H = (balance) => {
    console.log("Saldo de peças:", balance);
};

//função  atualiza a meta hora/hora:
const insertNewBalance_H_H = (hours) => {
    let balance = `${Math.floor(balanceDay / hours)}`;

    data.forEach((elem) => {
        elem.innerHTML = balance;
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
        console.log(inputValue);
        console.log(balance);
        data.style.backgroundColor = "#E6E6FA";
        data.style.color = "#FF6347";
    } else if (inputValue >= balance) {
        data.style.backgroundColor = "#E6E6FA";

        data.style.color = "#00FF00";
        console.log("atingiu a meta!");
    }
};

const showMessage = (balance) => {
    let goalRealizedText = "META ATINGIDA!";
    let goalNotRealizedText = "FALTOU " + balance + " PEÇAS";

    if (totalRelized >= targetDay) {
        messageDiv.innerHTML = `${goalRealizedText} ${totalRelized}pçs.`;
        return;
    } else {
        messageDiv.innerHTML = `${goalNotRealizedText}`;
    }
};

btnRealized_01.addEventListener("click", () => {
    btnRealized_01.disabled = true;
    btnRealized_02.disabled = false;

    inputRealized_01.disabled = true;
    inputRealized_02.disabled = false;
    let totalRealized = sumH_H(inputRealized_01);

    console.log("Peças Produzidas:", totalRealized);
    balanceDay = goalBalanceDay();
    workHour;
    workedHours++;

    let hoursLeft = workHour - workedHours;

    let balanceHour = insertNewBalance_H_H(hoursLeft);
    insertValueH_H(data01, inputRealized_01.value);
    insertColor(balanceHour, inputRealized_01.value, data01);

    console.log("horas de trabalho restantes:", hoursLeft);
    balance_H_H(balanceDay);

    checkWorkedHour();
});

btnRealized_02.addEventListener("click", () => {
    btnRealized_01.disabled = true;
    btnRealized_02.disabled = true;
    btnRealized_03.disabled = false;

    inputRealized_01.disabled = true;
    inputRealized_02.disabled = true;
    inputRealized_03.disabled = false;
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

    console.log("horas de trabalho restantes:", hoursLeft);

    checkWorkedHour();
});

btnRealized_03.addEventListener("click", () => {
    btnRealized_01.disabled = true;
    btnRealized_02.disabled = true;
    btnRealized_03.disabled = true;
    btnRealized_04.disabled = false;

    inputRealized_01.disabled = true;
    inputRealized_02.disabled = true;
    inputRealized_03.disabled = true;
    inputRealized_04.disabled = false;
    let totalRealized = sumH_H(inputRealized_03);
    console.log("Peças Produzidas:", totalRealized);
    balanceDay = goalBalanceDay();
    balance_H_H(balanceDay);

    workHour;
    workedHours++;

    let hoursLeft = workHour - workedHours;
    let balanceHour = insertNewBalance_H_H(hoursLeft);
    insertValueH_H(data03, inputRealized_03.value);

    insertColor(balanceHour, inputRealized_03.value, data03);
    insertNewBalance_H_H(hoursLeft);
    insertValueH_H(data01, inputRealized_01.value);
    insertValueH_H(data02, inputRealized_02.value);
    insertValueH_H(data03, inputRealized_03.value);
    console.log("horas de trabalho restantes:", hoursLeft);

    checkWorkedHour();
});

btnRealized_04.addEventListener("click", () => {
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
    let totalRealized = sumH_H(inputRealized_04);
    console.log("Peças Produzidas:", totalRealized);
    balanceDay = goalBalanceDay();
    balance_H_H(balanceDay);
    workHour;
    workedHours++;

    let hoursLeft = workHour - workedHours;
    let balanceHour = insertNewBalance_H_H(hoursLeft);
    insertColor(balanceHour, inputRealized_04.value, data04);
    insertValueH_H(data04, inputRealized_04.value);

    insertNewBalance_H_H(hoursLeft);
    insertValueH_H(data01, inputRealized_01.value);
    insertValueH_H(data02, inputRealized_02.value);
    insertValueH_H(data03, inputRealized_03.value);
    insertValueH_H(data04, inputRealized_04.value);
    console.log("horas de trabalho restantes:", hoursLeft);

    checkWorkedHour();
});

const disableButton = (hoursLeft) => {
    if (hoursLeft === 2) {
        btnRealized_06.disabled = true;
        btnRealized_07.disabled = false;
    }
};

btnRealized_05.addEventListener("click", () => {
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

    let totalRealized = sumH_H(inputRealized_05);
    console.log("Peças Produzidas:", totalRealized);
    balanceDay = goalBalanceDay();
    balance_H_H(balanceDay);

    workHour;
    workedHours++;

    let hoursLeft = workHour - workedHours;
    let balanceHour = insertNewBalance_H_H(hoursLeft);
    insertValueH_H(data05, inputRealized_05.value);
    disableButton(hoursLeft);
    insertColor(balanceHour, inputRealized_05.value, data05);
    insertNewBalance_H_H(hoursLeft);
    insertValueH_H(data01, inputRealized_01.value);
    insertValueH_H(data02, inputRealized_02.value);
    insertValueH_H(data03, inputRealized_03.value);
    insertValueH_H(data04, inputRealized_04.value);
    insertValueH_H(data05, inputRealized_05.value);
    console.log("horas de trabalho restantes:", hoursLeft);

    checkWorkedHour();
});

btnRealized_06.addEventListener("click", () => {
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

    let totalRealized = sumH_H(inputRealized_06);
    console.log("Peças Produzidas:", totalRealized);

    balanceDay = goalBalanceDay();
    balance_H_H(balanceDay);
    workHour;
    workedHours++;

    let hoursLeft = workHour - workedHours;

    let balanceHour = insertNewBalance_H_H(hoursLeft);
    insertValueH_H(data06, inputRealized_06.value);

    insertColor(balanceHour, inputRealized_06.value, data06);
    insertNewBalance_H_H(hoursLeft);
    insertValueH_H(data01, inputRealized_01.value);
    insertValueH_H(data02, inputRealized_02.value);
    insertValueH_H(data03, inputRealized_03.value);
    insertValueH_H(data04, inputRealized_04.value);
    insertValueH_H(data05, inputRealized_05.value);

    console.log("horas de trabalho restantes:", hoursLeft);

    checkWorkedHour();
});

btnRealized_07.addEventListener("click", () => {
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

    let totalRealized = sumH_H(inputRealized_07);
    console.log("Peças Produzidas:", totalRealized);
    balanceDay = goalBalanceDay();
    balance_H_H(balanceDay);
    workHour;
    workedHours++;

    let hoursLeft = workHour - workedHours;

    let balanceHour = insertNewBalance_H_H(hoursLeft);
    insertValueH_H(data07, inputRealized_07.value);

    insertColor(balanceHour, inputRealized_07.value, data07);
    insertNewBalance_H_H(hoursLeft);
    insertValueH_H(data01, inputRealized_01.value);
    insertValueH_H(data02, inputRealized_02.value);
    insertValueH_H(data03, inputRealized_03.value);
    insertValueH_H(data04, inputRealized_04.value);
    insertValueH_H(data05, inputRealized_05.value);
    insertValueH_H(data06, inputRealized_06.value);
    insertValueH_H(data07, inputRealized_07.value);

    console.log("horas de trabalho restantes:", hoursLeft);

    checkWorkedHour();
});

btnRealized_08.addEventListener("click", () => {
    btnRealized_01.disabled = true;
    btnRealized_02.disabled = true;
    btnRealized_03.disabled = true;
    btnRealized_04.disabled = true;
    btnRealized_05.disabled = true;
    btnRealized_06.disabled = true;
    btnRealized_06.disabled = true;
    btnRealized_07.disabled = true;
    btnRealized_08.disabled = true;

    inputRealized_08.disabled = true;

    let totalRealized = sumH_H(inputRealized_08);
    balanceDay = goalBalanceDay();
    balance_H_H(balanceDay);
    hoursLeft = 1;

    let balanceHour = insertNewBalance_H_H(hoursLeft);
    insertValueH_H(data08, inputRealized_08.value);

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
    console.log("Peças Produzidas:", totalRealized);

    checkWorkedHour();

    showMessage(balanceDay);
});
