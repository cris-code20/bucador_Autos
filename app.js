// variables
const resultados = document.querySelector('#resultado');
const year = document.querySelector('#year');
const marca = document.querySelector('#marca');
const modelo = document.querySelector('#modelo');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const puertas = document.querySelector('#puertas');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');


// la estrutura Date() nos sirve para crear fechas en javascripst
const max = new Date().getFullYear();
const min = max - 10

const datosBusqueda = {
    marca: '',
    year: '',
    puertas: '',
    color: '',
    transmision: '',
    minimo: '',
    maximo: '',


}

// eventos

document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos(autos);
    mostarSelec();
})

// listener
marca.addEventListener('change', (event)=>{
    datosBusqueda.marca = event.target.value  
    filtrarDato(autos);
})


year.addEventListener('change', (event)=>{
    datosBusqueda.year = parseInt(  event.target.value )
    filtrarDato(autos);
})

minimo.addEventListener('change', (event)=>{
    datosBusqueda.minimo = parseInt(  event.target.value )
    filtrarDato(autos);

})

maximo.addEventListener('change', (event)=>{
    datosBusqueda.maximo = parseInt(  event.target.value ) 
    filtrarDato(autos);

})

puertas.addEventListener('change', (event)=>{
    datosBusqueda.puertas = parseInt(  event.target.value )
    filtrarDato(autos);

})

color.addEventListener('change', (event)=>{
    datosBusqueda.color = event.target.value
    filtrarDato(autos);

})

transmision.addEventListener('change', (event)=>{
    datosBusqueda.transmision = event.target.value
    filtrarDato(autos);

})


// funciones
function mostrarAutos( autos ){ 
    lipiarHtml()
    autos.forEach( auto => {
        const {marca, modelo, year, precio, puertas, color, transmision} = auto
        const HTMLauto = document.createElement('p')

        HTMLauto.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} - ${color} - ${transmision} --- ${precio}
        
        `

        resultados.appendChild(HTMLauto)
    });

}


function lipiarHtml(){
    while(resultados.firstChild){
        resultados.removeChild(resultados.firstChild)
    }
}


function mostarSelec(){
   for(let i = max; i >= min ; i--){
        const option = document.createElement('option')
        option.value = i;
        option.textContent = i;
        year.appendChild(option)
   }
}


function filtrarDato(){
    const resultados = autos
    .filter( filtarMarca )
    .filter( filtarYear )
    .filter(filtarcolor)
    .filter( filtarpuerta )
    .filter( filtartransmision )
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)

    

    if(resultados.length){
        mostrarAutos(resultados)
    }else{
        noResultado();
    }
}


function noResultado(){
    lipiarHtml()
    const alerta = document.createElement('div')
    alerta.classList.add('alerta', 'error')
    alerta.textContent = 'no se encontro un auto con esos requerimientos'
    resultados.appendChild(alerta)
}


function filtarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca
    }
    return auto;
}

function filtarYear(auto){
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year
    }
    return auto;
}

function filtrarMinimo(auto){
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo
    }
    return auto;
}


function filtrarMaximo(auto){
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo
    }
    return auto;
}

function filtarcolor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color
    }
    return auto;
}

function filtarpuerta(auto){
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas
    }
    return auto;
}

function filtartransmision(auto){
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision
    }
    return auto;
}

