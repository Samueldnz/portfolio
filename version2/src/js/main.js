// Countdown timer
(function countdown(){
    const targetDate = new Date('2026-04-12T12:00:00');
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function update(){
        const now = new Date();

        //divide by 1000 to convert from milisecond to seconds
        let diff = Math.max(0, targetDate - now);
        const sec = Math.floor((diff/1000) % 60);
        const min = Math.floor((diff/1000/60) % 60);
        const hrs = Math.floor((diff/1000/60/60) % 24);
        const days = Math.floor(diff/1000/60/60/24);

        daysEl.textContent = String(days).padStart(2,'0');
        hoursEl.textContent = String(hrs).padStart(2,'0');
        minutesEl.textContent = String(min).padStart(2,'0');
        secondsEl.textContent = String(sec).padStart(2,'0');

        if(diff <= 0){
            clearInterval(timerId);
            document.querySelectorAll('.hero-countdown').forEach(c => c.innerHTML = '<div style="font-weight:700;">Voo confirmado ✈️</div>');
        }
    }
    update();
    const timerId = setInterval(update, 1000);
})();


function brl(value){
    return value.toLocaleString("pt-BR",{
        style:"currency",
        currency:"BRL"
    });
}

const cards = document.querySelectorAll(".expense-card");

let totalPaid = 0;
let totalGoal = 0;

cards.forEach(card=>{
    const paid = Number(card.dataset.paid);
    const total = Number(card.dataset.total);

    totalPaid += paid;
    totalGoal += total;

    const percent = (paid/total) * 100;

    card.querySelector(".expense-paid").textContent = brl(paid);
    card.querySelector(".expense-total").textContent = brl(total);

    const bar = card.querySelector(".expense-progress-fill");

    setTimeout(()=>{
        bar.style.width = percent+"%";
    },200);
});

const campaignPercent = totalGoal > 0 
  ? (totalPaid / totalGoal) * 100 
  : 0;

document.getElementById("campaignPaid").textContent = brl(totalPaid);
document.getElementById("campaignTotal").textContent = brl(totalGoal);

document.getElementById("campaignPercent").textContent =
  campaignPercent.toFixed(0) + "% da meta alcançada";

setTimeout(() => {
  document.querySelector(".campaign-fill").style.width =
    Math.min(100, campaignPercent) + "%";
}, 300);



const tabsContainer = document.querySelector('.tabs-monthly-container');
const contentContainer = document.querySelector('.monthly-content');
const indicator = document.querySelector('.tab-monthly-indicator');

const monthLabel = document.querySelector('.month-summary-label');
const monthTotal = document.querySelector('.month-summary-total');

/* BASE DE DADOS */
const expensesData = {
    jan: {
        label: "Janeiro",
        items: [
            { title: "Curso (CUOA)", value: 1200, parcela: "3/10", status: "paid" },
            { title: "Hospedagem", value: 800, parcela: "1/6", status: "pending" }
        ]
    },

    fev: {
        label: "Fevereiro",
        items: [
            { title: "Passagem", value: 2000, parcela: "2/5", status: "paid" },
            { title: "Seguro", value: 400, parcela: "1/3", status: "pending" }
        ]
    },

    mar: {
        label: "Março",
        items: [
            { title: "Transporte", value: 600, parcela: "1/2", status: "pending" }
        ]
    }
};

/* CRIAR TABS */
Object.keys(expensesData).forEach((month, index) => {

    const tab = document.createElement('button');
    tab.classList.add('tab-monthly');
    tab.dataset.month = month;
    tab.textContent = expensesData[month].label.substring(0,3);

    if(index === 0) tab.classList.add('active');

    tabsContainer.appendChild(tab);
});

/* CRIAR CONTEÚDO */
Object.keys(expensesData).forEach((month, index) => {

    const tabContent = document.createElement('div');
    tabContent.classList.add('tab-content-container');
    tabContent.dataset.content = month;

    if(index === 0) tabContent.classList.add('active');

    expensesData[month].items.forEach(item => {

        const expense = document.createElement('div');
        expense.classList.add('expense-item', item.status);

        expense.innerHTML = `
            <div class="expense-left">
                <span class="expense-title">${item.title}</span>
                <span class="expense-sub">Parcela ${item.parcela}</span>
            </div>

            <div class="expense-right">
                <span class="expense-value">
                    R$ ${item.value.toLocaleString('pt-BR')}
                </span>
                <span class="expense-status">
                    ${item.status === 'paid' ? '✔' : '⏳'}
                </span>
            </div>
        `;

        tabContent.appendChild(expense);
    });

    contentContainer.appendChild(tabContent);
});

/* CALCULAR TOTAL */
function calculateTotal(month){

    const items = expensesData[month].items;

    return items.reduce((sum, item) => sum + item.value, 0);
}

/* INDICADOR */
function moveIndicator(tab){
    indicator.style.width = tab.offsetWidth + 'px';
    indicator.style.left = tab.offsetLeft + 'px';
}

/* INICIAL */
window.addEventListener('load', () => {

    const firstMonth = Object.keys(expensesData)[0];
    const firstTab = document.querySelector('.tab-monthly');

    moveIndicator(firstTab);

    monthLabel.textContent = expensesData[firstMonth].label;

    monthTotal.textContent =
        `R$ ${calculateTotal(firstMonth).toLocaleString('pt-BR')}`;
});

/* EVENTOS */
document.querySelectorAll('.tab-monthly').forEach(tab => {

    tab.addEventListener('click', () => {

        const month = tab.dataset.month;

        /* ativa tab */
        document.querySelectorAll('.tab-monthly')
            .forEach(t => t.classList.remove('active'));

        tab.classList.add('active');

        /* ativa conteúdo */
        document.querySelectorAll('.tab-content-container')
            .forEach(c => {

                c.classList.remove('active');

                if(c.dataset.content === month){
                    c.classList.add('active');
                }
            });

        /* move indicador */
        moveIndicator(tab);

        /* atualiza resumo */
        monthLabel.textContent = expensesData[month].label;

        monthTotal.textContent =
            `R$ ${calculateTotal(month).toLocaleString('pt-BR')}`;
    });
});