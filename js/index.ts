class Dlider{
    inicial;
    cantidad:number;
    arregloT;
    indice:string;
    contInterval;
    contIntervalGeneral;
    cuenta:number;
    numeroIndex:number=0;
    constructor(posicion:string, arreglo:string[]){
        this.inicial = document.querySelector(posicion);
        this.cantidad = arreglo.length;
        this.arregloT = arreglo;
        this.indice = posicion;
        this.agregarClaseInicial();
        this.agregarImagenes();
    };
    agregarClaseInicial(){
        this.inicial.classList.add('inicial');
    };
    agregarImagenes(){
        this.inicial.innerHTML = '<div id="content-img-ed"></div><div id="contador-ed"></div><div id="content-cmd-ed"></div>';
        for(let a = 0; a < this.cantidad; a++){
            this.inicial.children[0].innerHTML += '<div><div class="titulo-ed"><h2>'+this.arregloT[a].title+'</h2><div class="parrafo"><p>' + this.arregloT[a].cuerpo+'</p></div><img src="'+this.arregloT[a].imagen+'"></div></div>';
            this.inicial.children[this.inicial.children.length-1].innerHTML +='<div onclick="cambio('+a+')" class="icon-mov-ed"></div>'
        }
        this.intervaloInicio()
    };
    intervaloInicio(){
        this.iniciar();
            if(this.numeroIndex < this.cantidad-1){
                this.numeroIndex++
            }else{
                this.numeroIndex = 0
            }
        this.contIntervalGeneral = setInterval(()=>{ 
            this.iniciar();
            if(this.numeroIndex < this.cantidad-1){
                this.numeroIndex++
            }else{
                this.numeroIndex = 0
            }
        },3000)
    };
    iniciar(){
        this.cuenta = 100;
        let todosImg =this.inicial.children[0].children,
        todosCir =this.inicial.lastChild.children,
        cant = 0;
        console.log(todosImg)
        while(todosImg.length >cant){
            if(this.numeroIndex == cant){
                todosImg[cant].classList.remove('lejos')
                todosImg[cant].classList.add('cerca')
                todosCir[cant].style.backgroundColor="grey"
            }else{
                todosImg[cant].classList.remove('cerca')
                todosImg[cant].classList.add('lejos')
                todosCir[cant].style.backgroundColor="black"
            }
            cant++
        }
        this.intervalo()
    };
    intervalo(){
        this.contInterval = setInterval(()=>{
            this.cuenta-=1
            /* document.getElementById('contador-ed').style.height='7px'
            document.getElementById('contador-ed').style.backgroundColor='#49EC13'
            document.getElementById('contador-ed').style.width=100-this.cuenta+.5+'%' */
            if(this.cuenta <= 1){
                clearInterval(this.contInterval)
            }
        },30)
    };
    cambio(index){
        this.cantidad = this.arregloT.length;
        clearInterval(this.contInterval)
        clearInterval(this.contIntervalGeneral)
        this.numeroIndex = index;
        this.intervaloInicio()
    };
    aumentar(){
        this.cantidad = this.arregloT.length;
        clearInterval(this.contInterval)
        clearInterval(this.contIntervalGeneral)
        this.intervaloInicio()
    };
    disminuir(){
        this.cantidad = this.arregloT.length;
        clearInterval(this.contInterval)
        clearInterval(this.contIntervalGeneral)
        this.numeroIndex = this.resp()
        this.intervaloInicio()
    }
    resp(){
        if(this.numeroIndex === 1){
            return this.cantidad-1
        }else if(this.numeroIndex === 0){
            return this.cantidad-2
        }else{
            return this.numeroIndex-2
        }
    }
}