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



document.addEventListener('DOMContentLoaded', () => {

    /* ELEMENTOS */
    const tabsContainer = document.querySelector('.tabs-monthly-container');
    const contentContainer = document.querySelector('.monthly-content');
    const indicator = document.querySelector('.tab-monthly-indicator');

    const monthLabel = document.querySelector('.month-summary-label');
    const monthTotal = document.querySelector('.month-summary-total');

    if (!tabsContainer || !contentContainer || !indicator) return;

    /* BASE DE DADOS */
    const expensesData = {
        nov25: {
            label: "Novembro-2025",
            items: [
                { title: "Curso (CUOA)", value: 1665.97, parcela: "1/7", date:"28/11/25", status: "paid" },
                { title: "Matrícula (Liberec)", value: 2776.97, parcela: "1/3", date:"28/11/25", status: "paid" }
            ]
        },

        dez25: {
            label: "Dezembro-2025",
            items: [
                { title: "Curso (CUOA)", value: 1665.97, parcela: "2/7", date:"26/12/25", status: "paid" }
            ]
        },

        jan: {
            label: "Janeiro",
            items: [
                { title: "Curso (CUOA)", value: 1665.97, parcela: "3/7", date:"21/01/26", status: "paid" }
            ]
        },

        fev: {
            label: "Fevereiro",
            items: [
                { title: "Hospedagem Itália", value: 1000, parcela: "1/3", date:"15/02/26", status: "paid" },
                { title: "Matrícula (Liberec)", value: 1851, parcela: "2/3", date:"27/02/26", status: "paid" }
            ]
        },

        mar: {
            label: "Março",
            items: [
                { title: "Curso (CUOA)", value: 1665.97, parcela: "4/7", date:"02/03/26", status: "paid" },
                { title: "Hospedagem Itália", value: 1000, parcela: "2/3", date:"15/03/26", status: "paid" },
                { title: "Passagens BRA - PRG", value: 390.59, parcela: "1/10", date: "15/03/26", status: "paid"},
                { title: "Passagens BRA - PRG", value: 304.96, parcela: "1/1", date: "15/03/26", status: "paid"},
                { title: "Passagens PRG - DUB", value: 245.05, parcela: "1/4", date: "15/03/26", status: "paid"},
                { title: "Passagens DUB - VEN", value: 120.55, parcela: "1/12", date: "15/03/26", status: "paid"},
                { title: "Passagens MAD - BRA", value: 386.84, parcela: "1/10", date: "15/03/26", status: "paid"},
                { title: "Passagens MAD - BRA", value: 220.13, parcela: "1/1", date: "15/03/26", status: "paid"},
                { title: "Curso (CUOA)", value: 1665.97, parcela: "5/7", date:"30/03/26", status: "paid" }
            ]
        },

        abr: {
            label: "Abril",
            items: [
                { title: "Matrícula (Liberec)", value: 4225, parcela: "3/3", date:"14/04/26", status: "loading"},
                { title: "Hospedagem Liberec", value: 4488.02, parcela: "1/1", date:"14/04/26", status: "loading"},
                { title: "Hospedagem Itália", value: 1000, parcela: "3/3", date:"15/04/26", status: "loading" },
                { title: "Passagens BRA - PRG", value: 390.59, parcela: "2/10", date: "15/04/26", status: "loading"},
                { title: "Passagens PRG - DUB", value: 245.05, parcela: "2/4", date: "15/04/26", status: "loading"},
                { title: "Passagens DUB - VEN", value: 120.55, parcela: "2/12", date: "15/04/26", status: "loading"},
                { title: "Passagens MAD - BRA", value: 386.84, parcela: "2/10", date: "15/04/26", status: "loading"},
                { title: "Curso (CUOA)", value: 1665.97, parcela: "6/7", date:"30/04/26", status: "loading" },
            ]
        },
        mai: {
            label: "Maio",
            items: [
                { title: "Passagens BRA - PRG", value: 390.59, parcela: "3/10", date: "15/05/26", status: "loading"},
                { title: "Passagens PRG - DUB", value: 245.05, parcela: "3/4", date: "15/05/26", status: "loading"},
                { title: "Passagens DUB - VEN", value: 120.55, parcela: "3/12", date: "15/05/26", status: "loading"},
                { title: "Passagens MAD - BRA", value: 386.84, parcela: "3/10", date: "15/05/26", status: "loading"},
                { title: "Curso (CUOA)", value: 1665.97, parcela: "7/7", date:"30/05/26", status: "loading" },
            ]
        },
        jun: {
            label: "Junho",
            items: [
                { title: "Passagens BRA - PRG", value: 390.59, parcela: "4/10", date: "15/06/26", status: "loading"},
                { title: "Passagens PRG - DUB", value: 245.05, parcela: "4/4", date: "15/06/26", status: "loading"},
                { title: "Passagens DUB - VEN", value: 120.55, parcela: "4/12", date: "15/06/26", status: "loading"},
                { title: "Passagens MAD - BRA", value: 386.84, parcela: "4/10", date: "15/06/26", status: "loading"},
            ]
        },
        jul: {
            label: "Julho",
            items: [
                { title: "Passagens BRA - PRG", value: 390.59, parcela: "5/10", date: "15/07/26", status: "loading"},
                { title: "Passagens DUB - VEN", value: 120.55, parcela: "5/12", date: "15/07/26", status: "loading"},
                { title: "Passagens MAD - BRA", value: 386.84, parcela: "5/10", date: "15/07/26", status: "loading"},
            ]
        },
        ago: {
            label: "Agosto",
            items: [
                { title: "Passagens BRA - PRG", value: 390.59, parcela: "6/10", date: "15/08/26", status: "loading"},
                { title: "Passagens DUB - VEN", value: 120.55, parcela: "6/12", date: "15/08/26", status: "loading"},
                { title: "Passagens MAD - BRA", value: 386.84, parcela: "6/10", date: "15/08/26", status: "loading"},
            ]
        },
        set: {
            label: "Setembro",
            items: [
                { title: "Passagens BRA - PRG", value: 390.59, parcela: "7/10", date: "15/09/26", status: "loading"},
                { title: "Passagens DUB - VEN", value: 120.55, parcela: "7/12", date: "15/09/26", status: "loading"},
                { title: "Passagens MAD - BRA", value: 386.84, parcela: "7/10", date: "15/09/26", status: "loading"},
            ]
        },
        out: {
            label: "Outubro",
            items: [
                { title: "Passagens BRA - PRG", value: 390.59, parcela: "8/10", date: "15/10/26", status: "loading"},
                { title: "Passagens DUB - VEN", value: 120.55, parcela: "8/12", date: "15/10/26", status: "loading"},
                { title: "Passagens MAD - BRA", value: 386.84, parcela: "8/10", date: "15/10/26", status: "loading"},
            ]
        },
        nov: {
            label: "Novembro",
            items: [
                { title: "Passagens BRA - PRG", value: 390.59, parcela: "9/10", date: "15/11/26", status: "loading"},
                { title: "Passagens DUB - VEN", value: 120.55, parcela: "9/12", date: "15/11/26", status: "loading"},
                { title: "Passagens MAD - BRA", value: 386.84, parcela: "9/10", date: "15/11/26", status: "loading"},
            ]
        },
        dez: {
            label: "Dezembro",
            items: [
                { title: "Passagens BRA - PRG", value: 390.59, parcela: "10/10", date: "15/12/26", status: "loading"},
                { title: "Passagens DUB - VEN", value: 120.55, parcela: "10/12", date: "15/12/26", status: "loading"},
                { title: "Passagens MAD - BRA", value: 386.84, parcela: "10/10", date: "15/12/26", status: "loading"},
            ]
        },
    };

    /* FUNÇÃO TOTAL */
    function calculateTotal(month) {
        return expensesData[month].items
            .reduce((sum, item) => sum + item.value, 0);
    }

    /* INDICADOR */
    function moveIndicator(tab) {
        indicator.style.width = tab.offsetWidth + 'px';
        indicator.style.left = tab.offsetLeft + 'px';
    }

    /* CRIAR TABS */
    Object.keys(expensesData).forEach((month, index) => {

        const tab = document.createElement('button');

        tab.className = 'tab-monthly';
        tab.dataset.month = month;
        tab.textContent = expensesData[month].label.substring(0, 3);

        if (index === 5) tab.classList.add('active');

        tabsContainer.appendChild(tab);
    });

    /* CRIAR CONTEÚDOS */
    Object.keys(expensesData).forEach((month, index) => {

        const container = document.createElement('div');

        container.className = 'tab-content-container';
        container.dataset.content = month;

        if (index === 5) container.classList.add('active');

        expensesData[month].items.forEach(item => {

            const expense = document.createElement('div');

            expense.className = `expense-item ${item.status}`;

            expense.innerHTML = `
                <div class="expense-left">
                    <span class="expense-title">${item.title}</span>
                    <span class="expense-sub">Parcela ${item.parcela}</span>
                </div>

                <div class="expense-middle">
                    <span class="expense-date">${item.date}</span>
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

            container.appendChild(expense);
        });

        contentContainer.appendChild(container);
    });

    /* EVENTOS */
    const tabs = document.querySelectorAll('.tab-monthly');

    tabs.forEach(tab => {

        tab.addEventListener('click', () => {

            const month = tab.dataset.month;

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            document
                .querySelectorAll('.tab-content-container')
                .forEach(content => {

                    content.classList.remove('active');

                    if (content.dataset.content === month) {
                        content.classList.add('active');
                    }
                });

            moveIndicator(tab);

            monthLabel.textContent =
                expensesData[month].label;

            monthTotal.textContent =
                `R$ ${calculateTotal(month).toLocaleString('pt-BR')}`;
        });
    });

    /* INICIAL */
    const activeTab =
        document.querySelector('.tab-monthly.active') || tabs[0];

    const activeMonth = activeTab.dataset.month;

    moveIndicator(activeTab);

    monthLabel.textContent =
        expensesData[activeMonth].label;

    monthTotal.textContent =
        `R$ ${calculateTotal(activeMonth).toLocaleString('pt-BR')}`;

});





