import FilterWindow from "../../components/filters";
import ProductListWindow from "../../components/product-list-window";

import classes from "./style.module.scss";

const ProductList: React.FC = () => {
  return (
    <section className={classes.productList}>
      <section>
        <ProductListWindow />
      </section>

      <section className={classes.filterWindow} >
        <FilterWindow />
      </section>
    </section>
  );
};

export default ProductList;
