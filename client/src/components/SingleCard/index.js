// This is the Me tab

import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CommentForm from '../CommentForm';
import CommentList from '../CommentList';
import Auth from '../../utils/auth';
import test from '../../images/heros/artheader.jpg'
import { useQuery } from '@apollo/client';
import { QUERY_CARD } from '../../utils/queries';

const SingleCard = ({ cards, title }) => {
  const { id: cardID } = useParams();

  const { loading, data } = useQuery(QUERY_CARD, {
    variables: { id: cardID },
  });

  const card = data?.card || {};

  if (loading) {
    return <div>Loading...</div>;
  }
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
            <div className='imageProfile'>
              <p><img className="imageUser" src={card.image} alt="usersImage" /></p>
            </div>
          <div className='majorText'><h1>Major: 
              {card.field}</h1> 
            
          </div>
          <div className='userDescription'>
            My description:<p>{card.description}</p>
          </div>
          <div className='icons'>
            <a href={card.linkedIn} alt="linkedInImage" target="_blank" rel="noreferrer">
              <img className='icon-size' src={test} alt="example" />
            </a>
            <a href={card.gitHub} alt="gitHubImage" target="_blank" rel="noreferrer">
              <img className='icon-size' src={test} alt="example" />
            </a>
            <a href={card.facebook} alt="facebookImage" target="_blank" rel="noreferrer">
              <img className='icon-size' src={test} alt="example" />
            </a>
          </div>
         
            </div>
           
            
            
          </div>
          
        ))}
      
    </div>
  );
};

export default SingleCard;
