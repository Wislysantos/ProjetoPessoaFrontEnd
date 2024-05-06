import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaFormComponent } from 'src/app/compomentes/pessoa-form/pessoa-form.component';
import { Pessoas } from 'src/app/models/Pessoas';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  pessoa?: Pessoas;
 
  constructor(private pessoaService: PessoaService, private route: ActivatedRoute, private router: Router) {
    
  }

  ngOnInit(): void {
    const id = Number( this.route.snapshot.paramMap.get('id'));
    this.pessoaService.GetPessoa(id).subscribe((data)=>{

      const dados = data.dados

      dados.dataNascimento = new Date(dados.dataNascimento!).toLocaleDateString('pt-BR')

      this.pessoa = data.dados
    })
  }

}
