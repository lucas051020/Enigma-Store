import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
    return (
      <>
        <h1>Alumno: {props.name}</h1>
        <ItemCount initial={1} stock={10} />
      </>
    );
};
export default ItemListContainer;
