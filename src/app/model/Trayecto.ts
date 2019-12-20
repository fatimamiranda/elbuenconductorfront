export class Trayecto{

    id:number;
	dni:string;
	matricula:string;
	kmRecorridos:number;
	nAcelerones:number;
	nFrenazos:number;
	rpmMedias:number;
	inicio:Date;
	fin:Date;
    precio:number;
    calidad:number;
    mapImage:number;
    
//    public Trayecto(){}

    constructor(id:number, dni:string, matricula:string, 
        kmRecorridos:number, nAcelerones:number, nFrenazos:number, 
        rpmMedias:number, inicio:Date, fin:Date, precio:number, calidad:number, mapImage:number){

        this.id = id;
        this.dni = dni;
        this.matricula = matricula;
        this.kmRecorridos = kmRecorridos;
        this.nAcelerones = nAcelerones;
        this.nFrenazos = nFrenazos;
        this.rpmMedias = rpmMedias;
        this.inicio = inicio;
        this.fin = fin;
        this.precio = precio;
        this.calidad = calidad;
        this.mapImage =  2;
        
    }
    

}