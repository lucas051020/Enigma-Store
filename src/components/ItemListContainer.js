import ItemList from "./ItemsProducts/ItemList";
import fetchData from "./utils/fetchData";
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import products from "./utils/products"

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const id  = useParams();

    useEffect(() => {
      if(id){
        fetchData(2000, products.filter(category => category.id == id))
        .then(result => setData(result))
        .catch(err => console.log(err));
      } else {
        fetchData(2000, products)
        .then(result => setData(result))
        .catch(err => console.log(err));
      }
    }, [id]);

    return (
      <>
        <ItemList items={data} />
      </>
    );
};

export default ItemListContainer;