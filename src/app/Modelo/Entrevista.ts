import { Puesto } from "./Puesto";

export interface Entrevista{
    id?:string;
    fechaEntrevista:Date;
    dniCandidato:string;
    idPuesto:string;
    realizada:boolean;
}