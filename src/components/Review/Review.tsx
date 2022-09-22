import React from "react";
import { useParams } from "react-router-dom";
import cn from "classnames";

import Button from "../Button/Button";
import { ReviewProps } from "./Review.props";
import { useAppSelector } from "../../hooks/hooks";
import { allUsers } from "../../features/Users/users-slice";
import { User } from "../../interface/User.interface";

import styles from "./Review.module.css";

const object = [
  { id: "1", username: "sined", password: "111", email: "viper@gmail.com" },
  { id: "2", username: "sined", password: "111", email: "viper@gmail.com" },
  { id: "3", username: "sined", password: "111", email: "viper@gmail.com" },
  { id: "4", username: "sined", password: "111", email: "viper@gmail.com" },
];

const Review = ({ className, ...props }: ReviewProps): JSX.Element => {
  const idParams = useParams();

  const { users, loading } = useAppSelector(allUsers);

  const handleClick = (id: string) => {};

  return (
    <div className={cn(className, styles.reviewWrapper)} {...props}>
      {loading ? (
        <span className={styles.loading}>Loading users...</span>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHead}>
              <th>id</th>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              {!idParams.idUser ? (
                <>
                  <th>Profile</th>
                  <th>Destroy</th>
                </>
              ) : (
                <th>Edit</th>
              )}
            </tr>
          </thead>
          <tbody className={styles.tableMain}>
            {!idParams.idUser ? (
              users.map((user: User) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td className={styles.tdButton}>
                    <Button
                      color='none'
                      link={`users/${user._id}`}
                      style={{ textAlign: "center" }}
                    >
                      View profile
                    </Button>
                  </td>
                  <td className={styles.tdButton}>
                    <Button color='red' onClick={() => handleClick(user._id)}>
                      X
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>{object[1].id}</td>
                <td>{object[1].username}</td>
                <td>{object[1].email}</td>
                <td>{object[1].password}</td>
                <td className={styles.tdButton}>
                  <Button color='none' link={`users/${object[1].id}/edit`}>
                    Edit user
                  </Button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
      <Button color='none' link={`users/create`}>
        Create a new users
      </Button>
      {idParams.idUser && (
        <Button color='none' link={`users`} style={{ marginTop: 10 }}>
          View all users
        </Button>
      )}
    </div>
  );
};

export default Review;
