// This is the Me tab

import React from 'react';
import { Link } from 'react-router-dom';
import CommentForm from '../CommentForm';
import CommentList from '../CommentList';
import Auth from '../../utils/auth';

const SingleCard = ({ cards, title }) => {
  if (!cards.length) {
    return <h3>No Cards Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {cards &&
        cards.map(card => (
          <div key={card._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/card/${card._id}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {card.username}
              </Link>{' '}
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
           
            {card.commentCount > 0 && (
              <CommentList comments={card.comments} />
            )}

            {Auth.loggedIn() && <CommentForm cardId={card._id} />}

          </div>
        ))}
    </div>
  );
};

export default SingleCard;
