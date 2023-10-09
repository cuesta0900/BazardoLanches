import { Component } from '@angular/core';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css']
})
export class DiscountsComponent {
  discounts = [
    {
      name: 'Desconto do Dia: Terças Veggie',
      image: '../../assets/vegan.png',
      value: '15% de desconto',
      description: 'Que tal aproveitar o meio da semana com um desconto 100% natural e pagando 15% menos?'
    },
    {
      name: 'Desconto do Mês: Haloween Monstruoso',
      image: '../../assets/haloween.jpg',
      value: '10% de desconto',
      description: 'Durante todo período de haloween, nossa estreia, o Horror Burger, o monstro da casa está com 10% de desconto, CORRA!'
    },
  ];
}
