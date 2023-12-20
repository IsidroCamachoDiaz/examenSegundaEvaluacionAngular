import { Component, OnInit } from '@angular/core';
import { Candidato } from 'src/app/Modelo/Candidato';
import { Entrevista } from 'src/app/Modelo/Entrevista';
import { Puesto } from 'src/app/Modelo/Puesto';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';

@Component({
  selector: 'app-listado-entrevistas',
  templateUrl: './listado-entrevistas.component.html',
  styleUrls: ['./listado-entrevistas.component.css']
})
export class ListadoEntrevistasComponent implements OnInit {
  constructor(private fbs:BaseDeDatosService){}
  entrevistas:Entrevista[]=[];
  candidatos:Candidato[]=[];
  puestos:Puesto[]=[];
  ngOnInit(): void {
    this.fbs.getColletion("entrevistas").subscribe(res=>this.entrevistas=res);
    this.fbs.getColletion("candidatos").subscribe(res=>this.candidatos=res);
    this.fbs.getColletion("puestos").subscribe(res=>this.puestos=res);
  }

  eliminarEntrevista(id:string){
    this.fbs.deleteDoc(id,"entrevistas");
  }

  buscarCandidato(dni:string){
    for(let i=0;i<this.candidatos.length;i++){
      if(this.candidatos[i].dni==dni){
        return this.candidatos[i].nombre+" "+this.candidatos[i].apellidos;
      }
    }
    return "";
  }

  buscarPuesto(idPuesto:string){
    for(let i=0;i<this.puestos.length;i++){
      if(this.puestos[i].id==idPuesto){
        return this.puestos[i].nombre+" en la empresa: "+this.puestos[i].empresa;
      }
    }
    return "";
  }

  cogerNoRealizados(){
    this.fbs.queyCollection("entrevistas","realizada",false).subscribe(res=>this.entrevistas=res);
  }

  cogerRealizados(){
    this.fbs.queyCollection("entrevistas","realizada",true).subscribe(res=>this.entrevistas=res);
  }
  

}
