import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import kalaDigital from '../../../images/Categories/kala-digital.png'
import khodroAbzar from '../../../images/Categories/khodro-abzar.png'
import mod from '../../../images/Categories/mod.png';
import kalaSuperi from '../../../images/Categories/kala-superi.png'
import toy from '../../../images/Categories/toy.png'
import nativeProducts from '../../../images/Categories/native-products.png'
import beauty from '../../../images/Categories/beauty.png'
import kitchenThings from '../../../images/Categories/kitchen-things.png'
import book from '../../../images/Categories/book.png'
import sport from '../../../images/Categories/sport.png'

import classes from './index.module.scss'

const Categories: React.FC = () => {
  return (
    <Container className={classes.categoriesContainer}>
      <h4>دسته‌بندی‌های دیدی‌حالا</h4>
      <Row className={classes.categoriesRow} xs={2} sm={3} lg={5}>
        <Col>
        <div><Image className={classes.images} src={kalaDigital} rounded={true} ></Image></div>
        <p>کالای دیجیتال</p>
        </Col>
        <Col>
        <div><Image className={classes.images} src={khodroAbzar} rounded={true} ></Image></div>
        <p>خودرو، ابزار و تجهیزات صنعتی</p>
        </Col>
        <Col>
        <div><Image className={classes.images} src={mod} rounded={true} ></Image></div>
        <p>مد و پوشاک</p>
        </Col>
        <Col>
        <div><Image className={classes.images} src={kalaSuperi} rounded={true} ></Image></div>
        <p>کالاهای سوپرمارکتی</p>
        </Col>
        <Col>
        <div><Image className={classes.images} src={toy} rounded={true} ></Image></div>
        <p>اسباب بازی، کودک و نوزاد</p>
        </Col>
        <Col>
        <div><Image className={classes.images} src={nativeProducts} rounded={true} ></Image></div>
        <p>محصولات بومی و محلی</p>
        </Col>
        <Col>
        <div><Image className={classes.images} src={beauty} rounded={true} ></Image></div>
        <p>زیبایی و سلامت</p>
        </Col>
        <Col>
        <div><Image className={classes.images} src={kitchenThings} rounded={true} ></Image></div>
        <p>خانه و آشپزخانه</p>
        </Col>
        <Col>
        <div><Image className={classes.images} src={book} rounded={true} ></Image></div>
        <p>کتاب، لوازم تحریر و هنر</p>
        </Col>
        <Col>
        <div><Image className={classes.images} src={sport} rounded={true} ></Image></div>
        <p>ورزش و سفر</p>
        </Col>
      </Row>
    </Container>
  );

};

export default Categories;