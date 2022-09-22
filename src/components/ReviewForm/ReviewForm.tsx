import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import cn from "classnames";
import { useForm } from "react-hook-form";

import Button from "../Button/Button";
import Input from "../Input/Input";
import { ReviewFormProps } from "./ReviewForm.props";

import styles from "./ReviewForm.module.css";
import { User } from "../../interface/User.interface";
import { registerUsers } from "../../mutation/User";

const ReviewForm = ({ className, ...props }: ReviewFormProps): JSX.Element => {
  const [username, setUsername] = useState<any>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const idParams = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const [registerUser] = useMutation<User>(registerUsers, {
    variables: {
      input: {
        username: username,
        email: email,
        password: password,
      },
    },
  });

  return (
    <div className={cn(className, styles.reviewFormWrapper)} {...props}>
      <form
        onSubmit={handleSubmit(
          async () =>
            username &&
            email &&
            password &&
            (await registerUser()) &&
            navigate("/users")
        )}
      >
        <Input
          placeholder='username'
          {...register("username", {
            required: {
              value: true,
              message: "Username length must be between 3 and 20",
            },
            minLength: 3,
            maxLength: 20,
          })}
          error={errors.username}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder='password'
          {...register("password", {
            required: {
              value: true,
              message: "Password length must be between 5 and 20",
            },
            minLength: 5,
            maxLength: 20,
          })}
          error={errors.password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder='email'
          {...register("email", {
            required: {
              value: true,
              message: "Mail need correct and length must be between 8 and 25",
            },
            pattern: /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/g,
            minLength: 8,
            maxLength: 25,
          })}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />
        <input
          type='submit'
          className={styles.button}
          value={!idParams.idUser ? "Create a new users" : "Edit the user"}
        />
      </form>
      <Button color='none' link='users' style={{ marginTop: 20 }}>
        View all users
      </Button>
    </div>
  );
};

export default ReviewForm;
