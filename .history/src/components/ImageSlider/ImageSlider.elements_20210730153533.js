import styled from "styled-components";

export const Wrapper = styled.div`
  height: 95vh;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  position: relative;
`;

export const Slide = styled.div`
  height: 100%;
  width: 100%;
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
  transition: 750ms all ease-in-out;

  &::before {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0,0,0,0.15);
  }
`;

export const SlideContent = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 2rem;
  z-index: 100;
`;

export const ChildrenWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Gradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const IndicatorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  bottom: 30px;
  align-items: center;
  justify-content: center;
`;

export const Dot = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: white;
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  margin: 10px;
  transition: 750ms all ease-in-out;
`;
