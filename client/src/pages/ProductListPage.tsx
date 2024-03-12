import InvoiceDemoComp from "../components/InvoiceDemoComp";
import ProductComp from "../components/ProductComp";

const ProductListPage = () => {
  return (
    <div className="bg-no-repeat  h-screen flex">
      <ProductComp />
      <InvoiceDemoComp/>
    </div>
  );
};

export default ProductListPage;
