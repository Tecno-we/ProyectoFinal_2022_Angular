import { Component } from '@angular/core';
import { MiBDService } from 'src/app/mi-bd.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  alertify:any;
  constructor(data:MiBDService) {
    this.alertify=data._getAlertify(); 
    
  }
 
  envCorreo():any{
    let alertify = this.alertify
    let em = $("#correo").val()?.toString()
    if(em == "" || em?.indexOf('@', 0) == -1 || em?.indexOf('.', 0) == -1) {
      alertify.error('El correo electrónico introducido no es correcto o el campo esta vacio.');
      return false;
      }
    let pr = $("#pregunta").val()?.toString()
      if(pr==""){
        alertify.error('Escribe un Comentario');
        return false;
      }
    $.get(`http://localhost:5555/contactar/${em}/${pr}`).done(function(json){
          alertify.success("Su comentario fue enviado con exito")
          $("#correo").val("")
          $("#pregunta").val("")
    });
  }

}
