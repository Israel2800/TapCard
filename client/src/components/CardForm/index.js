// This is the CardForm

import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_CARD } from '../../utils/mutations';
import { QUERY_CARDS, QUERY_ME } from '../../utils/queries';

const CardForm = () => {
  const [cardName, setCardName] = useState('');
  const [image, setImage] = useState('');
  const [field, setField] = useState('');
  const [description, setDescription] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [facebook, setFacebook] = useState('');
  const [gitHub, setGitHub] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addCard, { error }] = useMutation(ADD_CARD, {
    update(cache, { data: { addCard } }) {
      
      // could potentially not exist yet, so wrap in a try/catch
    try {
      // update me array's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, cards: [...me.cards, addCard] } },
      });
    } catch (e) {
      console.warn("Firs card!")
    }

    // update cards array's cache
    const { cards } = cache.readQuery({ query: QUERY_CARDS });
    cache.writeQuery({
      query: QUERY_CARDS,
      data: { cards: [addCard, ...cards] },
    });
  }
})

  // update state based on form input changes
  const handleChangeName = (event) => {
    if (event.target.value.length <= 280) {
      setCardName(event.target.value);
      

      setCharacterCount(event.target.value.length);
    }
    

  };
  const handleChangeImage = (event) => {
    if (event.target.value.length <= 280) {
      setImage(event.target.value);
      

      setCharacterCount(event.target.value.length);
    }
  };
  const handleChangeField = (event) => {
    if (event.target.value.length <= 280) {
      setField(event.target.value);
      

      setCharacterCount(event.target.value.length);
    }
  };
  const handleChangeDescription = (event) => {
    if (event.target.value.length <= 280) {
      setDescription(event.target.value);
      

      setCharacterCount(event.target.value.length);
    }
  };
  const handleChangeLinkedIn = (event) => {
    if (event.target.value.length <= 280) {
      setLinkedIn(event.target.value);
      

      setCharacterCount(event.target.value.length);
    }
  };
  const handleChangeFacebook = (event) => {
    if (event.target.value.length <= 280) {
      setFacebook(event.target.value);
      

      setCharacterCount(event.target.value.length);
    }
  };
  const handleChangeGitHub = (event) => {
    if (event.target.value.length <= 280) {
      setGitHub(event.target.value);
      

      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addCard({
        variables: { cardName, image, field, description, linkedIn, facebook, gitHub },
      });

      // clear form value
      setCardName('');
      setImage('');
      setField('');
      setDescription('');
      setLinkedIn('');
      setFacebook('');
      setGitHub('');
      setCharacterCount(0);
    
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='wholeForm'>
      <p
        className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}
      >
        Character Count: {characterCount}/280
        {/* {error && <span className="ml-2">Something went wrong...</span>} */}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="This is my Card Name: "
          value={cardName}
          className="form-input col-12 col-md-9"
          onChange={handleChangeName}
        ></textarea>
        <textarea
          placeholder="This is my image: "
          value={image}
          className="form-input col-12 col-md-9"
          onChange={handleChangeImage}
        ></textarea>
        <textarea
          placeholder="This is my major: "
          value={field}
          className="form-input col-12 col-md-9"
          onChange={handleChangeField}
        ></textarea>
        <textarea
          placeholder="This is my description: "
          value={description}
          className="form-input col-12 col-md-9"
          onChange={handleChangeDescription}
        ></textarea>
        <textarea
          placeholder="This is my linkedIn: "
          value={linkedIn}
          className="form-input col-12 col-md-9"
          onChange={handleChangeLinkedIn}
        ></textarea>
        <textarea
          placeholder="This is my FB: "
          value={facebook}
          className="form-input col-12 col-md-9"
          onChange={handleChangeFacebook}
        ></textarea>
        <textarea
          placeholder="This is my GH: "
          value={gitHub}
          className="form-input col-12 col-md-9"
          onChange={handleChangeGitHub}
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CardForm;
