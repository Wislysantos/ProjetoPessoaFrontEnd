import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoas } from 'src/app/models/Pessoas';
import { PessoaService } from 'src/app/services/pessoa.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  btnAcao = "Cadastrar";
  nomeTitulo = "Cadastrar Pessoa";

  constructor(private pessoaService: PessoaService, private router: Router){

  }

  ngOnInit(): void{

  }
  
  createPessoa(pessoa: Pessoas){
    this.pessoaService.CreatePessoa(pessoa).subscribe((data)=>{
      console.log(data) 
      this.router.navigate(['/'])
      data
    })
  }
}
