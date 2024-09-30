import { Button } from '../components';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import background from '../assets/img/header/image.png'

const ProfilePage = () => {
    const {auth, logout} = useAuth()
    const navigation = useNavigate()

    const handleLogout = () => {
        logout()
        navigation('/')
    }

    return (
        <div
            className="flex justify-center items-center"
            style={{
                height: 'calc(100vh - 121px)',
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.458)), url(${background})`,
                backgroundPosition: 'center', // Centra la imagen
            }}

        >
            <div className="text-center">
                <h2 className="text-[3rem] italic font-semibold text-white">{auth?.email}</h2>
                <Button 
                    variant="danger" 
                    size="lg" 
                    onClick={handleLogout}
                >
                    cerrar sesión 
                </Button>
            </div>
        </div>
    )
}

export default ProfilePage