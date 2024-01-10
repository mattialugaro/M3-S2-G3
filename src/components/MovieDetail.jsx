import { Col, Container, Row } from 'react-bootstrap';

const MovieDetail = () => {

    return(
        <>
        <Container>
            <Row>
                <Col>
                    <div className='text-white text-center my-5'>
                        <img src="" alt="copertina film" />
                        <h3>Title</h3>
                        <p>Type - Year</p>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default MovieDetail