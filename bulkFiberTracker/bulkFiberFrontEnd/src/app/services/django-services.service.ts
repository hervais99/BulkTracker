import { Injectable } from '@angular/core';
import { WebserviceService } from './webservice.service';

@Injectable({
  providedIn: 'root'
})
export class DjangoServicesService {

  constructor(
    private webservice: WebserviceService,
  ) {
    this.getAllRegion();
}

  public getAllRegion(){
    const url = 'api/v1/getorcreateregion';
    this.webservice.getAll(url);
  }


}
