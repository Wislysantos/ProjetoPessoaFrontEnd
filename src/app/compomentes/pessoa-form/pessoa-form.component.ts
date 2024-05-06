import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pessoas } from 'src/app/models/Pessoas';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Pessoas>();
  @Input() btnAcao!: string;
  @Input() nomeTitulo!: string;
  @Input() dadosPessoa: Pessoas | null =null;
  

  pessoaForm!: FormGroup;

  constructor(){}

  ngOnInit(): void {
    this.pessoaForm = new FormGroup({
      Codigo: new FormControl(this.dadosPessoa ? this.dadosPessoa.codigo : 0),
      Nome: new FormControl(this.dadosPessoa ? this.dadosPessoa.nome : '', [Validators.required]),
      DataNascimento: new FormControl(this.dadosPessoa ? this.dadosPessoa.dataNascimento : '', [Validators.required]),
      Inativo: new FormControl(this.dadosPessoa ? this.dadosPessoa.inativo : false, ),
      Nacionalidade: new FormControl(this.dadosPessoa ? this.dadosPessoa.nacionalidade : '', [Validators.required]),
      RG: new FormControl(this.dadosPessoa ? this.dadosPessoa.rg : '', [Validators.required]),
      Passaporte: new FormControl(this.dadosPessoa ? this.dadosPessoa.passaporte : '', [Validators.required]),
    });
  }

  submit(){
    //console.log(this.pessoaForm.value);
    this.onSubmit.emit(this.pessoaForm.value);
  }

}
