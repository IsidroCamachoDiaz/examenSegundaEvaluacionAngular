import { Component, OnInit } from '@angular/core';
import { Candidato } from 'src/app/Modelo/Candidato';
import { Entrevista } from 'src/app/Modelo/Entrevista';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';

@Component({
  selector: 'app-listado-candidatos',
  templateUrl: './listado-candidatos.component.html',
  styleUrls: ['./listado-candidatos.component.css']
})
export class ListadoCandidatosComponent implements OnInit {
constructor(private fbs:BaseDeDatosService){}
candidatos:Candidato[]=[];
  ngOnInit(): void {
    this.fbs.getColletion("candidatos").subscribe(res=>this.candidatos=res);
  }

  eliminarCandidato(c:Candidato){
    this.fbs.deleteDoc(c.id!,"candidatos").then(res=>{
      let entrevistasDeborrar:Entrevista[]=[];
      this.fbs.queyCollection("entrevistas","dniCandidato",c.dni).subscribe(res=>entrevistasDeborrar=res);

      for(let i=0;i<entrevistasDeborrar.length;i++){
        this.fbs.deleteDoc(entrevistasDeborrar[i].id!,"entrevistas");
      }

    });
  }
}
