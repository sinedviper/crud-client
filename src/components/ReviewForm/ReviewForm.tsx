import React from "react";
import cn from "classnames";
import { useForm } from "react-hook-form";

import Button from "../Button/Button";
import Input from "../Input/Input";
import { ReviewFormProps } from "./ReviewForm.props";
import { User } from "../../interface/User.interface";
import { useUser } from "./use-user";

import styles from "./ReviewForm.module.css";

const ReviewForm = ({ className, ...props }: ReviewFormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const { user, onSubmit, handleRemoveUser } = useUser();

  return (
    <div className={cn(className, styles.reviewFormWrapper)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          defaultValue={user?.username}
        />
        <Input
          placeholder='password'
          {...register("password", {
            required: {
              value: true,
              message: "Password length must be between 5 and 20",
            },
            minLength: 8,
            maxLength: 25,
          })}
          error={errors.password}
          defaultValue={user?.password}
        />
        <Input
          placeholder='email'
          {...register("email", {
            required: {
              value: true,
              message: "Mail need correct and length must be between 8 and 25",
            },
            pattern: /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/g,
            minLength: 5,
            maxLength: 20,
          })}
          error={errors.email}
          defaultValue={user?.email}
        />
        <input
          type='submit'
          className={styles.button}
          value={!user ? "Create a new users" : "Edit the user"}
        />
      </form>
      <Button
        color='none'
        link='users'
        style={{ marginTop: 20 }}
        onClick={handleRemoveUser}
      >
        View all users
      </Button>
    </div>
  );
};

export default ReviewForm;
