import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoas } from '../models/Pessoas';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private apiUrl=`${environment.ApiUrl}/Pessoa`

  constructor(private http: HttpClient) { }

  GetPessoas() : Observable<Response<Pessoas[]>>{
    return this.http.get<Response<Pessoas[]>>(this.apiUrl);
  }

  GetPessoa(id : number) : Observable<Response<Pessoas>>{
    return this.http.get<Response<Pessoas>>(`${this.apiUrl}/${id}`);
  }
  
  CreatePessoa(pessoa: Pessoas):Observable<Response<Pessoas[]>>{
    return this.http.post<Response<Pessoas[]>>(`${this.apiUrl}`, pessoa)
  }

  EditarPessoa(pessoa: Pessoas) : Observable<Response<Pessoas[]>>{
    return this.http.put<Response<Pessoas[]>>(`${this.apiUrl}`, pessoa)
  }

}
