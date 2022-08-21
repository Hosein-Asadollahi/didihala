import ProductItem from '../product-item';
import classes from './style.module.scss';

type ItemType = { id: string; title: string; price: string };

const ProductListWindow: React.FC = () => {
  const array: ItemType[] = [
    {id: 'e1', title: 'Phone 1', price: '$100'},
    {id: 'e2', title: 'Phone 2', price: '$200'},
    {id: 'e3', title: 'Phone 3', price: '$300'},
    {id: 'e4', title: 'Phone 4', price: '$400'},
    {id: 'e5', title: 'Phone 5', price: '$500'},
    {id: 'e6', title: 'Phone 6', price: '$600'},
  ];
  return <div className={classes.productWindow}>
    {array.map(item => <ProductItem key={item.id} item={item} />)}
  </div>
};

export default ProductListWindow;