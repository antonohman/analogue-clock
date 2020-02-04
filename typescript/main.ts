const deg:any = 6;
const hr:any = document.querySelector("#hr");
const mn:any = document.querySelector("#mn");
const sc:any = document.querySelector("#sc");

setInterval(() => {
    let day:any = new Date();
    let hh:any = day.getHours() * 30;
    let mm:any = day.getMinutes() * deg;
    let ss:any = day.getSeconds() * deg;
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})

console.log("test")