import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers, badUsersSelector, selectFilteredUsers } from 'store/users';

export const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectFilteredUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log('render Users');

  return (
    <div>
      <h1>Users</h1>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
