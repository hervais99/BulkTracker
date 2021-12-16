import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebserviceService } from '../services/webservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private webservice: WebserviceService,
    private route: Router,

  ) { }

  ngOnInit(): void {
      
  }



  public login(){
    const url = "";
    this.route.navigate(["BulkDisplay/dasboard"]);
  }

}
