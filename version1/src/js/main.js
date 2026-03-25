// Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', function(e){
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
          e.preventDefault();
          window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 84, behavior: 'smooth' });
        }
      });
    });

    // Simple reveal on scroll
    const revealEls = document.querySelectorAll('.reveal');
    const reveal = () => {
      const bottom = window.innerHeight;
      revealEls.forEach(el=>{
        const rect = el.getBoundingClientRect();
        if(rect.top < bottom - 40){
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', reveal);
    window.addEventListener('load', reveal);

    // Countdown timer
    (function countdown(){
      // Target date: 20 March 2026 09:00 (local). Change as needed.
      const targetDate = new Date('2026-04-12T12:00:00'); // YYYY-MM-DDTHH:mm:ss
      const daysEl = document.getElementById('days');
      const hoursEl = document.getElementById('hours');
      const minutesEl = document.getElementById('minutes');
      const secondsEl = document.getElementById('seconds');

      function update(){
        const now = new Date();
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
          // optional: show message or change CTA
          document.querySelectorAll('.countdown').forEach(c => c.innerHTML = '<div style="font-weight:700;">Voo confirmado ✈️</div>');
        }
      }
      update();
      const timerId = setInterval(update, 1000);
    })();


    // Set donate links in multiple places easily (update if needed)
    const vakinhaUrl = 'https://vakinha.bio/5793881'; // <-- troque para a vakinha real
    document.getElementById('donateTop').href = vakinhaUrl;
    document.getElementById('donateHero').href = vakinhaUrl;
    // More initialization if needed...

    function brl(value){
  return value.toLocaleString("pt-BR",{
    style:"currency",
    currency:"BRL"
  });
}

const cards = document.querySelectorAll(".expenses .card");

let totalPaid = 0;
let totalGoal = 0;

cards.forEach(card=>{

  const paid = Number(card.dataset.paid);
  const total = Number(card.dataset.total);

  totalPaid += paid;
  totalGoal += total;

  const percent = (paid/total)*100;

  card.querySelector(".paid").textContent = brl(paid);
  card.querySelector(".total").textContent = brl(total);

  const bar = card.querySelector(".progress-fill");

  setTimeout(()=>{
    bar.style.width = percent+"%";
  },200);

});


/* PROGRESSO GERAL */

const campaignPercent = (totalPaid/totalGoal)*100;

document.getElementById("campaignPaid").textContent = brl(totalPaid);
document.getElementById("campaignTotal").textContent = brl(totalGoal);

document.getElementById("campaignPercent").textContent =
campaignPercent.toFixed(0)+"% da meta alcançada";

setTimeout(()=>{
  document.querySelector(".campaign-fill").style.width =
  campaignPercent+"%";
},300);
