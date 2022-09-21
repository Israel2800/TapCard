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
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {card.username}
          </span>{' '}
        </p>
        <div className="card-body">
          <p>{card.cardName}</p>
          <p>{card.image}</p>
          <p>{card.field}</p>
          <p>{card.description}</p>
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
