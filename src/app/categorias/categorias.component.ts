import { Component, OnInit } from '@angular/core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { MiBDService } from '../mi-bd.service';
import * as $ from 'jquery';
import { contains } from 'jquery';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  Cat:any=[]
  iconoCarrito=faCartArrowDown
  alertify:any;
  frmLogin:any;
  status:number=0;
  constructor(alertify:MiBDService) {
    this.alertify = alertify._getAlertify()
    $.get("http://localhost:5555/firebase-get?tabla=categorias").done(json=>this.getCat(json));
   }

  ngOnInit(): void {
    console.log(localStorage["usuario"])
    if(localStorage["usuario"]===undefined){
      localStorage["status"]=0
    }else{
      $(".nombr").html("Hola "+localStorage["usuario"]+" ")
      $(".out").html("logout").css({"color":"red"})
      localStorage["status"]=1
    }

  }
  getCat(val:any):any{
    for(let i=0;i<val.length;i++){
      let sC = val[i].replaceAll("':{","'-:-{").split("-:-")[1];
      let v1 = sC.substr(1,sC.length-3).split(",")
      let v2 = v1[2].split(":")[1].replaceAll("'","")
      this.Cat.push(v2)
    }
  }



  login():void{
    console.log(this.status)
    if(localStorage["status"]==1){
      localStorage.removeItem("usuario")
      localStorage["status"]=0
      window.location.reload()
      
    }else{
      $("#loginForm1").removeClass("ocultar");
      this.frmLogin = this.alertify.genericDialog($('#loginForm1')[0]).set('title','Login').set({frameless:true});
    }
   

  }

  entrar():any{
   let alertify = this.alertify
   if($("#_usu").val()=="" || $("#_contra").val()==""){
    alertify.error('Existe un campo que esta vacio.');
    return false;
   }
   $.get(`http://localhost:5555/login/${$("#_usu").val()}/${$("#_contra").val()}`).done(function(json){
         for(let i=0;i<json.length;i++){
              var u = json[i].search($("#_usu").val())
              var p = json[i].search($("#_contra").val())
             if(u>-1 && p>-1){
                $("#loginForm input[type='text'],input[type='password']").val("")
                $(".ajs-close").click();
                alertify.success('Bienvenido '+ $("#_usu").val());
                $(".nombr").html("Hola "+$("#_usu").val()+" ")
                $(".out").html("logout").css({"color":"red"})
                localStorage["usuario"]=$("#_usu").val()
                localStorage["status"]=1
                return
             }
         }
     alertify.error('Usuario Incorrecto');
       
  });

  }



  Registrar():void{
    $(".ajs-close").click();
    $("#loginForm").removeClass("ocultar");
       this.frmLogin = this.alertify.genericDialog($('#loginForm')[0]).set('title','Registrar').set({frameless:true});
  }

  registro():any{
    let inputes = $("#loginForm input")
    let datos = []
    for(let i=0;i<$(inputes).length-1;i++){
      var inp = $($(inputes)[i]).val();
      datos.push(inp)
      var id = $(inputes)[i].id
        if(inp==""){
           this.alertify.error("No pueden quedar campos vacios")
           return false;
        }
       if (id.toString() == "logCorreo"){
          let em = inp?.toString()
          if(em == "" || em?.indexOf('@', 0) == -1 || em?.indexOf('.', 0) == -1) {
            this.alertify.error('El correo electrónico introducido no es correcto o el campo esta vacio.');
            return false;
            }   
        }
        }
        if ($($(inputes)[3]).val()?.toString() == $($(inputes)[4]).val()?.toString()) {
            this.alertify.success('Registro Guardado');
            
            $.get(`http://localhost:5555/addUsuario/${datos[0]}/${datos[1]}/${datos[2]}/${datos[3]}`).done(function(json){
              $("#loginForm input[type='text'],input[type='password']").val("")
             
              $(".ajs-close").click();
            });

        }else{
          this.alertify.error('La contraseña no coincide');
          return false;
        }
      }

  

}
