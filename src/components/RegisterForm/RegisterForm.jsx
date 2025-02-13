import css from "./RegisterForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
// import { selectError } from "../../redux/auth/selectors";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const contactSchema = Yup.object().shape({
    password: Yup.string().min(7, "Too Short!").required("Required"),
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const userId1 = useId();
  const userId2 = useId();
  const userId3 = useId();
  //   const error = useSelector(selectError);

  //   useEffect(() => {
  //     if (error.length > 0) {
  //       toast.error(error);
  //     }
  //   }, [error]);
  return (
    <>
      <div className={css.background}>
        <div className={css.shape}></div>
        <div className={css.shape}></div>
      </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          dispatch(register(values));
          actions.resetForm();
        }}
        validationSchema={contactSchema}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <label className={css.label} htmlFor={userId1}>
              Username
            </label>
            <Field
              className={css.input}
              type="text"
              name="name" // corrected name prop
              id={userId1}
            />
            <ErrorMessage className={css.err} name="name" component="p" />
            <label className={css.label} htmlFor={userId2}>
              Email
            </label>
            <Field
              className={css.input}
              type="text"
              name="email" // corrected name prop
              id={userId2}
            />
            <ErrorMessage className={css.err} name="email" component="p" />
            <label className={css.label} htmlFor={userId3}>
              Password
            </label>
            <Field
              className={css.input}
              type="password"
              name="password" // corrected name prop
              id={userId3}
            />
            <ErrorMessage className={css.err} name="password" component="p" />
            <button
              className={css.button}
              type="submit"
              disabled={isSubmitting}
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
