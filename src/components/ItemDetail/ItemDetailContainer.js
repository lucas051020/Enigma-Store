import { useEffect, useState } from 'react'
import fetchData from '../utils/fetchData'
import ItemDetail from './ItemDetail'
import products from '../utils/products'
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
      const querydb = getFirestore();
      const queryDoc = doc(querydb, 'products', idItem);
      getDoc(queryDoc)
      .then(res => setData({id: res.id, ...res.data()}));










        // fetchData(2000, products.find(product => product.id === Number(idItem)))
        //     .then(result => setData(result))
        //     .catch(err => console.log(err));
    }, [idItem]);


  return (
    <ItemDetail item={data} />
  )
}

export default ItemDetailContainer