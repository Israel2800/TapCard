import React from 'react';
import { Link } from 'react-router-dom';

const SingleCardList = ({ cards, title }) => {
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
                to={`/profile/${card.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {card.username}
              </Link>{' '}
              {/* thought on {card.createdAt} */}
            </p>
            <div className="card-body">
              <Link to={`/profile/${card.username}`}>
                <p>{card.cardName}</p>
                <p>{card.image}</p>
                <p>{card.field}</p>
                <p>{card.description}</p>
                <p>{card.linkedIn}</p>
                <p>{card.facebook}</p>
                <p>{card.gitHub}</p>


                {/* <p className="mb-0">
                  Reactions: {card.reactionCount} || Click to{' '}
                  {card.reactionCount ? 'see' : 'start'} the discussion!
                </p> */}
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SingleCardList;
