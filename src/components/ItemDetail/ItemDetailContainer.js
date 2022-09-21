import { useEffect, useState } from 'react'
import fetchData from '../utils/fetchData'
import ItemDetail from './ItemDetail'
import products from '../utils/products'

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetchData(2000, products[5])
            .then(result => setData(result))
            .cath(err => console.log(err));
    }, []);

  return (
    <ItemDetail item={data} />
  )
}

export default ItemDetailContainer