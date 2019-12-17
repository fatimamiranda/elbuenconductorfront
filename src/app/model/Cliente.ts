export class Cliente{ //esto no sé si se tiene que volver a poner en el front, creo que sí
 //quito los private para poder acceder, luego vemos si hacemos getters y setters o no
     dni:string;
   
     nombre: string;
    
     apellido1:string;
     apellido2:string;
     zipCode:string;
     fechaNacimiento:Date;
     fechaCarnet:Date;
     calidadConduccion:number;

    //Qué diferencia hay entre poner este constructor con el de más abajo? digo a nivel de escribirlo
    public Cliente(){ }

constructor(dni?:string, nombre?:string, apellido1?:string, apellido2?:string, zipCode?:string, fechaNacimiento?:Date, fechaCarnet?:Date, calidadConduccion?:number){
        this.dni = dni;
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.zipCode = zipCode;
        this.fechaNacimiento = fechaNacimiento;
        this.fechaCarnet = fechaCarnet;
        this.calidadConduccion = calidadConduccion;
   }

   //Hay que añadir getters y setters?

}