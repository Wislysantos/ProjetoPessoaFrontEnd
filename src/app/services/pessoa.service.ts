import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoas } from '../models/Pessoas';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private apiUrl=`${environment.ApiUrl}/Pessoas`

  constructor(private http: HttpClient) { }

  GetPessoas() : Observable<Pessoas[]>{
    return this.http.get<Pessoas[]>(this.apiUrl);
  }  

}
