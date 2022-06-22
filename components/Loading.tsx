import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	${({ theme }) => theme.mixins.flexBox('row', 'center', 'center')}
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1;
	background: rgba(0,0,0,0.2);
	transition: 0.5s;
  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 200;
    & > svg {
    width: 54px;
    height: 54px;
    animation: loading-spin 3s infinite;
    & > circle {
      stroke: #bbb;
      stroke-width: 4;
      stroke-dasharray: 157, 157;
      stroke-dashoffset: 0;
      fill: transparent;
      animation: loading-circle-ani 1s infinite;
    }
  }
  }
  @keyframes loading-spin {
    100% { transform: rotate(360deg); }
  }
  @keyframes loading-circle-ani {
    0% { stroke-dashoffset: 157; }
    75% { stroke-dashoffset: -147; }
    100% { stroke-dashoffset: -157; }
  }
`

const Loading = () => {
  return (
    <Wrapper>
      <div>
        <svg>
          <circle cx="50%" cy="50%" r="25"></circle>
        </svg>
      </div>
    </Wrapper>
  )
}

export default Loading