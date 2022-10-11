import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import 'devextreme/data/odata/store';
import ODataStore from "devextreme/data/odata/store";
import { ClienteService } from 'src/app/services/cliente.service';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-view-facturacion',
  templateUrl: './view-facturacion.component.html',
  styleUrls: ['./view-facturacion.component.scss']
})
// export class ViewFacturacionComponent implements OnInit {
  export class ViewFacturacionComponent {
  dataSource: any;
 
   
    constructor(private http:HttpClient, private serviceFact: ClienteService) {
      this.dataSource = serviceFact.getListaFactura().subscribe(data => {
        
        console.log("SERVICIOS")
        console.log(data)
        this.dataSource = data
      });
    }
   } 
  

