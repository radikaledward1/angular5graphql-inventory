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

export const Catalogos = gql`
query catalogos {
  catalogos {
    id
    catalogo
    descripcion
  }
}
`;

export const NuevoProducto = gql`
mutation nuevoProducto($item: NuevoItem) {
  agregarProducto(item: $item) {
    id
  }
}
`;
