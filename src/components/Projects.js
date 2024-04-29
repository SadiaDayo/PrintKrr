import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product from "../assets/images/pic.jpg"

export default function Projects()
{
    return(
<> 
<div className="project-section container">
<div className="row">
    <div className="col col-sm-12 col-md-4 col-lg-4">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product} />
      <Card.Body>
        <Card.Title>Meoww</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="col col-sm-12 col-md-4 col-lg-4">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product}  />
      <Card.Body>
        <Card.Title>Meoww</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="col col-sm-12 col-md-4 col-lg-4">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product}  />
      <Card.Body>
        <Card.Title>Meoww</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
</div>
</div>
</>

    )
}