import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoas } from 'src/app/models/Pessoas';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  btnAcao: string = 'Editar';
  nomeTitulo: string = 'Editar Funcionário';
  pessoa!: Pessoas
  
  constructor(private pessoaService : PessoaService, private route: ActivatedRoute, private router : Router) {
  }

  ngOnInit():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.pessoaService.GetPessoa(id).subscribe((data)=>{
      this.pessoa = data.dados;
      console.log(data.dados)
    })
  }

  editarPessoa(pessoa: Pessoas){
    this.pessoaService.EditarPessoa(pessoa).subscribe((data)=>{
      this.router.navigate(['/'])
    })
  }

}
