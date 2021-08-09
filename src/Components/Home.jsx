import { InputGroup, FormControl, Button, Row, Col } from "react-bootstrap"
import { useState } from "react"
import { useHistory } from "react-router-dom"

const Home = (props) => {
  const [query, setQuery] = useState("")
  const history = useHistory()

  const search = () => {
    history.push("/search?role=" + query)
  }

  return (
    <div className="d-flex align-items-center home-cont">
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={6} lg={3}>
          <div className="searchBlock w-100">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Full Stack Web Developer"
                aria-label="Full Stack Web Developer"
                value={query}
                onInput={(e) => setQuery(e.target.value)}
              />
              <Button variant="outline-secondary" id="button-addon2" onClick={search}>
                Search
              </Button>
            </InputGroup>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Home
