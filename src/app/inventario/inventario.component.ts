import { Component, ComponentRef, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { NuevoUsuarioModal } from '../modales/nuevousuario.modal';
import { ConfirmModal } from '../modales/confirm.modal';

import { InventarioService } from '../servicios/inventario.service';
import { MzModalService } from 'ng2-materialize';

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

	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<any> = new Subject();

	inventario : any[] = [];

	public itemid : number;
	public confirmModalRef: ComponentRef<ConfirmModal>;

	constructor ( private inventarioservice : InventarioService, private modalService: MzModalService){

	}

	ngOnInit() {

		this.dtOptions = {
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

		this.inventarioservice.getInventario().subscribe((response : any) => {

			this.inventario = response.data.inventario;
			this.dtTrigger.next();
		});

		/*
		$(document).ready(function(){
        	$("button").click(function(){
           		alert("Esto es una prueba que funciona Jquery");
        	});
    	});
		*/

	}

	crearNuevoUsuario ()
	{
		this.modalService.open(NuevoUsuarioModal);
	}

	eliminarProducto (event)
	{
		this.itemid = event.target.id;
		let fnsuccess : Function;

		this.confirmModalRef = <ComponentRef<ConfirmModal>>this.modalService.open(ConfirmModal, { titulo : 'Eliminar Producto', mensaje : '¿Esta seguro de eliminar este producto del inventario?' });
		fnsuccess = () => this.removerProducto();
		this.confirmModalRef.instance.callback = fnsuccess;

		console.log(event);
	}

	removerProducto()
	{
		//this.confirmModalRef.instance.modalComponent.close();
		console.log(this.itemid);
	}

}
