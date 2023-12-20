import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidato } from 'src/app/Modelo/Candidato';
import { Entrevista } from 'src/app/Modelo/Entrevista';
import { Puesto } from 'src/app/Modelo/Puesto';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';

@Component({
  selector: 'app-formulario-entrevista',
  templateUrl: './formulario-entrevista.component.html',
  styleUrls: ['./formulario-entrevista.component.css']
})
export class FormularioEntrevistaComponent implements OnInit{
  constructor(private fbs:BaseDeDatosService,private ruta:ActivatedRoute,private f:FormBuilder,private router:Router){}
  e:Entrevista={id:"",fechaEntrevista:new Date,dniCandidato:"",idPuesto:"",realizada:false}
  id:any;
  candidatos:Candidato[]=[];
  puestos:Puesto[]=[];

  formulario=this.f.group({
    fechaEntrevista:[new Date,Validators.required],
    dniCandidato:["",Validators.required],
    puesto:["",Validators.required],
    realizada:[false]
  })
  
  ngOnInit(): void {
    this.fbs.getColletion("candidatos").subscribe(res=>this.candidatos=res);
    this.fbs.queyCollection("puestos","disponible",true).subscribe(res=>this.puestos=res);

    if(this.ruta.snapshot.paramMap.get("id")){
      this.id=this.ruta.snapshot.paramMap.get("id");
      this.fbs.getDocumentById(this.id,"entrevistas").subscribe(res=>{
        this.e=res;
        this.formulario.patchValue({
          fechaEntrevista:this.e.fechaEntrevista,
          dniCandidato:this.e.dniCandidato,
          puesto:this.e.idPuesto,
          realizada:this.e.realizada
        });
      });
    }
  }

  modificarEntrevista(){
    this.fbs.updateDocument(this.e,"entrevistas");
  }
  crearEntrevista(){
    this.fbs.newDocument(this.e,"entrevistas")
  }

  anadirFormulario(){
    this.e.fechaEntrevista=this.formulario.get("fechaEntrevista")?.value!;
    this.e.dniCandidato=this.formulario.get("dniCandidato")?.value!;
    this.e.idPuesto=this.formulario.get("puesto")?.value!;
    this.e.realizada=this.formulario.get("realizada")?.value!;

    if(this.candidatos.length==0||this.puestos.length==0){
      alert("No hay candidatos o puesto para entrevistar");
    }
    else{
    if(this.ruta.snapshot.paramMap.get("id")){
      this.modificarEntrevista();
    }
    else{
      this.crearEntrevista();
    }
    this.router.navigateByUrl("/entrevistas/listar")
  }
  }

}
