import { Component } from '@angular/core';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {
  Preg:any=[]
  constructor() {
    $.get("http://localhost:5555/firebase-get?tabla=preguntas").done(json=>this.getPreg(json)); 
  }
  getPreg(val:any):any{
    for(let i=0;i<val.length;i++){


      let sC = val[i].replaceAll("':{","'-:-{").split("-:-")[1];
      console.log(sC)

      let v1 = sC.substr(1,sC.length-3).split("','")
      let preg = v1[0].split(":")[1].replaceAll("'","")
      let resp = v1[1].split(":")[1].replaceAll("'","")

      this.Preg.push({preg:preg,resp:resp})
    }
  }

}
