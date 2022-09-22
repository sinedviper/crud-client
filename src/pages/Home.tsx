import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";

import Review from "../components/Review/Review";
import { users } from "../mutation/User";
import { updateUsers } from "../features/Users/users-slice";
import { useAppDispatch } from "../hooks/hooks";
import { Users } from "../interface/User.interface";

const Home = (): JSX.Element => {
  const { data, loading, error } = useQuery<Users>(users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      updateUsers({
        users: data?.users,
        loading: loading,
        error: error?.message,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      <Review />
    </>
  );
};

export default Home;
