import FilterItem from './filter-item';
import String, { Filter } from '../../utils/String';

import classes from './style.module.scss';

const FilterWindow: React.FC = () => {
  return <>
    <div className={classes.filterTitle} >{String.filters}</div>
    {Filter.map(item => <FilterItem key={Filter.indexOf(item)} id={Filter.indexOf(item)} title={item} />)}
  </>
};

export default FilterWindow;