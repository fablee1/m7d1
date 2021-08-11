import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

const Results = (props) => {
  const [jobsData, setJobsData] = useState(null)
  const [jobsShown, setJobsShown] = useState(null)
  const [page, setPage] = useState(0)

  const location = useLocation()

  useEffect(() => {
    setJobsShown(jobsData?.jobs.slice(0, page * 15 + 15))
  }, [page])

  useEffect(() => {
    const query = new URLSearchParams(location.search)
    const getJobs = async () => {
      const response = await fetch(
        "https://remotive.io/api/remote-jobs?search=" + decodeURI(query.get("role"))
      )
      if (response.ok) {
        const data = await response.json()
        setJobsData(data)
        setJobsShown(data.jobs.slice(0, page * 15 + 15))
      } else {
        console.log("error")
      }
    }
    getJobs()
  }, [location])

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        {jobsShown && (
          <Col xs={12} md={8}>
            <h1 className="text-center">
              Found {jobsData ? jobsData["job-count"] : 0} Jobs
            </h1>
            {jobsShown.map((j) => (
              <SingleJob {...j} />
            ))}
          </Col>
        )}
        <button onClick={() => setPage(page + 1)}>Load More</button>
      </Row>
    </Container>
  )
}

export default Results

const SingleJob = (props) => {
  return (
    <Card className="text-center mt-4">
      <Card.Header className="mb-4">
        {props?.candidate_required_location
          ? props.candidate_required_location
          : "No Requirements"}
      </Card.Header>
      {props?.company_logo_url && (
        <Card.Img
          variant="top"
          className="card-img-company"
          src={props.company_logo_url}
        />
      )}
      <h2>{props.company_name}</h2>
      <Card.Body>
        <Card.Title className="mb-4">{props.title}</Card.Title>
        {/* <div className="d-flex justify-content-center">
          <div
            className="description-job"
            dangerouslySetInnerHTML={{ __html: props.description }}
          />
        </div> */}
        <Button variant="primary">
          <a href={props.url} className="text-white text-decoration-none">
            Find More
          </a>
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  )
}
