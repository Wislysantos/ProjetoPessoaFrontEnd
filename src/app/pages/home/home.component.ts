import { Component, OnInit } from '@angular/core';
import { Pessoas } from 'src/app/models/Pessoas';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  pessoas : Pessoas[] = [];
  pessoasGeral: Pessoas[] = [];

  constructor(private pessoaService : PessoaService){  }

  ngOnInit(): void {
    this.pessoaService.GetPessoas().subscribe(data =>{
      const dados = data;

      dados.map((pessoa)=>{
        pessoa.DataNascimento = new Date(pessoa.DataNascimento!).toLocaleDateString('pt-BR');
      })
      
      this.pessoas = data;
      this.pessoasGeral = data;
    })
  }

  pesquisar(event : Event){
    const targe = event.target as HTMLInputElement;
    const value = targe.value.toLowerCase();

    this.pessoas = this.pessoasGeral.filter(pessoa =>{
      return pessoa.Nome.toLowerCase().includes(value);
    })
  }

}
