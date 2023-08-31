import React, { useEffect, useState } from 'react';
import FriendsList from './FriendsList';

function FriendsCard() {
  const [friends, setFriends] = useState([]);

  return (
    <div className='card-tabs_tab-content-item'>
      <div className='friends_settings-item'>
        <h3 className='friends-list_title'>Friends list</h3>
        {friends.length ? (
          <FriendsList friends={friends} />
        ) : (
          <p className='friends_friends-list_disclaimer'>No friends. Start inviting!</p>
        )}
      </div>
      <div className='friends_friends-list_invite-section'>
        <button className='friends_friends-list_invite-section_invite-button'>Add friend</button>
      </div>
    </div>
  );
}

export default FriendsCard;

{
  /* <template
        v-if="
          getFriendRequestsGetter &&
          getFriendRequestsGetter.requestsForMe &&
          getFriendRequestsGetter.requestsFromFriends &&
          (getFriendRequestsGetter.requestsForMe.length || getFriendRequestsGetter.requestsFromFriends.length)
        "
      >
        <hr />
        <h3 className="requests-list_title">Pending requests</h3>
        <RequestsForMe
          v-if="getFriendRequestsGetter.requestsForMe.length"
          :deny-request="denyFriendRequestAndRefresh"
        />
        <RequestsFromFriends
          v-if="getFriendRequestsGetter.requestsFromFriends.length"
          :deny-request="denyFriendRequestAndRefresh"
          :accept-request="acceptFriendRequestAndRefresh"
        />
      </template> */
}
