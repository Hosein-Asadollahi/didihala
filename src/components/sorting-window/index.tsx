import String from '../../utils/String';
import classes from './style.module.scss';

const SortingWindow: React.FC = () => {
  return <div className={classes.sortingWindow}>
    <p>{String.sortingTxt}</p>
  </div>
};

export default SortingWindow;