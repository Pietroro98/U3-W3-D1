import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../redux/actions";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites);

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isFavourite = (company) => favourites.includes(company);

  const handleAddFavourite = (company) => {
    dispatch(addFavourite(company));
  };

  const handleRemoveFavourite = (company) => {
    dispatch(removeFavourite(company));
  };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map((jobData) => (
            <Row
              key={jobData._id}
              className="mx-0 mt-3 p-3"
              style={{ border: "1px solid #00000033", borderRadius: 4 }}
            >
              <Col xs={3}>
                <h5>{jobData.company_name}</h5>
              </Col>
              <Col xs={6}>
                <a href={jobData.url} target="_blank" rel="noreferrer">
                  {jobData.title}
                </a>
              </Col>
              <Col xs={3} className="text-right">
                {isFavourite(jobData.company_name) ? (
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveFavourite(jobData.company_name)}
                  >
                    Remove Favourite
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={() => handleAddFavourite(jobData.company_name)}
                  >
                    Add Favourite
                  </Button>
                )}
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
