'use strict';

import gql from 'graphql-tag';

export const Inventarios = gql`
query inventario {
  inventario {
    id
    item
    catalogo {
      id
      catalogo
      descripcion
    }
    cantidad
  }
}
`;
