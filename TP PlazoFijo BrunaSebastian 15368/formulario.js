const app = Vue.createApp({
    data() {
        return {
            nombre: '',
            apellido: '',
            monto: '',
            dias: '',
            error: '',
            ultimoMonto: '',
            montoFinal:'',
           
        }
    },
    methods: {
        programa() {
            this.verificar()
            this.porcentaje()
            this.calcular()
        },
        verificar() {
            msjerror = this.error
            let bandera = true;
            if (this.nombre === '') {
                this.error = "Es necesario completar el campo (NOMBRE)";
                bandera = false;
                return msjerror
            }
            else if (this.apellido === '') {
                this.error = "Es necesario completar el campo (APELLIDO)";
                bandera = false;
                return msjerror
            }
            else if (this.monto < 1000) {
                this.error = "El monto ingresado es invalido (Monto minimo: $1000)";
                bandera = false;
                return msjerror
            }
            else if (this.dias < 30) {
                this.error = "El plazo ingresado es invalido (Plazo minimo 30 dias)";
                bandera = false;
                return msjerror
            }
            else if (bandera === true) {
                this.error = ''
                return msjerror
            }


        },
        porcentaje() {
            if (this.dias >= 30 & this.dias <= 60) {
                this.porcentaje = 40;
            }
            else if (this.dias >= 30 & this.dias <= 120) {
                this.porcentaje = 45;
            }
            else if (this.dias >= 121 & this.dias <= 360) {
                this.porcentaje = 50;
            }
            else {
                this.porcentaje = 65;
            }
            console.log(this.porcentaje)
        },
        calcular() {
            this.montoFinal = this.monto + (this.monto * (this.dias / 360) * (this.porcentaje / 100))
            return this.montoFinal="El monto es: "+this.montoFinal
        },
        reinvertir() {
            for (let i = 0; i >= 3; i++) {
                let montoInicial = this.monto
                let periodo = i
                let ultimoMonto = this.monto + (this.monto * (this.dias / 360) * (this.porcentaje / 100))
                return this.ultimoMonto = "Periodo: " + i + " Monto inicial: " + montoInicial + " Monto final: " + ultimoMonto
                this.monto = ultimoMonto

            }
        }

    }
}).mount('#app')