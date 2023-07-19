import { ProdutosService } from './../produtos.service';
import { Component } from '@angular/core';
import { IProduto } from '../produtos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  produtos: IProduto[] | undefined;

  constructor(private produtosService: ProdutosService, private route: ActivatedRoute) { }

  ngOnInit():void {
    this.produtos = this.produtosService.getAll()
  }



}
