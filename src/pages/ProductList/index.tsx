import FilterWindow from "../../components/filters";
import ProductListWindow from "../../components/product-list-window";
import SortingWindow from "../../components/sorting-window";

import classes from "./style.module.scss";

const ProductList: React.FC = () => {
  return (
    <section className={classes.productList}>
      <section className={classes.filterWindow} >
        <FilterWindow />
      </section>

      <section className={classes.productWindowContainer}>
        <SortingWindow />
        <ProductListWindow />
      </section>
    </section>
  );
};

export default ProductList;
