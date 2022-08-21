import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";

import img from "../../images/download.svg";
import "./style.scss";

type ItemType = { id: string; title: string; price: string };

const ProductItem: React.FC<{ item: ItemType }> = ({ item }) => {
  return (
    <Link to="/product-list:productId" className='productItemLink'>
      <Card className='productItem'>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.price}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ProductItem;
