
import { Alert, Button, Col, InputGroup, InputGroupText, Row, Input } from 'reactstrap'
const index = () => {
  return (
    <div className='container-fluid'>
      <Row>
        <Col>
          <div className='search'>
            <InputGroup>
              <InputGroupText>search</InputGroupText>
              <Input placeholder="レストラン名を入力" />
            </InputGroup>
          </div>
        </Col>
      </Row>
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