import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

import { Page } from '../Elements/Elements';

const Info = () => {
  const state = useSelector(state => state.user);
  let history = useHistory();

  useEffect(() => {
    if (!state.redirect) {
      history.push('/');
    }
  },[history, state.redirect])

  console.log('find', state.user)

  return (
    <Page>
      <List>
        <Avatar>
          <a href={state.user.html_url} target="_blank" rel="noreferrer">
            <img src={state.user.avatar_url} alt={state.user.login} />
          </a>
        </Avatar>
        <Content>
          <h2>{state.user.name}</h2>
          <span>
            <svg viewBox="0 0 20 20" width="18" height="18" fill="#345432">
              <path d="M10 2.009c-2.762 0-5 2.229-5 4.99 0 4.774 5 11 5 11s5-6.227 5-11c0-2.76-2.238-4.99-5-4.99zM10 9.76c-1.492 0-2.7-1.209-2.7-2.7s1.208-2.7 2.7-2.7c1.49 0 2.699 1.209 2.699 2.7s-1.209 2.7-2.699 2.7z"></path>
            </svg>
            <span>{state.user.location}</span>
          </span>
        </Content>
      </List>
    </Page>
  )
}

export default Info

const List = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #fefefe;
  padding: 15px;
  border-radius: 2px;
  border: 1px solid var(--primary);

  @media (min-width: 481px) {
    width: 480px;
  }
`;

const Avatar = styled.div`
  flex-basis: 50px;
  max-width: 50px;

  img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 24px;
  }
`;

const Content = styled.div`
  padding-left: 15px;

  h2 {
    font-size: 18px;
    font-weight: 400;
    margin: 0;
  }
`;




