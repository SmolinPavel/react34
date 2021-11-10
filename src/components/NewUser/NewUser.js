import { useDispatch, useSelector } from 'react-redux';

import { selectNewUserName, setNewUser } from 'store/users';

export const NewUser = () => {
  const dispatch = useDispatch();

  const newUserName = useSelector(selectNewUserName);

  return (
    <div>
      <input
        value={newUserName}
        onChange={(e) => dispatch(setNewUser(e.target.value))}
      />
    </div>
  );
};
