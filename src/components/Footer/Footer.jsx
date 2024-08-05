import Nav from 'react-bootstrap/Nav'
import Stack from 'react-bootstrap/Stack';
import './Style.css'

const Footer = (props) => {
  const { copyright } = props

  return (
    <footer className='border-top mt-5'>
      <h4 className='fs-6 text-secondary mt-5 text-center'>{copyright}</h4>

      <Stack direction="horizontal" className="justify-content-center align-items-center mt-3">
        <Nav.Link href="#home"><i className="bi bi-facebook fs-4"></i></Nav.Link>
        <Nav.Link href="#home" className='mx-3'><i className="bi bi-instagram fs-4"></i></Nav.Link>
        <Nav.Link href="#link"><i className="bi bi-tiktok fs-4"></i></Nav.Link>
      </Stack>
    </footer>
  )
}

export default Footer