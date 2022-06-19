import { Injectable } from '@angular/core';
declare let alertify:any;
@Injectable({
  providedIn: 'root'
})


export class MiBDService {
  _getAlertify():any{
    return alertify;
 }
 

}
