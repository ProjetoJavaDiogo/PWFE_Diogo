
function updateClock(){
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

        var months = ["Janeiro","Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto","Setembro","Outubro", "Novembro", "Dezembro"];
        var week = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta-Feira ","Sabádo"];
        var ids = ["dayname", "month", "daynum", "year", "hour", "minutes","seconds","period"];
        var values = [week[dname], "Dia " +dnum, "de " +months[mo], "de " +yr, hou+" :", min+" :", sec];

        for (var i = 0; i < ids.length; i++) {
            document.getElementById(ids[i]).firstChild.nodeValue = values[i];  
        }

}

function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
}




































// const currentTime = document.querySelectorAll("h1");
// selectMenu = document.querySelectorAll("select")


// // for para adicionar os elementos de 01 a 24 no campo de hora
// for (let i = 12; i > 0; i--) {
//     i = i < 10 ? "0" + i : i;
//     console.log(i);
//     let option = `<option value="${i}">${i}</option>`;
//     selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
// }

// //for para adicionar os elementos de 01 a 59 no campo de minuto
// for (let i = 59; i > 0; i--) {
//     i = i < 10 ? "0" + i : i;
//     console.log(i);
//     let option = `<option value="${i}">${i}</option>`;
//     selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
// }

// //for para adicionar os elementos AM e PM no campo de AM/PM
// for (let i = 2; i > 0; i--) {
//     let ampm = i == 1 ? "AM" : "PM";
//     let option = `<option value="${ampm}">${ampm}</option>`;
//     selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
// }

// //script para receber o horário atualizado
// setInterval(() => {
//     let date = new Date(),
//     h = date.getHours(),
//     m = date.getMinutes(),
//     s = date.getSeconds(),
//     ampm = "AM";

//     if(h >= 12) {
//         h = h - 12;
//         ampm = "PM";
//     }
//     h = h == 0 ? h = 12 : h;
//     h = h < 10 ? "0" + h : h;
//     m = m < 10 ? "0" + m : m;
//     s = s < 10 ? "0" + s : s;

//     currentTime.innerText = `${h}:${m}:${s} ${ampm}`;
// }, 1000);

