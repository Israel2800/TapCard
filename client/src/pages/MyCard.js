// This calls the CardForm to submit the user's information

import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import CardForm from '../components/CardForm';
import CardList from '../components/CardList';
import '../index.css'

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
// import { ADD_FRIEND } from '../utils/mutations';
import Auth from '../utils/auth';

const MyCard = (props) => {
  const { username: userParam } = useParams();

//   const [addFriend] = useMutation(ADD_FRIEND);
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/mycard" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

//   const handleClick = async () => {
//     try {
//       await addFriend({
//         variables: { id: user._id },
//       });
//     } catch (e) {
//       console.error(e);
//     }
//   };

  return (
    <div className='mycard'>
      <div className="flex-row mb-3">
        <h2 className=" text-secondary p-3 display-inline-block">
          Edit {userParam ? `${user.username}'s` : 'your'} Card!
        </h2>
      </div>

      <div className="mb-3">{!userParam && <CardForm />}</div>
    </div>
  );
};

export default MyCard;
