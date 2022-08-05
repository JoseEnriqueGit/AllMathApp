// Imports
import * as math from "./math.js";
import * as estadistic from "./estadistic.js";

export function MostrarFraccionSimplificada(event){
    // Aqui se toman los valores del los inputs Numerador y Denominador
    const Numerador = document.getElementById('Numerador').value;
    const Denominador = document.getElementById('Denominador').value;
    // Aqui se muestra el resultado de la simplificacion
    const NumeradorResult = document.querySelector('.NumeradorResult');
    const DenominadorResult = document.querySelector('.DenominadorResult');
    // Aqui se declara el div que muetra el proceso de simplificacion
    const DetallesFraccion = document.querySelector('.Fracciones');
    // Alerts divs
    const DivAlert = document.querySelector('.DivAlert');
    const Alert = document.querySelector('.Alert');
    const Detalles = document.querySelector('.DetallesOperacion');

    // Condicionalles que validan que haiga un valor en los imputs numerador y Denominador
    if(Numerador == 0 && Denominador == 0){
        DivAlert.style.display = 'flex';
        Detalles.style.display = 'none';
        NumeradorResult.innerHTML = '';
        DenominadorResult.innerHTML = '';
        DetallesFraccion.innerHTML = '';

        Alert.innerHTML = '';
        Alert.innerHTML = '<i class="fas fa-exclamation-triangle"></i>SE REQUIERE UN NUMERADOR Y UN DENOMINADOR.';
    }
    else if(Numerador == 0){
        DivAlert.style.display = 'flex';
        Detalles.style.display = 'none';
        NumeradorResult.innerHTML = '';
        DenominadorResult.innerHTML = '';
        DetallesFraccion.innerHTML = '';

        Alert.innerHTML = '';
        Alert.innerHTML = '<i class="fas fa-exclamation-triangle"></i>SE REQUIERE UN NUMERADOR.';
    }
    else if(Denominador == 0){
        DivAlert.style.display = 'flex';
        Detalles.style.display = 'none';
        NumeradorResult.innerHTML = '';
        DenominadorResult.innerHTML = '';
        DetallesFraccion.innerHTML = '';

        Alert.innerHTML = '';
        Alert.innerHTML = '<i class="fas fa-exclamation-triangle"></i>SE REQUIERE UN DENOMINADOR.';
    }
    else{
        DivAlert.style.display = 'none';
        Alert.innerHTML = '';

        // Aqui se llama la fucion simplificar de math.js
        const {Nnumerador,Ndenominador,listNumeradores,listDenominadores,nPrimosUsados} = math.simplificar(Numerador, Denominador);
        DetallesFraccion.innerHTML = "";
        
        // Condicional para saber si un numero es irreducible
        if(listNumeradores.length == 0){
            DetallesFraccion.innerHTML = "";
            DetallesFraccion.innerHTML = `<div class="DetallesFraccion"><div class="DetallesNumerador">` + Numerador + `</div>
            <div class="Line"></div>
            <div class="DetallesDenominador">` + Denominador + `</div>
            <span>` + 'Irreducible' + `</span></div>`;
        }else{
            DetallesFraccion.innerHTML = `<div class="DetallesFraccion"><div class="DetallesNumerador">` + Numerador + `</div>
            <div class="Line"></div>
            <div class="DetallesDenominador">` + Denominador + `</div>
            <span>` + nPrimosUsados[0] + `</span></div>`;
        }
        
        // Bucle para imprimir en pantalla la listas del proceso de reduccion
        for(let i = 0; i < listNumeradores.length; i++){
            nPrimosUsados.push('')
    
            DetallesFraccion.innerHTML += `<div class="DetallesFraccion"><div class="DetallesNumerador">` + listNumeradores[i] + `</div>
            <div class="Line"></div>
            <div class="DetallesDenominador">` + listDenominadores[i] + `</div>
            <span>` + nPrimosUsados[i + 1] + `</span></div>`;
    
        }
        NumeradorResult.innerHTML = Nnumerador;
        DenominadorResult.innerHTML = Ndenominador;
        Detalles.style.display = 'flex';

    }
}

