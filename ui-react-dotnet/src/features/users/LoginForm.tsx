import { ErrorMessage, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Header, Label } from "semantic-ui-react";
import MyTextInput from "../../app/common/form/MyTextInput";
import { useStore } from "../../app/stores/store";

export default observer(function LoginForm() {
  const { userStore } = useStore();
  const navigate = useNavigate()
  return (
    <Formik
      initialValues={{ email: "", password: "", error: null }}
      onSubmit={(values, { setErrors }) =>
        userStore
          .login(values,navigate)
          .catch((error) => setErrors({ error: "Invalid email or password" }))
      }
    >
      {({ handleSubmit, isSubmitting, errors }) => (
        <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">

          <Header as="h2" content="Login to Project" color="teal" textAlign="center"></Header>

          <MyTextInput name="email" placeholder="Email"></MyTextInput>

          <MyTextInput
            name="password"
            placeholder="Password"
            type="password"
          ></MyTextInput>

          <ErrorMessage
            name="error"
            render={() => (
              <Label
                style={{ marginBottom: 10 }}
                basic
                dolor="red"
                content={errors.error}
              />
            )}
          ></ErrorMessage>

          <Button
            loading={isSubmitting}
            positive
            content="Login"
            type="submit"
            fluid
          ></Button>
        </Form>
      )}
    </Formik>
  );
});
