import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import 'devextreme/data/odata/store';
import { Router, RouterModule } from '@angular/router';
import ODataStore from "devextreme/data/odata/store";
import { ClienteService } from 'src/app/services/cliente.service';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';



@Component({
  templateUrl: 'tasks.component.html',
 // styleUrls: [ './tasks.component.scss' ]
})

export class TasksComponent {
  cliente : any;
  dataSource: any;

  constructor(private http:HttpClient, private serviceCl: ClienteService,private router: Router) {
    
    this.dataSource = serviceCl.getListaCliente().subscribe(data => {
      
      console.log("SERVICIOS")
      console.log(data)
      this.dataSource = data
    });
    
  }
  btnIngresarCliente = () => {
    this.router.navigate(['profile']);
  }
}