import { useState } from "react";
import { validationRegister } from '../utils/validations';
import { ExclamationTriangleIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';
import { useAuth } from "../context/AuthContext";
import {
  Button,
  Field,
  Alert,
  AlertDescription,
  AlertTitle
} from '../components';

const initialForm = {
  email: "",
  password: "",
  repeat_password: "",
};

const RegisterPage = () => {
  const { auth, validarRegister } = useAuth()
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

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
        [name]: validationRegister(tempForm)[name],
      }));
    }
  };

  const handleSubmit4 = async (e) => {
    e.preventDefault();
    const newErrors = validationRegister(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const result = await validarRegister(form.email, form.password);

      if (result) {
        setForm(initialForm)
      }
    }
  };

  return (
    <>
      <div className="container mx-auto min-h-[60vh]">

        <div className="mx-auto max-w-xl py-7">
          {
            auth.showMsg &&

            <Alert variant={auth.msg === "Usuario registrado con exito." ? "success" : "danger"} size="sm">
              {auth.msg === "Usuario registrado con exito." ?
                <CheckBadgeIcon className="w-6 h-6" /> :<ExclamationTriangleIcon className="w-6 h-6" />
              }
              <AlertTitle className="ml-5">{auth.msg === "Usuario registrado con exito." ? "¡Listo!" : "¡Ha ocurrido un error!"}</AlertTitle>
              <AlertDescription className="ml-5">{auth.msg}</AlertDescription>
            </Alert>
          }
        </div>

        <form
          onSubmit={handleSubmit4}
          className="bg-white mx-auto max-w-xl px-14 py-7 rounded-xl"
        >
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
              type="password"
              value={form.password}
              onChange={handleChange}
              handleBlur={handleBlur}
              validations={errors ? errors.password : null}
            />

            <Field
              label="repetir contraseña"
              name="repeat_password"
              type="password"
              value={form.repeat_password}
              onChange={handleChange}
              handleBlur={handleBlur}
              validations={errors ? errors.repeat_password : null}
            />
          </div>

          <Button
            variant="dark"
            size="lg"
            type="submit"
            className="w-full mt-10"
          >
            Ingresar
          </Button>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
