import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Background = styled.div`
  width: 100%;
  height: 90vh;
  //background: rgba(0, 0, 0, 0.8);
  position: flex;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  padding: 0 20px;
  overflow: auto;

  @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const CloseModalButton = styled(MdClose)`
  top: 0;
  right: 6px;
  cursor: pointer;
  position: absolute;
  font-size: 2rem;
  padding: 0;
  z-index: 10;
  color: pink;
`;
