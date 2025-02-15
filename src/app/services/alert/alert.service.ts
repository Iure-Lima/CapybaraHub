import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Alert } from '../../models/alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alert = new BehaviorSubject<Alert | null>(null)

  alertObservable = this.alert.asObservable();


  getAlert(){
    return this.alert.getValue()
  }

  addAlert(alert: Alert){
    this.alert.next(alert);
  }
}
