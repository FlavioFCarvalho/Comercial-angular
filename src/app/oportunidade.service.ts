import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OportunidadeService {

  //Recurso de oportunidades
  apiUrl = 'http://localhost:8080/oportunidades';

  constructor(private httpClient: HttpClient) { }

  //Método para listar
  listar() {
    return this.httpClient.get(this.apiUrl);
  }

  //Método para adicionar
  adicionar(oportunidade: any) {
    return this.httpClient.post(this.apiUrl, oportunidade);
  }

}
