import { Component,OnInit } from '@angular/core';
declare let alertify:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {

  constructor(){}

ngOnInit(){

  alertify.dialog('Operador',function factory(){
    let _id:any
    return{
      main:function(msg:any,id:any){
        _id = id;
        alertify.Operador().setContent("<div class='pop'>"+msg[0].innerHTML+"</div>")
      
      },
      setup:function(){
          return { 
           buttons:[{text:"Agregar al Carrito",key:13}],
            focus: { element:1 },
            options:{
                padding : !1,
                overflow: !1,
                maximizable:false,
                closable:true,
                movable:true,
                moveBounded:false,
                pinned:false
             }
          };
      }
      ,
      prepare:function(){
        
      },
      build:function(){
        alertify.Operador().elements.body.style.minHeight = screen.height * 0.7 +"px";
        alertify.Operador().elements.body.style.minWidth = screen.width * .5 + 'px';

      },
      callback: function(event:any){
       alertify.confirm('Tu carrito', 'Esta seguro de agregar este producto a su carrito?', function(){           
            let _datos ={usuario:"prueba",id_prod:parseInt(_id),cant:parseInt('1'),fecha:new Date()}
            $.get("http://localhost:5555/addCarrito",_datos).done(function(json){
                  alertify.success("El producto se agrego con la cantidad de: " + json.cant);
                })
        }, function(){ 
          alertify.error('Cancelado')
        });
      }
  }});





alertify.genericDialog || alertify.dialog('genericDialog',function(){
    return {
        main:function(content:any){
          alertify.genericDialog().setContent(content);
        },
        setup:function(){
            return {
                options:{ 
                    basic:false,
                    maximizable:false,
                    resizable:false,
                    padding:false
                }
            };
        },
        
        build:function(){
          alertify.genericDialog().elements.body.style.minHeight = screen.height * 0.3 +"px";
        },
        settings:{
            selector:undefined
        }
    };
});




}

}
