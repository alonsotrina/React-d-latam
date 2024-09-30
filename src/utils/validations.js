export const validationLogin = (form) => {
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

export const validationRegister = (form) => {
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