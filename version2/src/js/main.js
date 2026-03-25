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