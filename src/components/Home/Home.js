import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../redux/actions/infoActions';
import styled from 'styled-components';

import { Page } from '../Elements/Elements';

const Home = () => {
  const state = useSelector(state => state.user);
  const dispatch = useDispatch();
  let history = useHistory();
  const [username, setUsername] = useState('');

  const loading = (
    <div style={{paddingRight: '10px'}}><div className="loader"></div></div>
  );

  useEffect(() => {
    if (state.redirect) {
      history.push('/info')
    }
  },[history, state.redirect])

  const onSubmitHandle = (e) => {
    e.preventDefault();
    dispatch(getUser(username));
  }

  return (
    <Page>
      <Logo>
        <svg width="60" height="59" viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.9975 0.00250033C46.5614 0.00250033 60 13.4411 60 30.005C60 43.2486 51.4068 54.4995 39.4908 58.4849C37.9682 58.7574 37.4206 57.8198 37.4206 57.0398C37.4206 56.0622 37.4606 52.8219 37.4606 48.7966C37.4606 45.9838 36.523 44.1862 35.4305 43.2486C42.111 42.506 49.1416 39.9658 49.1416 28.4424C49.1416 25.1596 47.969 22.5044 46.0563 20.3942C46.3689 19.6116 47.3839 16.5664 45.7438 12.426C43.2436 11.6435 37.5006 15.5113 37.5006 15.5113C35.1179 14.8462 32.5402 14.4962 30 14.4962C27.4598 14.4962 24.8821 14.8487 22.4994 15.5113C22.4994 15.5113 16.7564 11.6435 14.2562 12.426C12.6161 16.5664 13.6311 19.6141 13.9437 20.3942C12.0285 22.5044 10.8584 25.1596 10.8584 28.4424C10.8584 39.9283 17.8515 42.506 24.532 43.2486C23.672 44.0312 22.8919 45.3588 22.6169 47.2714C20.8967 48.054 16.5214 49.3816 13.9062 44.7712C12.266 41.9185 9.29577 41.686 9.29577 41.686C6.36553 41.646 9.10076 43.5211 9.10076 43.5211C11.0534 44.4187 12.421 47.8965 12.421 47.8965C14.1787 53.2494 22.5394 51.4518 22.5394 51.4518C22.5394 53.952 22.5794 56.2947 22.5794 57.0373C22.5794 57.8198 22.0318 58.7574 20.5092 58.4824C8.59322 54.497 0 43.2461 0 30.0025C0 13.4386 13.4386 0 30.0025 0L29.9975 0.00250033ZM11.3634 43.0911C11.441 42.9336 11.3234 42.7386 11.0909 42.6236C10.8559 42.546 10.6609 42.5835 10.5834 42.7011C10.5059 42.8586 10.6234 43.0536 10.8559 43.1686C11.0509 43.2861 11.2859 43.2461 11.3634 43.0911ZM12.5735 44.4212C12.7311 44.3037 12.6911 44.0312 12.496 43.7962C12.301 43.6011 12.0285 43.5236 11.871 43.6786C11.7135 43.7961 11.7535 44.0687 11.9485 44.3037C12.1435 44.4987 12.416 44.5762 12.5735 44.4212ZM13.7461 46.1788C13.9412 46.0213 13.9412 45.7113 13.7461 45.4363C13.5886 45.1638 13.2786 45.0463 13.0811 45.2013C12.8861 45.3188 12.8861 45.6313 13.0811 45.9038C13.2761 46.1763 13.5886 46.2939 13.7461 46.1763V46.1788ZM15.3863 47.819C15.5438 47.6615 15.4638 47.3114 15.2288 47.0764C14.9562 46.8039 14.6037 46.7639 14.4462 46.9589C14.2512 47.1164 14.3287 47.4665 14.6037 47.7015C14.8762 47.974 15.2288 48.014 15.3863 47.819ZM17.614 48.7966C17.6915 48.5615 17.4565 48.289 17.1064 48.1715C16.7939 48.094 16.4414 48.2115 16.3639 48.444C16.2864 48.6766 16.5214 48.9516 16.8714 49.0291C17.1839 49.1466 17.5365 49.0291 17.614 48.7941V48.7966ZM20.0742 48.9916C20.0742 48.7191 19.7616 48.524 19.4091 48.5615C19.0566 48.5615 18.7841 48.7566 18.7841 48.9916C18.7841 49.2641 19.0566 49.4591 19.4491 49.4216C19.8017 49.4216 20.0742 49.2266 20.0742 48.9916ZM22.3394 48.6015C22.2994 48.3665 21.9868 48.2115 21.6368 48.249C21.2843 48.3265 21.0518 48.5615 21.0893 48.8341C21.1293 49.0691 21.4418 49.2241 21.7918 49.1466C22.1418 49.0691 22.3769 48.8341 22.3394 48.599V48.6015Z" fill="#649D9C"/>
        </svg>
      </Logo>
      <Card>
        <form onSubmit={onSubmitHandle}>
          <Group>
            <input type="text" placeholder="github user name" value={username} onChange={(e)=> setUsername(e.target.value)} />
            <button type="submit" className="btn">
              {state.loading ? loading : null}
              <div>Submit</div>
            </button>
          </Group>
        </form>
      </Card>
    </Page>
  )
}

export default Home;

const Card = styled.div`
  width: 100%;
  padding: 30px 20px;
  background-color: #dbe1ec;
  border-radius: 3px;

  @media (min-width: 481px) {
    width: 460px;
  }
`;

const Group = styled.div`
  display: flex;
  align-items: center;

  input {
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ABC5C6;
    flex-grow: 1;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: #ABC5C6;
    background-color: #ABC5C6;
    min-width: 107px;
  }
`;


const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 25px;
`;


