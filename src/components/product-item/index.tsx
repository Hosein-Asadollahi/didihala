import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";

import img from "../../images/download.jpg";
import "./style.scss";

type ItemType = { id: string; title: string; price: string };

const ProductItem: React.FC<{ item: ItemType }> = ({ item }) => {
  return (
    <Link
      to="/product-list:productId"
      className="productItemLink border-b border-l"
    >
      <Card className="productItem">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            <p>{item.title}</p>
          </Card.Title>
          <Card.Text>{item.price}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ProductItem;
