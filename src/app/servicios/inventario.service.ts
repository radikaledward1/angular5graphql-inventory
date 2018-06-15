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
      },
      update: (proxy, {data: { agregarProducto } }) => {

        const data = proxy.readQuery({ query: Query.Inventarios });

        data.inventario.push(agregarProducto);

        proxy.writeQuery({ query: Query.Inventarios, data });

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

  removeItem(item_id: number)
  {
    return this.apollo.mutate({
      mutation: Query.RemoverProducto,
      variables: {
        item: item_id
      },
      update: (proxy, {data: { removerProducto } }) => {

        const data = proxy.readQuery({ query: Query.RemoverProducto });

        const index = data.removerProducto.edges.findIndex(edge => edge.node.id === item_id);

        if (index > -1) {
          data.removerProducto.edges.splice(index, 1);
        }

        proxy.writeQuery({ query: Query.RemoverProducto, data });
        
      }
    })

  }

}
