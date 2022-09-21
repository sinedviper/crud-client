import React from "react";
import { useParams } from "react-router-dom";
import cn from "classnames";

import Button from "../Button/Button";
import { ReviewFormProps } from "./ReviewForm.props";

import styles from "./ReviewForm.module.css";
import Input from "../Input/Input";

const ReviewForm = ({
  user,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const idParams = useParams();

  return (
    <div className={cn(className, styles.reviewFormWrapper)} {...props}>
      <form>
        <Input placeholder='name' />
        <Input placeholder='password' />
        <Input placeholder='email' />
        <Button color='green' link={`users/create`} className={styles.button}>
          {!idParams.idUser ? "Create a new users" : "Edit the user"}
        </Button>
      </form>
      <Button color='none' link={`users`} style={{ marginTop: 20 }}>
        View all users
      </Button>
    </div>
  );
};

export default ReviewForm;
