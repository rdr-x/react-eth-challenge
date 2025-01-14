import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;
const DescriptionWrapper = styled.div`
  align-items: center;
  margin: 1rem;
  width: 100%;
  & a {
    text-decoration: none;
  }
`;

function Profile({ props }) {
  return (
    <Wrapper>
      <h1 className='Profile-title'>
        Profile
      </h1>
      <DescriptionWrapper className='Profile-desc'>
        <p>
          My name is
          {' '}
          {props?.data.name}
          {'. '}
        </p>
        <p>
          {props?.data.Profile}
        </p>
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default Profile;
