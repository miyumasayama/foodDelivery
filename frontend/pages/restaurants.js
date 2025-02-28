import { Col, Card, CardBody, CardImg, CardTitle, Row, } from 'reactstrap'
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks'
import { useRouter } from "next/router";

const GET_RESTAURANT_DISHES = gql`
  
    query ($id: ID!) {
      restaurant(documentId: $id) {
        documentId 
        name
        dishes {
          
          name
          description
          price
          image {
            url
          }
        }
      }
    }
  
`

const Restaurants = () => {
  const router = useRouter()
  const { isLoading, error, data } = useQuery(GET_RESTAURANT_DISHES, { variables: { id: router.query.id } })
  if (error) {
    return (
      <h1>レストランの読み込みに失敗しました。</h1>
    )
  }
  if (isLoading) {
    return (
      <h1>読み込み中...</h1>
    )
  }

  return (
    <Row>
      {data?.restaurant?.dishes.map((dish) => {
        return (
          <Col xs="6" sm="4" key={dish.documentId}>
            <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
              <CardImg src={`${process.env.NEXT_PUBLIC_API_URL}${dish.image.url}`} top={true} style={{ height: 250 }} />
              <CardBody>
                <CardTitle>{dish.name ?? ''}</CardTitle>
                <CardTitle>{dish.desciption?.at(0).children?.at(0).text ?? ''}</CardTitle>
              </CardBody>
              {/* <div className="card-footer">
                <Link as={`restautants/${dish.documentId}`} href={`restautants?id=${restaurant.documentId}`}>
                  <a className="btn btn-primary">もっと見る</a>
                </Link>
              </div> */}
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
}

export default Restaurants