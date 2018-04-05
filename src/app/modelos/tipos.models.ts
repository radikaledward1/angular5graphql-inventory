export interface Catalogo {
  id: number;
  catalogo: string;
  descripcion: string;
}

export interface Item {
  item: string;
  catalogo_id: number;
  cantidad: number;
}
