import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidato } from 'src/app/Modelo/Candidato';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';

@Component({
  selector: 'app-formulario-candidato',
  templateUrl: './formulario-candidato.component.html',
  styleUrls: ['./formulario-candidato.component.css']
})
export class FormularioCandidatoComponent implements OnInit{
  constructor(private fbs:BaseDeDatosService,private f:FormBuilder,private ruta:ActivatedRoute,private router:Router){}
  c:Candidato={id:"",nombre:"",apellidos:"",dni:"",direccion:"",telefono:"",mail:"",fecha:new Date()}
  id:any;
  formulario=this.f.group({
    nombre:["",[Validators.required]],
    apellidos:["",[Validators.required]],
    dni:["",[Validators.required,Validators.minLength(9),Validators.maxLength(9)]],
    direccion:["",[Validators.required]],
    telefono:["",[Validators.required,Validators.minLength(9)]],
    email:["",[Validators.required,Validators.email]],
    fecha:[new Date,[Validators.required]]
  });

  ngOnInit(): void {
    if(this.ruta.snapshot.paramMap.get("id")){
      this.id=this.ruta.snapshot.paramMap.get("id");
      this.fbs.getDocumentById(this.id,"candidatos").subscribe(res=>{
        this.c=res;
        this.formulario.patchValue({
          nombre:this.c.nombre,
          apellidos:this.c.apellidos,
          dni:this.c.dni,
          direccion:this.c.direccion,
          telefono:this.c.telefono,
          email:this.c.mail,
          fecha:this.c.fecha
        });
      })
    }
  }

  craerCandidato(){
    this.fbs.newDocument(this.c,"candidatos")
    //no consigo poner el id como dni
    //this.fbs.newDocumentCandidato(this.c,"candidatos")
  }
  modificarCandidato(){
    this.fbs.updateDocument(this.c,"candidatos");
  }

  anadirFormulario(){
    this.c.nombre=this.formulario.get("nombre")?.value!;
    this.c.apellidos=this.formulario.get("apellidos")?.value!;
    this.c.direccion=this.formulario.get("direccion")?.value!;
    this.c.dni=this.formulario.get("dni")?.value!;
    this.c.fecha=this.formulario.get("fecha")?.value!;
    this.c.mail=this.formulario.get("email")?.value!;
    this.c.telefono=this.formulario.get("telefono")?.value!;

    if(this.ruta.snapshot.paramMap.get("id")){
      this.modificarCandidato();
    }
    else{
      this.craerCandidato();
    }
    this.router.navigateByUrl("/candidatos/listar")
  }
}
