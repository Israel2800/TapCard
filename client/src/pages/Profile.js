// This is were we call our 'Single Card'

import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import SingleCard from '../components/SingleCard';
import CardForm from '../components/CardForm';
import CardList from '../components/CardList';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
// import { ADD_FRIEND } from '../utils/mutations';
import Auth from '../utils/auth';

const Profile = (props) => {
  const { username: userParam } = useParams();

//   const [addFriend] = useMutation(ADD_FRIEND);
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // navigate to personal card form page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile" />;
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
    <div>
      <div className="flex-row mb-3">
        

        {/* {userParam && (
          <button className="btn ml-auto" onClick={handleClick}>
            Add Friend
          </button>
        )} */}
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8 move-text">
          <SingleCard
            cards={user.cards}
            title={`${user.username}'s card!`}
          />
        </div>

        {/* <div className="col-12 col-lg-3 mb-3">
          <FriendList
            username={user.username}
            friendCount={user.friendCount}
            friends={user.friends}
          />
        </div> */}
      </div>
      {/* <div className="mb-3">{!userParam && <CardForm />}</div> */}
    </div>
  );
};

export default Profile;
