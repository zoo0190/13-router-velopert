import React from 'react';
import { withRouter } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

const data = {
  ys: {
    name: '호잇',
    description: 'Junior Front End Developer',
  },
  admin: {
    name: '관리자',
    description: 'teacher',
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default withRouter(Profile);
