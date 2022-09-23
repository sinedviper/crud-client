import { useNavigate } from "react-router-dom";

import {
  actionRemoveUser,
  createUsers,
  editUsers,
  selectAllUsers,
} from "../../features/Users/users-slice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { User } from "../../interface/User.interface";

export const useUser = () => {
  const { user } = useAppSelector(selectAllUsers);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: Omit<User, "_id">) => {
    const update = {
      id: String(user?._id),
      user: data,
    };

    if (user) {
      dispatch(editUsers(update));
    } else {
      dispatch(createUsers(data));
    }
    handleRemoveUser();
    navigate("/users");
  };

  const handleRemoveUser = () => {
    dispatch(actionRemoveUser());
  };

  return { user, onSubmit, handleRemoveUser };
};
