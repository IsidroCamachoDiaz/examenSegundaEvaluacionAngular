import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Puesto } from 'src/app/Modelo/Puesto';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';

@Component({
  selector: 'app-formulario-puesto',
  templateUrl: './formulario-puesto.component.html',
  styleUrls: ['./formulario-puesto.component.css']
})
export class FormularioPuestoComponent implements OnInit{

  constructor(private fbs:BaseDeDatosService,private f:FormBuilder,private ruta:ActivatedRoute,private router:Router){}
  id:any;
  p:Puesto={id:"",nombre:"",disponible:false,empresa:""};
  formulario=this.f.group({
    nombre:["",Validators.required],
    disponible:[false],
    empresa:["",Validators.required]
  });
  ngOnInit(): void {
    if(this.ruta.snapshot.paramMap.get("id")){
      this.id=this.ruta.snapshot.paramMap.get("id");
      this.fbs.getDocumentById(this.id,"puestos").subscribe(res=>{
        this.p=res;
        this.formulario.patchValue({
          nombre:this.p.nombre,
          disponible:this.p.disponible,
          empresa:this.p.empresa
      });
      });
    }
  }
  modificarPuesto(){
    this.fbs.updateDocument(this.p,"puestos");
  }
  meterPuesto(){
    this.fbs.newDocument(this.p,"puestos");
  }

  anadirFormulario(){
    this.p.nombre=this.formulario.get("nombre")?.value!;
    this.p.disponible=this.formulario.get("disponible")?.value!;
    this.p.empresa=this.formulario.get("empresa")?.value!;

    if(this.ruta.snapshot.paramMap.get("id")){
      this.modificarPuesto();
    }
    else{
      this.meterPuesto();
    }
    this.router.navigateByUrl("/puestos/listar")
  }
}
