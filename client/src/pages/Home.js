import React from 'react';
import CardList from '../components/CardList';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';

import { QUERY_CARDS, QUERY_ME_BASIC } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_CARDS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const cards = data?.cards || [];


const loggedIn = Auth.loggedIn();
// const loggedOut = Auth.logout();


  return (
    <main>
        <div className="col-12 mb-3">
            This is the Tap Car Home page, we are still working on this, don't design until functionality is done, thanks!
        </div>
        <div className="flex-row justify-space-between">
            {loggedIn && (
            <div className="col-12 mb-3">
                This is the Tap Car Home page, we are still working on this, don't design until functionality is done, thanks!
            </div>
            )}
            <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <CardList
                cards={cards}
                title="Some Feed for Card(s)..."
                />
            )}
            </div>
            {loggedIn ? (
            <div className="col-12 col-lg-3 mb-3">
                {/* <FriendList
                username={userData.me.username}
                friendCount={userData.me.friendCount}
                friends={userData.me.friends}
                /> */}
            </div>
            ) : null}
        </div>
    </main>
  );
};

export default Home;
