import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import CardItem from '../CardItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { QUERY_PRODUCTS } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';

function CardList() {
  const [state, dispatch] = useStoreContext();

  const { currentMajor } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        cards: data.cards,
      });
    }
  }, [data, dispatch]);

  function filterCards() {
    if (!currentMajor) {
      return state.cards;
    }

    return state.cards.filter(
      (card) => card.major._id === currentMajor
    );
  }

  return (
    <div className="my-2">
      <h2>Our Cards:</h2>
      {state.cards.length ? (
        <div className="flex-row">
          {filterCards().map((card) => (
            <CardItem
              key={card._id}
              _id={card._id}
              image={card.image}
              name={card.name}
              linkedIn={card.linkedIn}
              facebook={card.facebook}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any cards yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default CardList;
