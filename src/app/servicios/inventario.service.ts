import { Injectable } from "@angular/core";

import { Apollo } from 'apollo-angular';

import * as Query from '../queries/global.queries';
import { Item } from '../modelos/tipos.models';

@Injectable()
export class InventarioService {

  public Item : Item;

  constructor (private apollo: Apollo) {}

  getInventario ()
  {

    return this.apollo.watchQuery({
			query: Query.Inventarios
		}).valueChanges;

  }

  getCatalogos ()
  {

    return this.apollo.watchQuery({
			query: Query.Catalogos
		}).valueChanges;

  }

  setNuevoItem (item: string, catalogo_id: number, cantidad: number)
  {
    this.Item = this.crearNuevoItem(item, catalogo_id, cantidad);
    return this.apollo.mutate({
      mutation: Query.NuevoProducto,
      variables: {
        item: this.Item
      }
    })

  }

  crearNuevoItem(item: string, catalogo_id: number, cantidad: number) : Item
  {
    return {
        item : item,
        catalogo_id : catalogo_id,
        cantidad : cantidad
    };
  }

}
