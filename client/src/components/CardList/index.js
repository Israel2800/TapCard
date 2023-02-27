// This are the cards that we display in the home page

import React from 'react';
import { Link } from 'react-router-dom';

const CardList = ({ cards, title }) => {
  if (!cards.length) {
    return <h3>No Cards Yet</h3>;
  }

  return (
    <div className='allCards'>
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
              {/* thought on {card.createdAt} */}
            </p>
            <div className="card-body2">
              {/* <Link to={`/card/${card._id}`}> */}
              <div className='imageProfile2'>
                <p><img className="imageUser2" src={card.image} alt="usersImage" /></p>
              </div>
            


              {/* </Link> */}
            </div>
            
            {/* Use code below for future reference */}
            {/* {card.commentCount > 0 && (
              <CommentList comments={card.comments} />
            )}

            {Auth.loggedIn() && <CommentForm cardId={card._id} />} */}

          </div>
        ))}
    </div>
  );
};

export default CardList;
