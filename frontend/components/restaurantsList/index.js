import Link from "next/link";
import { Card, CardBody, CardImg, CardTitle, Col, Row } from "reactstrap";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks'
import { search } from "../../utils/restaurants";

const query = gql`
  {
    restaurants {
      documentId 
      name 
      description 
      image {url}
    }
  }
`

const RestaurantsList = (props) => {
  const { isLoading, error, data } = useQuery(query)
  const searchedRestaurants = search(data?.restaurants ?? [], props.query)
  if (data?.restaurants && data?.restaurants.length) {
    return (
      <Row>
        {searchedRestaurants.map((restaurant) => {
          return (
            <Col xs="6" sm="4" key={restaurant.documentId}>
              <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
                <CardImg src={`${process.env.NEXT_PUBLIC_API_URL}${restaurant.image?.at(0).url}`} top={true} style={{ height: 250 }} />
                <CardBody>
                  <CardTitle>{restaurant.name ?? ''}</CardTitle>
                  <CardTitle>{restaurant.desciption?.at(0).children?.at(0).text ?? ''}</CardTitle>
                </CardBody>
                <div className="card-footer">
                  <Link href={`restautants/${restaurant.documentId}`} as={`restautants?id=${restaurant.documentId}`}>
                    <a className="btn btn-primary">もっと見る</a>
                  </Link>
                </div>
              </Card>
            </Col>
          )

        })}
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
  } else {
    return (<></>)
  }
}

export default RestaurantsList