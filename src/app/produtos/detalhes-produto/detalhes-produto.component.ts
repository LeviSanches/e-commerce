import { IProduto } from 'src/app/produtos';
import { ProdutosService } from './../../produtos.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from 'src/app/notificacao.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent {

  produto: IProduto | undefined;
  quantidade: number = 1;

  constructor(
    private produtosService: ProdutosService, 
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    ) { }

  ngOnInit():void {
    const routParams = this.route.snapshot.paramMap;
    const produtoId = Number(routParams.get("id"));
    this.produto = this.produtosService.getOne(produtoId);
    console.log(produtoId)
  }

  adicionarAoCarrinho() {
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho");
  }

}
