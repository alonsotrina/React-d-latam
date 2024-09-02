import img from '../assets/img/404/404.3.png'
import background from '../assets/img/header/image.png'
import { Button } from '../components/ui/Buttton';
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        height: 'calc(100vh - 121px)',
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.458)), url(${background})`,
        backgroundPosition: 'center', // Centra la imagen
      }}

    >
      <div className="bg-">
        <div className="flex items-center justify-center">
          <h2 className="text-[14rem] italic font-semibold text-white">4</h2>
          <img className="w-[45%] max-w-none" src={img} alt="Not Found" />
          <h2 className="text-[14rem] italic font-semibold text-white">4</h2>
        </div>

        <div className="flex justify-center">
          <Link to="/">
            <Button variant="danger" size="lg">
              Volver al home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
