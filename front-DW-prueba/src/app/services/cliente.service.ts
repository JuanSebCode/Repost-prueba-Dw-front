import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { clienteModel } from 'src/models/cliente';
import { inventModel } from 'src/models/inventario';
import { productModel } from 'src/models/producto';
import { factModel } from 'src/models/factura';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  
  //URL SERVICIOS API 
  _urlCliente = 'http://localhost:5001/api/Cliente';
  _urlFactura ='http://localhost:5001/api/Facturacion';
  _urlInventario ='http://localhost:5001/api/Inventario';
  _urlProducto ='http://localhost:5001/api/Producto';

  constructor(private http: HttpClient) {
//SERVICIO CLIENTE

  } getListaCliente(): Observable<clienteModel> {    
    return this.http.get<clienteModel>(this._urlCliente);
  }
  
//   // getCliente() {let header = new HttpHeaders()
//   //     .set('Type-content', 'aplication/json')
//   //   return this.http.get(this._urlCliente, {
//   //     headers: header
//   //   })(`${this._urlCliente}/Clientes/ListarCliente?id=${id}`);
//   // }

  // ingresarCliente(Cliente:clienteModel): Observable<clienteModel>{
  //   return this.http.post<clienteModel>( this._urlCliente, Cliente);
  // }

//   obtenerCliente(id:clienteModel): Observable<clienteModel>{
//     return this.http.get<clienteModel>(`${this._urlCliente}/Clientes/ListarCliente?id=${id}`);
//   }

//   eliminarCliente(id : any): Observable<any> {
//      return this.http.delete<any>(`${this.urlServicio + this._urlCliente}/Cliente/EliminaCliente?idcliente=${id}`);
//   }

// //SERVICIO INVENTARIO..............................

 getListaInventario(): Observable<inventModel> {    
     return this.http.get<inventModel>(this._urlInventario);
  }


//   //SERVICIO PRODUCTO..............................
getListaProducto() {
  return this.http.get<productModel>( this._urlProducto); 
}


// ingresarProducto(Producto:productModel): Observable<productModel>{
//   return this.http.post<productModel>(this._urlProducto, Producto);
// }

// // //private actualizaracu = new BehaviorSubject<beAcumulados>({} as any);
// // actualizaracumulados (acumuldos: any){
// //   this.actualizaracu.next(acumuldos);
// // }
// // editarestadoacumulados(body:any): Observable<any>{
// //   //console.log("pruebas: ", body);
// //   return this.http.post<any>(this.urlServicio + this.urlG, body);
// // }

// actualizarProducto(body:any): Observable<any>{
//   return this.http.put<any>(this.urlServicio + this._urlProducto, body);
// }
// obtenerProducto(id:productModel): Observable<productModel>{
//   return this.http.get<productModel>(`${this._urlCliente}/Productos/ListarProducto?id=${id}`);
// }

// eliminarProducto(id : any): Observable<any> {
//    return this.http.delete<any>(`${this.urlServicio + this._urlProducto}/Productos/ListarProducto?id=${id}`);
// }
// //SERVICIO FACTURA....................

 getListaFactura() {
  return this.http.get<factModel>( this._urlFactura);
 }
// ingresarFactura(Factura:factModel): Observable<factModel>{
//   return this.http.post<factModel>(this.urlServicio + this._urlFactura, Factura);
// }

// obtenerFactura(id:factModel): Observable<factModel>{
//   return this.http.get<factModel>(`${this._urlCliente}/Productos/ListarProducto?id=${id}`);
// }

// eliminarFactura(id : any): Observable<any> {
//    return this.http.delete<any>(`${this.urlServicio + this._urlFactura}/Productos/ListarProducto?id=${id}`);
// }

}

