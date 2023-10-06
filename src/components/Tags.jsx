import Badge from 'react-bootstrap/Badge';

function Tags({color, texto}){
  return(
    <>
    <Badge pill bg={color}></Badge>
    </>
  )
}
export default Tags