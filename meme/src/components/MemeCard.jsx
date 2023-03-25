import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function MemeCard({meme}) {
  
const navigate =useNavigate();

  return (
    <Card style={{ width: '18rem',margin:"10px" }}>
      <Card.Img variant="top" src={meme.url} />
      <Card.Body>
        <Card.Title>{meme.name}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button onClick={(e)=>navigate(`/edit?url=${meme.url}`)} variant="primary">Edit</Button>
      </Card.Body>
    </Card>
  );
}

export default MemeCard;