import { Component, OnInit } from '@angular/core';

import { InventarioService } from '../servicios/inventario.service';

import { MzBaseModal, MzModalComponent } from 'ng2-materialize';

@Component({
  selector: 'nuevousuario-modal',
  templateUrl: './nuevousuario.modal.html'
})

export class NuevoUsuarioModal extends MzBaseModal implements OnInit {

  catalogos: any[] = [];
  public producto : string;
  public departamento : number;
  public cantidad : number;

  constructor ( private inventarioservice : InventarioService ) {

    super();
  }

  ngOnInit()
  {
    this.inventarioservice.getCatalogos().subscribe((response : any) => {

      this.catalogos = response.data.catalogos;
    });
  }

  registrarProducto()
  {
    this.inventarioservice.setNuevoItem(
      this.producto,
      this.departamento,
      this.cantidad
    ).subscribe((response : any) => {

      console.log(response.data.agregarProducto);

    }, (error) => {

      console.log(error);
    });
  }

}
