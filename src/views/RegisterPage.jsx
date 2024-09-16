import { useState } from "react";
import { Button, Field } from '../components';

const initialForm = {
  email: "",
  password: "",
  repeat_password: "",
};

const RegisterPage = () => {
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

    console.log("errors - submit", errors);

    if (Object.keys(errors).length === 0) {
      setForm(initialForm);
    } else {
      return;
    }
  };

  const validationForm = (form) => {
    const { email, password, repeat_password } = form;

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
      errors.password = "Contraseña debe tener min. 7 caracteres";
    }

    if (!repeat_password.trim()) {
      errors.repeat_password = "campo obligatorio";
    } else if (repeat_password.length < 6) {
      errors.repeat_password = "Contraseña debe tener min. 7 caracteres";
    } else if (repeat_password != password) {
      errors.repeat_password = "Las contraseña no coinciden";
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

            <Field
              label="repetir contraseña"
              name="repeat_password"
              type="password"
              value={form.repeat_password}
              onChange={handleChange}
              handleBlur={handleBlur}
              validations={errors.repeat_password}
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
