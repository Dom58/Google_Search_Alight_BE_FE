export interface Item {
    id: number
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

export type IProductType = {
    item: Item;
}
export interface ISearchProps {
    searchProducts: VoidFunction
}
