import classes from './style.module.scss';

const CartIcon: React.FC = () => {
  return (
    <div className={classes.cartIconContainer}>
      <span className={classes.cartIconAmount}>0</span>
      <span className={classes.cartIcon}>سبد خرید</span>
    </div>
  );
};

export default CartIcon;
