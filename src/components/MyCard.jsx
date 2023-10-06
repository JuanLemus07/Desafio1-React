import Card from 'react-bootstrap/Card';
import Tags from './Tags';

function MyCard({image,nombre,desc,color,texto}){
  return(
    <Card style={{width:'18rem'}}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Tags color={color} texto={texto} />
      </Card.Body>
    </Card>
  )
}
export default MyCard;