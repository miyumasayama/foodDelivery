import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap"

const register = () => {
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
                  <Input type="text" name="username" syle={{ height: 50, fontSize: "1.2rem" }} />
                </FormGroup>
                <FormGroup>
                  <Label>メールアドレス</Label>
                  <Input type="text" name="email" syle={{ height: 50, fontSize: "1.2rem" }} />
                </FormGroup>
                <FormGroup>
                  <Label>パスワード</Label>
                  <Input type="password" name="password" syle={{ height: 50, fontSize: "1.2rem" }} />
                </FormGroup>
                <span>
                  <a href="">
                    <small>パスワードをお忘れですか?</small>
                  </a>
                </span>
                <Button style={{ float: 'right', width: 120 }} color="primary">登録</Button>
              </fieldset>
            </Form>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default register;