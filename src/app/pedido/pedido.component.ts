import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  select_lanche: any = {};
  lanche: string = "";
  preco: number = 0;
  lanches = [
    {
      id: 6,
      nome_lanche: 'Selecione',
      preco: 20.00,
    },
    {
      id: 0,
      nome_lanche: 'Hambúrguer Supremo',
      preco: 20.00,
    },
    {
      id: 1,
      nome_lanche: 'Frango Gourmet',
      preco: 20.00,
    },
    {
      id: 2,
      nome_lanche: 'Burger Veggie Delícia',
      preco: 20.00,
    },
    {
      id: 3,
      nome_lanche: 'Burger Fumegante',
      preco: 20.00,
    },
    {
      id: 4,
      nome_lanche: 'Burger Bacon Bliss',
      preco: 20.00,
    },
    {
      id: 5,
      nome_lanche: 'Burger Picante Fire',
      preco: 20.00,
    },
  ]

  ngOnInit() {
    this.select_lanche = 6;
    this.lanche = this.lanches.filter ((x) => x.id == this.select_lanche)[0].nome_lanche;
  }
  onChange() {
    this.lanche = this.lanches.filter((x) => x.id == this.select_lanche)[0].nome_lanche;
  }
  clickButton() {
    
  }
}
