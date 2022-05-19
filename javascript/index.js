class ListaCompras {
    constructor (numero, articulo, cantidad) {
        this.numero = numero;
        this.articulo = articulo;
        this.cantidad = cantidad;
    }
}

const lista =[];

menu();

function menu () {
    let opcion = 0 
    
    while (opcion!==3) {
        opcion = Number (prompt( `Bienvenido
                                Ingrese una opcion:
                                1- Ingresar articulo a comprar
                                2- Ver listado
                                3- Salir`))
                 

        switch(opcion) {
            case 1:
            {
                agregarArticulo();
                break;
            }
            case 2:
            {
                verListado();
                break;
            }
            case 3:{
                alert("Hasta la proxima!");
                end;
            }
       
        }
    }
    
}

agregarArticulo();


function agregarArticulo() {      
    let numero = 1;

    if(lista.length>0) {
       numero=lista[lista.length-1].numero+1;
    }
    
    let articulo=prompt("ingrese articulo a comprar");
    let cantidad = prompt("ingrese cantidad a comprar");
    let compra = new ListaCompras(numero, articulo, cantidad);

    lista.push(compra);
}

console.log(compra);



function verListado() {
   console.log("Lista de compra:")
   
   lista.forEach(
        (compra)=>{
           console.log(compra.numero+") "+compra.articulo+" - cantidad:"+compra.cantidad);
        }
    )

}
