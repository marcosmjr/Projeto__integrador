import { Component, inject, Injectable, resource } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { DadosIntefaceAdmin } from './dadosIntefaceAdmin';

@Injectable({
  providedIn: 'root'
})

export class Dados {
  private urlAdmin = "http://localhost:8000/api/admin";
  dadosAdmin: DadosIntefaceAdmin[] = [];

  constructor(private http: HttpClient){}

  carregaDadosAdmin(): Observable<DadosIntefaceAdmin[]>{
    return this.http.get<DadosIntefaceAdmin[]>(this.urlAdmin).pipe(
      map(dados => {
        this.dadosAdmin = dados;
        return this.dadosAdmin;
      },

      (erro: any)=>{
        console.error('Erro ao carregar dados da API:', erro);
      }

    ),

    );
  }

  getDadosAdmin(): DadosIntefaceAdmin[]{
    return this.dadosAdmin;
  }

}
