import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Entrevista } from 'src/app/Modelo/Entrevista';
import { Puesto } from 'src/app/Modelo/Puesto';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';

@Component({
  selector: 'app-estadistica-puesto',
  templateUrl: './estadistica-puesto.component.html',
  styleUrls: ['./estadistica-puesto.component.css']
})
export class EstadisticaPuestoComponent implements OnInit {
  chart: any;
  puestos: Puesto[] = [];
  entrevistas: Entrevista[] = [];
  bacantes:number[]=[this.puestos.length]
  constructor(private fbs:BaseDeDatosService){}
  ngOnInit(): void {
    
    let d=this.fbs.getColletion("puestos").subscribe(res=>{
      this.puestos=res;
      d.unsubscribe();
    });
    let o=this.fbs.getColletion("entrevistas").subscribe(res=>{this.entrevistas=res;
      let bacantes:Number[]=[];
      let nombres:string[]=[];

      for(let i=0;i<this.puestos.length;i++){
        nombres.push(this.puestos[i].nombre)
        bacantes.push(0);
        for(let j=0;j<this.entrevistas.length;j++){
          if(this.puestos[i].id==this.entrevistas[j].idPuesto){
            bacantes[i]=Number(bacantes[i])+1;
            console.log(bacantes[i]);
          }
        }
      }
      console.log(bacantes)
      this.chart = new Chart("myChart", {
        type: 'bar', //this denotes tha type of chart
  
        data: {// values on X-Axis
          labels: nombres,
          datasets: [
            {
              label: "Bacantes",
              data: bacantes,
              backgroundColor: ["red"]
  
            }
          ]
        },
        options: {
          aspectRatio: 2.5
        }
      });
    })

    
    
  }
}
