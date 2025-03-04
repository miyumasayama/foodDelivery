import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap"
import { register as registerUser } from "../lib/auth"
import { useState } from "react"

const register = () => {
  const [data, setData] = useState({ username: '', email: '', password: '' })
  const handleClick = () => {
    registerUser(...data)
  }

  return (
    <Container>
      <Row>
        <Col>
          <div className="paper">
            <div className="header">
              <h2>ユーザー登録</h2>
            </div>
          </div>
          <section className="wrapper">
            <Form>
              <fieldset>
                <FormGroup>
                  <Label>ユーザー名</Label>
                  <Input type="text" name="username" onChange={(e) => setData({ ...data, username: e.target.value })} syle={{ height: 50, fontSize: "1.2rem" }} />
                </FormGroup>
                <FormGroup>
                  <Label>メールアドレス</Label>
                  <Input type="text" name="email" onChange={(e) => setData({ ...data, email: e.target.value })} syle={{ height: 50, fontSize: "1.2rem" }} />
                </FormGroup>
                <FormGroup>
                  <Label>パスワード</Label>
                  <Input type="password" name="password" onChange={(e) => setData({ ...data, password: e.target.value })} syle={{ height: 50, fontSize: "1.2rem" }} />
                </FormGroup>
                <span>
                  <a href="">
                    <small>パスワードをお忘れですか?</small>
                  </a>
                </span>
                <Button style={{ float: 'right', width: 120 }} color="primary" onClick={() => handleClick()}>登録</Button>
              </fieldset>
            </Form>
          </section>
        </Col>
      </Row>
      <style jsx>
        {`
          .paper {
            text-align: center;
            margin-top: 50px;
          }
          .header {
            width: 100%;
            margin-bottom: 30px;
          }
          .wrapper {
            padding: 10px 30px 20px 30px
          }
        `}
      </style>
    </Container>
  );
}

export default register;