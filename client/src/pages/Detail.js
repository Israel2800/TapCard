import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import spinner from '../assets/spinner.gif';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentCard, setCurrentCard] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { cards } = state;

  useEffect(() => {
    if (cards.length) {
      setCurrentCard(cards.find((card) => card._id === id));
    } else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        cards: data.cards,
      });
    }
  }, [cards, data, dispatch, id]);

  return (
    <>
      {currentCard ? (
        <div className="container my-1">
          <Link to="/">← Back to Cards</Link>

          <h2>{currentCard.name}</h2>

          <p>{currentCard.description}</p>

          <p>
            <strong>linkedIn:</strong>${currentCard.linkedIn}{' '}
            <button>Add to Cart</button>
            <button>Remove from Cart</button>
          </p>

          <img
            src={`/images/${currentCard.image}`}
            alt={currentCard.name}
          />
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </>
  );
}

export default Detail;
