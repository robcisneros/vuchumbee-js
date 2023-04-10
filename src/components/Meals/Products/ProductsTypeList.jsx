import MealItem from "../MealItem/MealItem";
import Meals from "../Meals";

const ProductsTypeList = (props) => {
  const exampleSlices = [
    "https://cazaofertas.com.mx/wp-content/uploads/2020/03/Las-Alitas-Boneless-020320-01-1.jpg",
    "https://static.promodescuentos.com/threads/raw/default/165558_1/re/1024x1024/qt/60/165558_1.jpg",
    "https://cazaofertas.com.mx/wp-content/uploads/2014/10/wendys_2x1_miercoles_gallery.jpg"
  ];
    console.log("Recibe ProductsTypeList: ", props.listType)
    let content = <p>Found no products.</p>;

  if (props.listType.length > 0) {
    content = props.listType.map((product, index) => (
        <MealItem
        key={index}
        id={index}
        image = {product.imagen}
        title = {product.titulo}
        status="Disponible"
        price= {product.precio}
        pieces = {product.piezas}
        photos = {exampleSlices}
        options = {product.opciones}
        sauces = {product.aderezos}
        ingredients={product.ingredientes}
        sizeOptions = {product.tamaños}
      />
    ));
  }
  if (props.error) {
    content = <p> {props.error} </p>;
  }
  if (props.isLoading) {
    content = <p>Loading...</p>;
  }

    return(
        <Meals content={content} />
    );
};
export default ProductsTypeList;