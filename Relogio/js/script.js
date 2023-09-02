
function updateClock(){
    //coletando as informações de horário e data atuais
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds();

    //lógica para adicionar um 0 quando os minutos e/ou os segundos forem menor do que 10
        min = min <10 ? "0" + min : min;
        sec = sec <10 ? "0" + sec : sec;
        
        
        var months = ["JANEIRO","FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO","SETEMBRO","OUTUBRO", "NOVEMBRO", "DEZEMBRO"];
        var week = ["DOMINGO", "SEGUNDA-FEIRA", "TERÇA-FEIRA", "QUARTA-FEIRA", "QUINTA-FEIRA", "SEXTA-FEIRA ","SABÁDO"];
        var ids = ["dayname", "month", "daynum", "year", "hour", "minutes","seconds"];
        var values = [week[dname], "DIA " +dnum, "DE " +months[mo], "DE " +yr, hou, min, sec];

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

