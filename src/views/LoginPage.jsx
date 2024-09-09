import { useState } from "react";
import Field from "../components/Inputs/Field";
import Header from "../components/Header/Header";

const initialForm = {
  email: "",
  password: ""
};

const LoginPage = () => {
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
    <div>
      <Header
        title="Inicia sesión"
        description="Accede a tu cuenta para continuar."
      />

      <div className="container mx-auto -mt-20 relative z-10 min-h-[60vh]">
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
          <div className="mt-10">
            <button type="submit" className="btn-primary">
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
