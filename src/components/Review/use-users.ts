import { useEffect } from "react";

import {
  selectAllUsers,
  loadUsers,
  removeUsers,
  actionUser,
  actionRemoveUser,
} from "../../features/Users/users-slice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

export const useUsers = () => {
  const { list, status, user } = useAppSelector(selectAllUsers);

  const dispatch = useAppDispatch();

  const handleClick = (id: String) => {
    dispatch(removeUsers(id));
  };

  const handleSaveUser = (id: String) => {
    dispatch(actionUser(id));
  };

  const handleRemoveUser = () => {
    dispatch(actionRemoveUser());
  };

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return { user, list, status, handleClick, handleSaveUser, handleRemoveUser };
};
