import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';

function MajorMenu() {
  const [state, dispatch] = useStoreContext();

  const { majors } = state;

  const { data: majorData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (majorData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        majors: majorData.majors,
      });
    }
  }, [majorData, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentMajor: id,
    });
  };

  return (
    <div>
      <h2>Choose a Major:</h2>
      {majors.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default MajorMenu;
