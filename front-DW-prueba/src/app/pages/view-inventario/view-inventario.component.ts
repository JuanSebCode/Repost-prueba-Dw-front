import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import 'devextreme/data/odata/store';
import ODataStore from "devextreme/data/odata/store";

import { ClienteService } from 'src/app/services/cliente.service';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-view-inventario',
  templateUrl: './view-inventario.component.html',
  styleUrls: ['./view-inventario.component.scss']
})
export class ViewInventarioComponent {

  dataSource: any;

   constructor(private http:HttpClient, private serviceInv: ClienteService) {
      this.dataSource = serviceInv.getListaInventario().subscribe(data => {
        
        console.log("SERVICIOS")
        console.log(data)
        this.dataSource = data
      });
    }

}
