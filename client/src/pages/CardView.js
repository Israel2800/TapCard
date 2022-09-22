// This is the Card of each user when we click one in the main page

import React from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_CARD } from '../utils/queries';

import test from '../images/heros/artheader.jpg'
import {BrowserRouter as Router, Link} from 'react-router-dom';


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
            <h1>{card.username}</h1>
          </span>{' '}
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
