import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap"
import { useContext, useState } from "react"
import { login as loginUser } from "../lib/auth"
import AppContext from "../context/context"

const login = () => {
  const appContext = useContext(AppContext)
  const [data, setData] = useState({ identifier: '', password: '' })

  const handleClick = () => {
    loginUser(data.identifier, data.password)
      .then((res) => { appContext.setUser(res.data.user) })
      .catch((error) => console.error(error))
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <Container>
      <Row>
        <Col>
          <div className="paper">
            <div className="header">
              <h2>ログイン</h2>
            </div>
          </div>
          <section className="wrapper">
            <Form>
              <fieldset>
                <FormGroup>
                  <Label>メールアドレス</Label>
                  <Input type="text" name="identifier" onChange={(e) => handleChange(e)} syle={{ height: 50, fontSize: "1.2rem" }} />
                </FormGroup>
                <FormGroup>
                  <Label>パスワード</Label>
                  <Input type="password" name="password" onChange={(e) => handleChange(e)} syle={{ height: 50, fontSize: "1.2rem" }} />
                </FormGroup>
                <span>
                  <a href="">
                    <small>パスワードをお忘れですか?</small>
                  </a>
                </span>
                <Button style={{ float: 'right', width: 120 }} color="primary" onClick={() => handleClick()}>ログイン</Button>
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

export default login;