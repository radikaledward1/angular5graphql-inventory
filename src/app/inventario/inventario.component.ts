import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { InventarioService } from '../servicios/inventario.service';
import { NuevoUsuarioModal } from '../modales/nuevousuario.modal';

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

	constructor ( private inventarioservice : InventarioService, private modalService: MzModalService){

	}

	ngOnInit() {

		this.dtOptions = {
	      pagingType: 'numbers',
	      lengthChange: false,
	      pageLength: 2
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

}
