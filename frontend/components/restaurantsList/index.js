import Link from "next/link";
import { Card, CardBody, CardImg, CardTitle, Col, Row } from "reactstrap";

const RestaurantsList = () => {
  return (
    <Row>
      <Col xs="6" sm="4">
        <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
          <CardImg src="" top={true} style={{ height: 250 }} />
          <CardBody>
            <CardTitle>name</CardTitle>
            <CardTitle>desc</CardTitle>
          </CardBody>
          <div className="card-footer">
            <Link href="/restaurants?id=" as="/restaurants/">
              <a className="btn btn-primary">もっと見る</a>
            </Link>
          </div>
        </Card>
      </Col>
      <style jsx>
        {`
          a {
            color: white;
          }
          a:link {
            text-decoration: none;
            color: white
          }
          a:hover {
            color:white
          }
          .card-colums {
            column-count: 3
          }
        `}
      </style>
    </Row>
  );
}

export default RestaurantsList