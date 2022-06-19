import { Component } from '@angular/core';
import { MiBDService } from 'src/app/mi-bd.service';
import * as $ from 'jquery';



@Component({
  selector: 'app-farmacia',
  templateUrl: './farmacia.component.html',
  styleUrls: ['./farmacia.component.css']
})
export class FarmaciaComponent {
  $:any=$;
  alertify:any;
  Prod:any=[]
  constructor(data:MiBDService) {
    this.alertify = data._getAlertify(); 
    $.get("http://localhost:5555/firebase-get?tabla=productos").done(json=>this.getCat(json)); 
  }
  getCat(val:any):any{
    for(let i=0;i<val.length;i++){
      let sC = val[i].replaceAll("':{","'-:-{").split("-:-")[1];
      let v1 = sC.substr(1,sC.length-3).split("','")
      let nom = v1[3].split(":")[1].replaceAll("'","")
      let cat = v1[0].split(":")[1].replaceAll("'","")
      let desc = v1[1].split(":")[1].replaceAll("'","")
      let id = v1[2].split(":")[1].replaceAll("'","")
      let precio = v1[4].split(":")[1].replaceAll("'","")
      if (cat=="Farmacia")
        this.Prod.push({nom:nom,precio:precio,desc:desc,id:id})
    }
  }
  verProd(p:any,id:any):any{
   
    this.alertify.Operador($(p),id.id).set('title','Departamento de Farmacia').set({frameless:false});
  }

}
