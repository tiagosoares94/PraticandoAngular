import { Injectable } from '@angular/core';
import { Veiculo } from './veiculo';

@Injectable()
export class ServicoService {
  public lista:Veiculo[] = [];

  constructor() { }
  
  rows_count(){
    return this.lista.length;
  }

  add(veiculo: Veiculo): void {
    let aux: Veiculo = {
      marca: veiculo.marca,
      modelo: veiculo.modelo,
      valor: veiculo.valor
};
    this.lista.push(veiculo);
  }
}