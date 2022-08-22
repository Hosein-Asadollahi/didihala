import String from '../../utils/String';
import ProductItem from '../product-item';
import classes from './style.module.scss';

type ItemType = { id: string; title: string; price: string };

const ProductListWindow: React.FC = () => {
  const { itemName } = String;

  const array: ItemType[] = [
    {id: 'e1', title: itemName, price: '$100'},
    {id: 'e2', title: itemName, price: '$200'},
    {id: 'e3', title: itemName, price: '$300'},
    {id: 'e4', title: itemName, price: '$400'},
    {id: 'e5', title: itemName, price: '$500'},
    {id: 'e6', title: itemName, price: '$600'},
  ];
  return <div className={classes.productWindow}>
    {array.map(item => <ProductItem key={item.id} item={item} />)}
  </div>
};

export default ProductListWindow;