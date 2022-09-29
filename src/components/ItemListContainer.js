import ItemList from "./ItemsProducts/ItemList";
import fetchData from "./utils/fetchData";
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import products from "./utils/products"
import {db} from "./utils/firebaseConfig"
import { collection, getDocs, where, query } from "firebase/firestore";

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const { id }  = useParams();

    useEffect(async () => {
      if(id){
        const q = query(collection(db, "products"), where('categoryId','==', id));
        const querySnapshot = await getDocs(q)
        const dataFromFireStore = querySnapshot.docs.map(item => ({
          id: item.id,
          ...item.data()
        }));
        //console.log(dataFromFireStore);
        setData(dataFromFireStore)
      } else {
        const querySnapshot = await getDocs(collection(db, "products"));
        const dataFromFireStore = querySnapshot.docs.map(item => ({
          id: item.id,
          ...item.data()
        }));
      }
    }, [id]);

    useEffect(() => {
      return(() => {
        setData([]);
      })
    })

    return (
      <>
        <ItemList items={data} />
      </>
    );
};

export default ItemListContainer;