function ProductItem({ name }: props) {
    return (<h1>{name}</h1>);
}

type props = {
    name: string
}

export default ProductItem;

