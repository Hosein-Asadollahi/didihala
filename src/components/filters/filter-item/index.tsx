import Accordion from 'react-bootstrap/Accordion';

import classes from './style.module.scss';

const FilterItem: React.FC<{ title: string; id: number }> = ({ title, id }) => {
  return (
    <Accordion className={classes.filterItemContainer}>
      <Accordion.Item className={classes.filterItem} eventKey={String(id)}>
        <Accordion.Header className={classes.filterTitle}>{title}</Accordion.Header>
      </Accordion.Item>
    </Accordion>
  );
}

export default FilterItem;