// This is the Card of each user when we click one in the main page

import React from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_CARD } from '../utils/queries';

const CardView = (props) => {
  const { id: cardID } = useParams();

  const { loading, data } = useQuery(QUERY_CARD, {
    variables: { id: cardID },
  });

  const card = data?.card || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="">
        <p className="">
          <span style={{ fontWeight: 700 }} className="">
            {card.username}
          </span>{' '}
        </p>
        <div className="card-body">
          
          <div className='imageProfile'>
            <p>{card.image}</p>
          </div>
          <div className='major'>{card.field}</div>
          
          <div>
          {card.description}
          </div>
          <p>{card.linkedIn}</p>
          
          <p>{card.facebook}</p>
          
          <p>{card.gitHub}</p>        
        </div>
      </div>
      {card.commentCount > 0 && (
        <CommentList comments={card.comments} />
      )}

      {Auth.loggedIn() && <CommentForm cardId={card._id} />}

      {/* {thought.reactionCount > 0 && (
        <ReactionList reactions={thought.reactions} />
      )} */}

      {/* {Auth.loggedIn() && <ReactionForm thoughtId={thought._id} />} */}
    </div>
  );
};

export default CardView;
