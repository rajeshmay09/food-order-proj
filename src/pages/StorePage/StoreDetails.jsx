import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import {
  selectProductsByStore,
  setSelectedStore,
} from "../../store/slices/productslice"; // Adjust the import path as necessary
import ProductCard from "../../components/UI/product-card/ProductCard";
//import setSelectedStore from "../../store/slices/storellistSlice";

const StoreDetails = () => {
  const { storeId } = useParams();
  const dispatch = useDispatch();
  const storeids = useSelector((state) => state.product.selectedStoreId);
  //console.log(storeids);
  //useEffect(() => {
  if (!storeids) {
    dispatch(setSelectedStore(storeId)); // Dispatch an action to fetch the store ID
    //console.log("from here");
  }
  const otherproducts = useSelector(selectProductsByStore);
  //}, [storeids, dispatch]);
  //console.log('here',storeids);
  //const products1 = products[1];
  const store = useSelector((state) => state.storelist.storelist);
  //const products = useSelector((state) => state.product.products);

  const updateStore = store.filter((store) => store.id == storeId);
  //console.log(updateStore);
  //const updatedProducts = products.filter(
  //  (product) => product.storeId == storeids
  //);
  //console.log("storeid", storeids);
  //const products = useSelector(selectProductsByStore)
  //console.log("error",products)
  //if (store.id) {
  //  return <div>Store not found</div>;
  //}

  return (
    <div key={store.id} className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">{updateStore[0].name}</h2>
      <p className="text-gray-600 mb-4">{updateStore[0].description}</p>

      <h3 className="text-xl font-semibold mb-4">Products</h3>
      <section className="pt-4 pb-4">
        <Container>
          <Row>
            {otherproducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default StoreDetails;

{
  /**
    {stores
        .filter((store) => store.id === storeId)
        .map((store) => (
          <div>
            <h2 className="text-2xl font-semibold mb-4">{store.name}</h2>
            <p className="text-gray-600 mb-4">{store.description}</p>
          </div>
        ))} 
          
        
        
        {products1
          .filter((product) => product.storeId === storeId)
          .map((product) => (
            <div
              key={product.id}
              className="p-4 border border-gray-300 rounded-lg shadow-sm"
            >
              <img
                src={product.image01}
                alt={product.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-semibold mb-2">{product.title}</h4>
              <p className="text-gray-600 mb-4">{product.desc}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                View Details
              </button>
            </div>
          ))}
            
          
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          key={products1.id}
          className="p-4 border border-gray-300 rounded-lg shadow-sm"
        >
          <img
            src={products1.image01}
            alt={products1.title}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h4 className="text-lg font-semibold mb-2">{products1.title}</h4>
          <p className="text-gray-600 mb-4">{products1.desc}</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            View Details
          </button>
        </div>
      </div>
          */
}
