import { formatNumber } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  select_lanche: any = {};
  lanche: string = "";
  preco: number = 0;
  total: number = 0;
  lanches = [
    {
      id: 7,
      nome_lanche: 'Selecione',
      foto: "",
      preco: 0,
    },
    {
      id: 0,
      nome_lanche: 'Hambúrguer Supremo',
      preco: 20.00,
    },
    {
      id: 1,
      nome_lanche: 'Frango Gourmet',
      preco: 30.00,
    },
    {
      id: 2,
      nome_lanche: 'Burger Veggie Delícia',
      preco: 29.75,
    },
    {
      id: 3,
      nome_lanche: 'Burger Fumegante',
      preco: 40.00,
    },
    {
      id: 4,
      nome_lanche: 'Burger Bacon Bliss',
      preco: 40.00,
    },
    {
      id: 5,
      nome_lanche: 'Horror Burguer',
      preco: 40.50,
    },
    {
      id: 6,
      nome_lanche: 'Batata Frita Média',
      preco: 5.00,
    },
  ]

  ngOnInit() {
    this.select_lanche = 7;
  }
  onChange() {
  }

  items: any = [];

  valueItem = ''; //cria o valueItem que será atribuído ao ngModel

  //------------------------------COMPONENTE1----------------------------------
  //necessário import ViewChild
  @ViewChild('newItem') comida: any;
  //o newitem é no html, a referência que vai chamar aqui no TS, e aqui pode ser o mesmo nome ou um qqr comida
  //vou usar um filho que vem da interface, chamado newitem
  //cria objeto da classe viewchild
  addNewOutroItem() {
    const index: string = this.comida.nativeElement.value;
    const valor = this.converteString(index);
    const produto: string = this.comida.nativeElement[valor + 1].textContent;
    this.items.push(produto);//consegue ir lá buscar, não precisa de parametro
    const preco = this.adicionaTotal(produto);
  }

  adicionaTotal(produto: string){
    const strPreco = produto.split("R$")[1];
    const preco = Number(strPreco.split(",")[0]);
    this.total += preco;
  }

  remove() {
    //define que comida que é um elemento nativo, passa a valer o que for definido
    this.comida.nativeElement.value = ' ';
  }

  verificaString(input: string): boolean {
    const cleanedInput = input.trim().replace(',', '.');
    const parsedNumber = Number(cleanedInput);

    return !isNaN(parsedNumber) && parsedNumber > -1 && parsedNumber < 7;
  }

  converteString(input: string) {
    if (this.verificaString(input)) {
      const valor = Number(input);
      return valor;
    } else {
      return 0;
    }
  }

  removeItens() {
    while (this.items.length > 0) {
      this.items.pop(); //remove ultimo elemento
    }
    this.total = 0;
  }


  concluirPedido() {
    if (this.items.length > 0) {
      alert("Pedido enviado no valor de R$" + this.total.toFixed(2) + "! A entrega ocorrerá entre 40 a 60 minutos!");
      this.removeItens();
    } else {
      alert("Insira ao menos um lanche para prosseguir");
    }

  }
}
