import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.component.html',
  styleUrls: ['./lanches.component.css']
})
export class LanchesComponent implements OnInit{
  lanches = [
    {
      id: 0,
      nome: 'Hambúrguer Supremo',
      descricao: 'Uma obra-prima clássica! Nosso Hambúrguer Supremo é a definição da perfeição. Começamos com uma suculenta carne de hambúrguer e a grelhamos até a perfeição. Adicionamos alface fresca, fatias de tomate suculento, cebola crocante e queijo derretido, tudo cuidadosamente envolto em nosso pão de hambúrguer macio. Uma pitada de molho de hambúrguer para dar o toque final.',
      foto: "../../assets/xburguer.jpg",
      preco: "R$20,00",
    },
    {
      id: 1,
      nome: 'Frango Gourmet',
      descricao: 'Nosso Frango Gourmet é uma explosão de sabor em cada mordida. Apresentando peito de frango grelhado suculento, coberto com queijo suíço derretido e combinado com alface fresca, fatias de tomate e cebola roxa. Tudo isso é regado com um irresistível molho de mostarda e mel, tudo dentro do nosso pão de hambúrguer fresco.',
      foto: "../../assets/chicken.jpg",
      preco: "R$30,00",
    },
    {
      id: 2,
      nome: 'Burger Veggie Delícia',
      descricao: 'Para os amantes de vegetais, apresentamos o Burger Vegetariano Delícia. Nosso pão integral abriga um saboroso veggie burger feito com legumes frescos e grãos. Complementado com espinafre, cogumelos grelhados e abacate cremoso. Tudo isso é harmonizado com um molho de iogurte com ervas para uma experiência saudável e saborosa.',
      foto: "../../assets/veggie.jpg",
      preco: "R$35,00",
    },
  ]
  lanches2 =[
    {
      id: 3,
      nome: 'Burger Fumegante',
      descricao: 'Nosso Burger Fumegante é uma festa para os sentidos. A começar com uma carne de hambúrguer suculenta, adicionamos bacon crocante, cebola caramelizada e queijo cheddar derretido. Tudo é então banhado em nosso molho de churrasco especial, tudo acomodado em nosso pão fresco de hambúrguer.',
      foto: "../../assets/BBQ.jpeg",
      preco: "R$40,00",
    },
    {
      id: 4,
      nome: 'Burger Bacon Bliss',
      descricao: 'Prepare-se para um banquete com nosso Burger Bacon Bliss. Começamos com uma carne de hambúrguer suculenta, adicionamos camadas de bacon crocante, ovo frito perfeito, alface fresca, fatias de tomate, cebola e queijo derretido. Uma generosa camada de maionese dá um toque final irresistível.',
      foto: "../../assets/bacon.png",
      preco: "R$40,00",
    },
    {
      id: 5,
      nome: 'Burger Picante Fire',
      descricao: 'Se você gosta de um toque picante, não pode perder o nosso Burger Picante Fire. Com carne de hambúrguer picante, jalapeños picantes, pimenta pepperoncini e cebola roxa, este hambúrguer é para os corajosos. O queijo pepper jack derretido adiciona um toque de cremosidade, enquanto nosso molho picante é a explosão final de sabor.',
      foto: "../../assets/fuego.png",
      preco: "R$45,00",
    },
  ]

  lanche: any = [];
  select1: any = {};
  select2: any = "Selecione";

  ngOnInit() {
    this.select1 =0;
    this.lanche = this.lanches.filter((x) => x.id == this.select1)[0];
  }
  onChange(){
    this.select2 = '';
    this.lanche = this.lanches.filter((x) => x.id == this.select1)[0];
  }
}
