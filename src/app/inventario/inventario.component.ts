import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../servicios/inventario.service';
//import { Apollo } from 'apollo-angular';
//import { Observable } from 'rxjs/Observable';
//import { map } from 'rxjs/operators';

//import { Item, Catalogo } from '../modelos/tipos.models';
//import * as Query from '../queries/global.queries';
import * as $ from 'jquery';

@Component({
	selector: 'inventario',
	templateUrl: './inventario.component.html'
})

export class InventarioComponent implements OnInit {

	//inventario: Item[] = [];
	//inventario : Observable<Item[]>;
	inventario : any[] = [];

	constructor ( private inventarioservice : InventarioService){

	}

	ngOnInit() {

		/*
		this.apollo.watchQuery({
			query: Query.Inventarios
		}).valueChanges.subscribe((result : any) => {
			this.inventario = result.data.inventario;
		})
		*/

		this.inventarioservice.getInventario().subscribe((response : any) => {

			this.inventario = response.data.inventario;
		});

		/*
		$(document).ready(function(){
        $("button").click(function(){
            alert("Esto es una prueba que funciona Jquery");
        });
    });
		*/

	}

}
