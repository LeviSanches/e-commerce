import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';
import { NotificacaoService } from '../notificacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {

  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private notificacao: NotificacaoService,
    private router: Router) {}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal()
  }

  removerProdutoCarrinho(id: number) {
    this.carrinhoService.removerProdutoCarrinho(id);
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0)
  }

  /*comprar() {        
    this.itensCarrinho = this.carrinhoService.limparCarrinho();     
    this.notificacao.notificar('Compra realizada com sucesso'); 
    this.ngOnInit();
  }*/

  comprar() {        
    this.carrinhoService.limparCarrinho();     
    this.notificacao.notificar('Compra realizada com sucesso'); 
    this.router.navigate(['produtos']);
  }

}