export function DetallesDiplayMedia(numberList, Sum, indice, organized){
            let DiplayDivSum = '';
            let DisplayMedianaDetalles = '';

            let DiplayPlus = '';
            let DiplayComma = '';
            let displayStyle;
            const last = numberList.pop();
    
            numberList.forEach(number =>{
                DiplayPlus += number + ' + ';
            });
            DiplayDivSum = DiplayPlus + last + ' = ' + Sum;

            if((numberList.length + 1) % 2 == 0){
                numberList.forEach(number =>{
                    DiplayComma += number + ', ';
                });
                DisplayMedianaDetalles = DiplayComma + last;
                displayStyle = 'flex';
            }
            else{
                let x = 0;
                organized.forEach(number =>{
                    
                    if(x == indice){
                        DiplayComma +='<span class="FontRed">' + organized[x] + '</span>'  + ', ';
                        x += 1;
                    }
                    else{
                        DiplayComma += number + ', ';
                        x += 1;
                    }
                });
                DisplayMedianaDetalles = DiplayComma + last;
                displayStyle = 'none';
            }

            
            return {DiplayDivSum, DisplayMedianaDetalles, displayStyle, displayStyle};
}


export function MMMEvent(event){
    const DisplayMedia = document.getElementById('DisplayMedia');
    const DisplayMediana = document.getElementById('DisplayMediana');
    const DisplayModa = document.getElementById('DisplayModa');
    const DetallesOpMMM = document.getElementById('DetallesOpMMM');

    let InputList = document.getElementById('InputList').value;
    let numberList = [];

    const DivAlert = document.querySelector('.DivAlert');
    const Alert = document.querySelector('.Alert');

    InputList = InputList.replaceAll(/[:;-\s]/g, ',');
    
    if(InputList.search(/[*+\¿?^${}()|[\]\\¡!_=<>&%@~`]/g) != -1){
        DivAlert.style.display = 'flex';
        Alert.innerHTML = '';
        Alert.innerHTML = '<i class="fas fa-exclamation-triangle"></i>SE REQUIERE UNA LISTA DE NUMEROS SIN CARACTERES RAROS.';
        DetallesOpMMM.style.display = 'none';
    }
    else if(InputList.search(/[A-Z]/ig) != -1){
        DivAlert.style.display = 'flex';
        Alert.innerHTML = '';
        Alert.innerHTML = '<i class="fas fa-exclamation-triangle"></i>SE REQUIERE UNA LISTA DE NUMEROS SIN LETRAS.';
        DetallesOpMMM.style.display = 'none';
    }
    else if(InputList.length == 0){
        DivAlert.style.display = 'flex';
        Alert.innerHTML = '';
        Alert.innerHTML = '<i class="fas fa-exclamation-triangle"></i>SE REQUIERE UNA LISTA DE NUMEROS.';
        DetallesOpMMM.style.display = 'none';
    }
    else{
        DivAlert.style.display = 'none';
        DetallesOpMMM.style.display = 'flex';
        Alert.innerHTML = '';

        InputList = InputList.split(",");
        InputList.forEach(InputList =>{
            numberList.push(parseInt(InputList))
        });
        numberList = numberList.filter(Boolean);

        const {Sum, listLength, Total} = estadistic.Average(numberList);
        DisplayMedia.innerHTML = Total;

        const {organized, mediana, firstIndice, secondIndice, sumIndex, indice} = estadistic.Mediana(numberList);
        DisplayMediana.innerHTML = mediana;

        const {moda} = estadistic.Moda(numberList);
        DisplayModa.innerHTML = moda;

        // Detalles Media
        const DivSum = document.querySelector('.DivSum');
        const NumeradorMedia = document.getElementById('NumeradorMedia');
        const DenominadorMedia = document.getElementById('DenominadorMedia');
        const ResultDivisionMedia = document.getElementById('ResultDivisionMedia');

        const {DiplayDivSum, DisplayMedianaDetalles, displayStyle} = DetallesDiplayMedia(numberList, Sum, indice, organized);

        DivSum.innerHTML = DiplayDivSum;
        NumeradorMedia.innerHTML = Sum;
        DenominadorMedia.innerHTML = listLength;
        ResultDivisionMedia.innerHTML = Total;

        const DisplayMedianaDetallesList = document.getElementById('DisplayMedianaDetalles');
        const NumeradorMediana = document.getElementById('NumeradorMediana');
        const SumMediana = document.getElementById('SumMediana');
        const SumResult = document.getElementById('SumResult');
        const ResultDivisionMediana = document.getElementById('ResultDivisionMediana');
        const DivSumMediana = document.getElementById('DivSumMediana');
        const DivisionOpMediana = document.getElementById('DivisionOpMediana');
        
        DisplayMedianaDetallesList.innerHTML = DisplayMedianaDetalles;
        SumMediana.innerHTML = organized[firstIndice] + ' + ' + organized[secondIndice];
        SumResult.innerHTML = sumIndex;
        NumeradorMediana.innerHTML = sumIndex;
        ResultDivisionMediana.innerHTML = mediana;

        DivSumMediana.style.display = displayStyle;
        DivisionOpMediana.style.display = displayStyle;
    }


    // console.log(InputList);
}


