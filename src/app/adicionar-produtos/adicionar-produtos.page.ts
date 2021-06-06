import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProdutosService } from '../produtos.service'

@Component({
  selector: 'app-adicionar-produtos',
  templateUrl: './adicionar-produtos.page.html',
  styleUrls: ['./adicionar-produtos.page.scss'],
})
export class AdicionarProdutosPage implements OnInit {

  ngOnInit() {
  }

  
  constructor(
  private produtosService: ProdutosService,
  private navCtrl1: NavController) { }


  onClick() {
    this.produtosService.addProduto(this.produto);
    this.navCtrl1.back();
  }


}
