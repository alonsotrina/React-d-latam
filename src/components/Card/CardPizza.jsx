import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import './Style.css'

const CardPizza = (props) => {
    const { name, img, price, ingredients } = props
    return (
        <>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body className='p-0 pb-5'>
                    <Card.Title className='border-bottom p-3'>{name}</Card.Title>
                    <Card.Subtitle className="fw-lighter text-center pt-3 pb-2">Ingredients</Card.Subtitle>
                    <div className="d-flex justify-content-center align-items-center border-bottom pb-3">
                        <Card.Text className='text-secondary m-0'>🍕</Card.Text>
                          
                            {
                                ingredients.map((item, index)=>(
                                    <Card.Text key={index} className='text-secondary'>{item}</Card.Text>
                                ))
                            }
                    </div>

                    <Card.Title className='fs-5 text-center mt-4 mb-3'>Precio: ${price}</Card.Title>
                  
                    <Stack direction="horizontal" className="justify-content-center align-items-center mt-5">
                        <Button variant="outline-dark" size="sm" className="mx-3">
                            ver más
                        </Button>{' '}
                        <Button variant="dark" size="sm" className="mx-3">
                            añadir
                        </Button>
                    </Stack>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardPizza