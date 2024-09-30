import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext"
import { validationLogin } from '../../utils/validations';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    Button,
    Field,
    Alert,
    AlertDescription,
    AlertTitle
} from "../index"

const initialForm = {
    email: "",
    password: ""
};

const SignInModal = ({ isOpen, onClose }) => {
    const {auth, validarLogin, state, toggle} = useAuth()
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});

    useEffect(()=> {
        if(auth.email){
            setForm(initialForm)
            toggle('showPassword')
        }
    },[auth.email])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;

        // Crea un objeto temporal con el valor actualizado
        const tempForm = {
            ...form,
            [name]: value,
        };

        // Solo actualiza el error si el campo tiene un valor
        if (value.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: validationLogin(tempForm)[name],
            }));
        }
    };

    const handleSubmit4 = async (e) => {
        e.preventDefault();
        const newErrors = validationLogin(form);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            await validarLogin(form.email, form.password);
        }
    };

    const closeDialog = () => {
        setForm(initialForm)
        setErrors({})
        onClose('dialogOpen')
        toggle('showPassword')
    }

    return (
        <Dialog open={isOpen} onOpenChange={closeDialog}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Inicia sesión para comprar</DialogTitle>
                    <DialogDescription>
                        Por favor, ingresa tu correo y contraseña para continuar.
                    </DialogDescription>
                </DialogHeader>

                {
                    auth.showMsg &&
                    <Alert variant="danger" size="sm">
                        {/* <AlertCircle className="h-4 w-4" /> */}
                        <ExclamationTriangleIcon className="w-6 h-6" />
                        <AlertTitle className="ml-5">Error</AlertTitle>
                        <AlertDescription className="ml-5">{auth.msg}</AlertDescription>
                    </Alert>
                }

                <form onSubmit={handleSubmit4}>
                    <div className="grid grid-cols-1 gap-y-4">
                        <Field
                            label="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            handleBlur={handleBlur}
                            validations={errors ? errors.email : null}
                        />

                        <Field
                            label="contraseña"
                            name="password"
                            type={state.showPassword ? 'text' : 'password'}
                            value={form.password}
                            icon={true}
                            onChange={handleChange}
                            handleBlur={handleBlur}
                            validations={errors ? errors.password : null}
                            showPassword={state.showPassword}
                            handleClick={() => toggle('showPassword')}
                        />
                    </div>

                    <div className="mt-5">
                        <Button
                            variant="dark"
                            size="lg"
                            type="submit"
                            className="w-full"
                        >
                            Ingresar
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default SignInModal