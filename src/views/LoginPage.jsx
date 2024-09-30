import { useState } from "react";
import { Button, Field } from '../components';
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const initialForm = {
  email: "",
  password: ""
};

const LoginPage = () => {
  const { setAuth } = useAuth()
  const navigation = useNavigate()

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({
    error: "errorDefault",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
    
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validationForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviado data");
    setErrors(validationForm(form));

    if (Object.keys(errors).length === 0) {
      setForm(initialForm);

      let auxAuth = {
        email: form.email,
        password: form.password,
        token: true,
      }

      setAuth(auxAuth)
      navigation('/')

    } else {
      return;
    }
  };

  const validationForm = (form) => {
    const { email, password } = form;

    let errors = {};
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (!email.trim()) {
      errors.email = "campo obligatorio";
    } else if (!regexEmail.test(email.trim())) {
      errors.email = "campo 'Email' es incorrecto";
    }

    if (!password.trim()) {
      errors.password = "campo obligatorio";
    } else if (password.length < 6) {
      errors.password = "Conrase debe tenr mini 7 caracateres";
    }

    return errors;
  };

  return (
    <>
      <div className="container mx-auto min-h-[60vh]">
        <form
          onSubmit={handleSubmit}
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
              validations={errors.email}
            />

            <Field
              label="contraseña"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              handleBlur={handleBlur}
              validations={errors.password}
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
      </div>
    </>
  );
};

export default LoginPage;
