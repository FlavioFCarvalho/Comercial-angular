import { Component, OnInit } from '@angular/core';
import { OportunidadeService } from '../oportunidade.service';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-painel-negociacao',
  templateUrl: './painel-negociacao.component.html',
  styleUrls: ['./painel-negociacao.component.css']
})
export class PainelNegociacaoComponent implements OnInit {

  oportunidades = [];

  constructor(private oportunidadeService: OportunidadeService) { }

  ngOnInit() {
    this.oportunidadeService.listar()
      .subscribe(resposta => this.oportunidades = <any>resposta);
    console.log("oportunidades");
  }



}
