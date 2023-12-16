import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    var userFromState = useSelector(state => {
    return state.user.username;
  });
  const [username, setUsername] = useState(userFromState);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  function handleSubmit(e) {
    e.preventDefault();

    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit} className='"mb-4 text-sm text-stone-600 md:text-base'>
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        className='h-10 p-1 w-72 mx-auto my-4'
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div className='mt-4'>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
