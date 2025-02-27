
import { Alert, Button, Col, InputGroup, InputGroupText, Row, Input } from 'reactstrap'
import RestaurantsList from '../components/restaurantsList';
import { useState } from 'react';
const index = () => {
  const [query, setQuery] = useState("")
  return (
    <div className='container-fluid'>
      <Row>
        <Col>
          <div className='search'>
            <InputGroup>
              <InputGroupText>search</InputGroupText>
              <Input placeholder="レストラン名を入力" onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())} />
            </InputGroup>
          </div>
        </Col>
      </Row>
      <RestaurantsList query={query} />
      <style jsx>{` 
        .search {
          margin: 20px;
          width: 500px;
        }
      `}
      </style>

    </div>
  );
}

export default index;