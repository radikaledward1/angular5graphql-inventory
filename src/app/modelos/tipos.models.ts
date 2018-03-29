export interface Catalogo {
  id: number;
  catalogo: string;
  descripcion: string;
}

export interface Item {
  id: number;
  item: string;
  catalogo: Catalogo;
  cantidad: number;
}
