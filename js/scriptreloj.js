const reloj = document.getElementById("reloj");
const fecha = document.getElementById("fecha");
const frase = document.getElementById("frase");

const getDate = new Date();
let[hour, minute, second] =  [
    getDate.getHours(),
    getDate.getMinutes(),
    getDate.getSeconds(),
];

const formattedHour = hour < 10 ? `0${hour}` : hour;

const updateClock = () => {
    if (second < 59) {
        second++;
    } else {
        second = 0;
        if (minute < 59) {
            minute++;
        } else {
            minute = 0;
            if (hour < 23) {
                hour++;
            } else {
                hour = 0;
            }
        }
    }
    const formattedHour = hour < 10 ? `0${hour}` : hour;
    const formattedMinute = minute < 10 ? `0${minute}` : minute;
    const formattedSecond = second < 10 ? `0${second}` : second;
                        
    reloj.innerHTML = `${formattedHour}:${formattedMinute}:${formattedSecond}`;
};

setInterval(updateClock,1000);

let[day, month, year] = [
    getDate.getDate(),
    getDate.getMonth(),
    getDate.getFullYear(),
];
let monthReal = month + 1;

const updateDate = () => {
    if(hour == 0 && day ){
        day++
    }  
}

updateDate();

fecha.innerHTML = `${day}/${monthReal}/${year}`


let currentFrase = '';

const choosePhrase = ()=>{
    if(formattedHour > 22 ){
        currentPhrase = 'El tiempo todo lo cura, pero la vida solo puede ser vivida una vez.'
    }else{
        if(formattedHour >18 ){
            currentPhrase = 'Afortunado es el hombre que tiene tiempo para esperar.'
        }else{
            if(formattedHour > 16){
                currentPhrase = 'Para ser viejo y sabio, primero hay que ser joven y estúpido.'
            }else{
                if(formattedHour > 14){
                    currentPhrase = 'Lo más importante no es cuánto tiempo, sino qué tan bien has vivido.'
                }else{
                    if(formattedHour > 12){
                    currentPhrase = 'Dedica tiempo a la gente que quiere pasar tiempo contigo.'
                    }else{
                        if(formattedHour > 7){
                            currentPhrase = 'La vida es eso que pasa mientras estamos haciendo otros planes.'
                        }else{currentPhrase = 'El tiempo es la mejor medicina para todos los males.'}
                    }
                    

                }
            }
        }
    }
};

choosePhrase();

frase.innerHTML = currentPhrase

