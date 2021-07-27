import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Background = styled.div`
  width: 100%;
  height: 90vh;
  background: rgba(0, 0, 0, 0.8);
  position: flex;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  /* width: 800px;
  height: 80vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  padding: 0 20px;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  //position: flex;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
