const LigarOn = document.getElementById ('LigarOn');
const DesligarOff = document.getElementById ('DesligarOff');
const lamp = document.getElementById ('lamp');
cont = 0;

function lampOn () {
    lamp.src = 'IMG/LampadaAcesa.png';

}
function lampOff () {
    lamp.src = 'IMG/LampadaApagada.png';

}
function LampadaQuebrada (){
    lamp.src = 'IMG/LampadaQuebrada.png'
}
LigarOn.addEventListener ( 'click', lampOn);
DesligarOff.addEventListener ( 'click', lampOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', LampadaQuebrada);


