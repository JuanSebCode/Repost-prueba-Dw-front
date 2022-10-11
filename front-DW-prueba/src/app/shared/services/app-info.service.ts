import { Injectable } from '@angular/core';
import 'devextreme/data/odata/store';
import DataSource from 'devextreme/data/data_source';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'App Facturacion';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
