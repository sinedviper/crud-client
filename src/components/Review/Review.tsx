import React from "react";
import cn from "classnames";

import Button from "../Button/Button";
import { ReviewProps } from "./Review.props";
import { User } from "../../interface/User.interface";
import { useUsers } from "./use-users";

import styles from "./Review.module.css";

const Review = ({ className, ...props }: ReviewProps): JSX.Element => {
  const { status, user, list, handleClick, handleRemoveUser, handleSaveUser } =
    useUsers();

  return (
    <div className={cn(className, styles.reviewWrapper)} {...props}>
      {status === "pending" ? (
        <span className={styles.loading}>Loading users...</span>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHead}>
              <th>id</th>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              {!user ? (
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
            {!user ? (
              list?.map((user: User) => (
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
                      onClick={() => handleSaveUser(user._id)}
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
                <td>{user && user._id}</td>
                <td>{user && user.username}</td>
                <td>{user && user.email}</td>
                <td>{user && user.password}</td>
                <td className={styles.tdButton}>
                  <Button color='none' link={`users/${user && user._id}/edit`}>
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
      {user && (
        <Button
          color='none'
          link={`users`}
          style={{ marginTop: 10 }}
          onClick={handleRemoveUser}
        >
          View all users
        </Button>
      )}
    </div>
  );
};

export default Review;
