const deg = 6;
const hr = document.querySelector<HTMLDivElement>("#hr")!;
const mn = document.querySelector<HTMLDivElement>("#mn")!;
const sc = document.querySelector<HTMLDivElement>("#sc")!;

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})
