export interface IProduct {
  name: string,
  brand: string,
  model: string,
  description: string,
  price: number,
  image?:string
}

export interface IProductListProps {
  products: IProduct[]
}