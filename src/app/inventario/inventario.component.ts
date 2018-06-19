import { Component, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/Subject';

import { NuevoUsuarioModal } from '../modales/nuevousuario.modal';
import { ConfirmModal } from '../modales/confirm.modal';

import { InventarioService } from '../servicios/inventario.service';
import { MzModalService } from 'ng2-materialize';
import { MzToastService } from 'ng2-materialize';

//import { Apollo } from 'apollo-angular';
//import { Observable } from 'rxjs/Observable';
//import { map } from 'rxjs/operators';

//import * as Query from '../queries/global.queries';
//import * as $ from 'jquery';

@Component({
	selector: 'inventario',
	templateUrl: './inventario.component.html'
})

export class InventarioComponent implements OnInit {

	//inventario: Item[] = [];
	//inventario : Observable<Item[]>;

	//@ViewChild(DataTableDirective)
    //dtElement: DataTableDirective;

	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<any> = new Subject();

	inventario : any[] = [];

	public itemid : number;
	public confirmModalRef: ComponentRef<ConfirmModal>;

	constructor ( private inventarioservice : InventarioService, private modalService: MzModalService, private toastService: MzToastService){

	}

	ngOnInit() {

		this.dtOptions = {
		  paging: false,
	      pagingType: 'numbers',
	      lengthChange: false,
	      pageLength: 5
	    };

		/*
		this.apollo.watchQuery({
			query: Query.Inventarios
		}).valueChanges.subscribe((result : any) => {
			this.inventario = result.data.inventario;
		})
		*/

		/*
		this.inventarioservice.getInventario().subscribe((response : any) => {

			this.inventario = response.data.inventario;
			this.dtTrigger.next();

		});
		*/

		/*
		$(document).ready(function(){
        	$("button").click(function(){
           		alert("Esto es una prueba que funciona Jquery");
        	});
    	});
		*/

		this.cargarInventarios();

	}

	cargarInventarios()
	{
		this.inventarioservice.getInventario().subscribe((response : any) => {

			this.inventario = response.data.inventario;
			this.dtTrigger.next();

		});
	}

	crearNuevoUsuario ()
	{
		this.modalService.open(NuevoUsuarioModal);
	}

	eliminarProducto (id)
	{
		this.itemid = id;
		let fnsuccess : Function;

		this.confirmModalRef = <ComponentRef<ConfirmModal>>this.modalService.open(ConfirmModal, { titulo : 'Eliminar Producto', mensaje : '¿Esta seguro de eliminar este producto del inventario?' });
		fnsuccess = () => this.removerProducto();
		this.confirmModalRef.instance.callback = fnsuccess;

	}

	removerProducto()
	{
		//this.confirmModalRef.instance.modalComponent.close();

		this.inventarioservice.removeItem(this.itemid).subscribe((response : any) => {

			this.toastService.show('El producto se ha removido del inventario', 3000, 'rounded toast-success', () => {

				//this.rerender();
				console.log(response.data.removerProducto);

			});

		}, (error) => {

			console.log(error);
		});

	}

	//Refresca manualmente la datatable
	/*rerender()
	{
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();

      // Call the dtTrigger to rerender again
      //this.dtTrigger.next();
      
	  this.cargarInventarios();
      });
  	}
  	*/

}
