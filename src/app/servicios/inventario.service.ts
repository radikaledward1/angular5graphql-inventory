import { Injectable } from "@angular/core";
import { Apollo } from 'apollo-angular';
import * as Query from '../queries/global.queries';

@Injectable()
export class InventarioService {

  constructor (private apollo: Apollo) {}

  getInventario ()
  {

    return this.apollo.watchQuery({
			query: Query.Inventarios
		}).valueChanges;

  }

}
