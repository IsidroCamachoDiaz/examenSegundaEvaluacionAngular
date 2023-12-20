import { Component, OnInit } from '@angular/core';
import { Entrevista } from 'src/app/Modelo/Entrevista';
import { Puesto } from 'src/app/Modelo/Puesto';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';

@Component({
  selector: 'app-listado-puestos',
  templateUrl: './listado-puestos.component.html',
  styleUrls: ['./listado-puestos.component.css']
})
export class ListadoPuestosComponent implements OnInit{
  constructor(private fbs:BaseDeDatosService){}
  puestos:Puesto[]=[];

  ngOnInit(): void {
    this.fbs.getColletion("puestos").subscribe(res=>this.puestos=res);
  }

  eliminarPuesto(p:Puesto){
    this.fbs.deleteDoc(p.id!,"puestos").then(res=>{
      let entrevistasDeborrar:Entrevista[]=[];
      this.fbs.queyCollection("entrevistas","idPuesto",p.id).subscribe(res=>{entrevistasDeborrar=res;
        for(let i=0;i<entrevistasDeborrar.length;i++){
          this.fbs.deleteDoc(entrevistasDeborrar[i].id!,"entrevistas");
        }
      });
    });

  }

}
