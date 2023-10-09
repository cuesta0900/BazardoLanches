import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { LanchesComponent } from './lanches/lanches.component';
import { PedidoComponent } from './pedido/pedido.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { DiscountsComponent } from './discounts/discounts.component';


const routes: Routes = [
  {path: 'pedido', component: PedidoComponent},
  {path: 'lanches', component: LanchesComponent},
  {path: 'cabecalho', component: CabecalhoComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    LanchesComponent,
    PedidoComponent,
    DiscountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    [RouterModule.forChild(routes)],
  ],
  exports:[
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent, CabecalhoComponent, LanchesComponent]
})
export class AppModule { }
