import { ErrorMessage, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Header, Label } from "semantic-ui-react";
import MyTextInput from "../../app/common/form/MyTextInput";
import { useStore } from "../../app/stores/store";
import * as Yup from "yup";
import ValidationErrors from "../errors/ValidationErrors";

export default observer(function RegisterForm() {
  const { userStore } = useStore();
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        displayName: "",
        userName: "",
        email: "",
        password: "",
        error: null,
      }}
      onSubmit={(values, { setErrors }) =>
        userStore
          .register(values, navigate)
          .catch((error) => setErrors({ error }))
      }
      validationSchema={Yup.object({
        displayName: Yup.string().required(),
        username: Yup.string().required(),
        email: Yup.string().required().email(),
        password: Yup.string().required(),
      })}
    >
      {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
        <Form
          className="ui form error"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <Header
            as="h2"
            content="Sign up to Project"
            color="teal"
            textAlign="center"
          ></Header>

          <MyTextInput
            name="displayName"
            placeholder="Display Name"
          ></MyTextInput>
          <MyTextInput name="username" placeholder="Username"></MyTextInput>
          <MyTextInput name="email" placeholder="Email"></MyTextInput>

          <MyTextInput
            name="password"
            placeholder="Password"
            type="password"
          ></MyTextInput>

          <ErrorMessage
            name="error"
            render={() => <ValidationErrors errors={errors.error} />}
          ></ErrorMessage>

          <Button
            disabled={!isValid || !dirty || isSubmitting}
            loading={isSubmitting}
            positive
            content="Register"
            type="submit"
            fluid
          ></Button>
        </Form>
      )}
    </Formik>
  );
});
