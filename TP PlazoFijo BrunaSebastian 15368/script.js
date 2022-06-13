// window.onload = iniciar;

// function iniciar() {

//     let boton = document.getElementById("btnCalcular");
//     boton.addEventListener('click', clickboton);

// }
// function clickboton() {

//     let nombre = document.getElementById("inputNombre").value;
//     let apellido = document.getElementById("inputApellido").value;
//     let monto = parseInt(document.getElementById("inputMonto").value);
//     let dias = parseInt(document.getElementById("inputDias").value)
//     let montoFinal;
//     let porcentaje;

//     mensajeError = document.getElementById("error");
//     let bandera = true;
//     if (nombre == "") {
//         mensajeError.innerHTML = "Es necesario completar el campo (NOMBRE)";
//         bandera = false;
//     }

//     if (apellido == "") {
//         mensajeError.innerHTML = "Es necesario completar el campo (APELLIDO)";
//         bandera = false;
//     }

//     if (monto < 1000) {
//         mensajeError.innerHTML = "El monto ingresado es invalido (Monto minimo: $1000)";
//         bandera = false;
//     }

//     if (dias < 30) {
//         mensajeError.innerHTML = "El plazo ingresado es invalido (Plazo minimo 30 dias)";
//         bandera = false;
//     }
//     if (bandera === true) {
//         calcularMonto();
//         mensajeError.innerHTML = "";
//     }


//     function calcularPorcentaje() {
//         let porcentaje
//         if (dias >= 30 & dias <= 60) {
//             porcentaje = 40;
//         }
//         else {
//             if (dias >= 30 & dias <= 120) {
//                 porcentaje = 45;
//             }
//             else {
//                 if (dias >= 121 & dias <= 360) {
//                     porcentaje = 50;
//                 }
//                 else {
//                     porcentaje = 65;
//                 }
//             }
//         }
//         return porcentaje;
//     }

//     function calcularMonto() {
//         porcentaje = calcularPorcentaje();
//         montoFinal = monto + (monto * (dias / 360) * (porcentaje / 100));
//         let mostrarMonto = document.getElementById("montoFinal");
//         mostrarMonto.innerHTML = "Monto final: " + montoFinal.toFixed(2) + '<br>';
//         mostrarMonto.innerHTML += '<br><br><button id="btnReinvertir">Reinvertir<br></button>';
//         let btnReinvertir = document.getElementById("btnReinvertir");
//         btnReinvertir.addEventListener("click", reinvertir);
//         reinvertir();
//     }
//     function reinvertir() {


//         let mostrar = document.getElementById("g1");
//         mostrar.innerHTML = "Periodo";

//         mostrar = document.getElementById("g2");
//         mostrar.innerHTML = "Monto Inicial";

//         mostrar = document.getElementById("g3");
//         mostrar.innerHTML = "Monto  Final";

//         mostrar = document.getElementById("g4");
//         mostrar.innerHTML = "1";

//         mostrar = document.getElementById("g5");
//         mostrar.innerHTML = monto.toFixed(2);

//         mostrar = document.getElementById("g6");
//         mostrar.innerHTML = montoFinal.toFixed(2);

//         mostrar = document.getElementById("g7");
//         mostrar.innerHTML = "2";

//         mostrar = document.getElementById("g8");
//         monto = montoFinal;
//         mostrar.innerHTML = monto.toFixed(2);

//         mostrar = document.getElementById("g9");
//         porcentaje = calcularPorcentaje();
//         montoFinal = monto + (monto * (dias / 360) * (porcentaje / 100));
//         mostrar.innerHTML = montoFinal.toFixed(2);
//         monto = montoFinal;

//         mostrar = document.getElementById("g10");
//         mostrar.innerHTML = "3";

//         mostrar = document.getElementById("g11");
//         mostrar.innerHTML = monto.toFixed(2);

//         mostrar = document.getElementById("g12");
//         montoFinal = monto + (monto * (dias / 360) * (porcentaje / 100));
//         mostrar.innerHTML = montoFinal.toFixed(2);
//         monto = montoFinal;

//         mostrar = document.getElementById("g13");
//         mostrar.innerHTML = "4";

//         mostrar = document.getElementById("g14");
//         mostrar.innerHTML = monto.toFixed(2);

//         mostrar = document.getElementById("g15");
//         montoFinal = monto + (monto * (dias / 360) * (porcentaje / 100));
//         mostrar.innerHTML = montoFinal.toFixed(2);

//     }
// }

