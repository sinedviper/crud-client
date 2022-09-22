import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import cn from "classnames";
import { useForm } from "react-hook-form";

import Button from "../Button/Button";
import Input from "../Input/Input";
import { ReviewFormProps } from "./ReviewForm.props";

import styles from "./ReviewForm.module.css";
import { User } from "../../interface/User.interface";

const ReviewForm = ({ className, ...props }: ReviewFormProps): JSX.Element => {
  const idParams = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  console.log(idParams);

  const onSubmit = (data: User) => {
    console.log(data);
    navigate("/users");
  };

  return (
    <div className={cn(className, styles.reviewFormWrapper)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder='username'
          {...register("username")}
          error={errors.username}
        />
        <Input
          placeholder='password'
          {...register("password", {
            required: { value: true, message: "Fill correct the password" },
            minLength: 10,
          })}
          error={errors.password}
        />
        <Input
          placeholder='email'
          {...register("email")}
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
