import ItemCount from "./ItemCount/ItemCount";
import ItemList from "./ItemList";
import fetchData from "./utils/fetchData";
import { useEffect, useState } from 'react'
const { products } = require('./utils/products')

const ItemListContainer = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData(2000, products)
        .then((result) => setData(result))
        .catch((err) => console.log(err));
    });

    return (
      <>
        <h1>Alumno: {props.name}</h1>
        <ItemList items={data} />
        <ItemCount initial={1} stock={10} />
      </>
    );
};
export default ItemListContainer;