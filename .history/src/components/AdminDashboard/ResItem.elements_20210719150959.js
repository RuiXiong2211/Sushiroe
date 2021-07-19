import styled from "styled-components";
import { RiCloseCircleLine } from 'react-icons/ri'

export const ResvContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ResvRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #242424;
  width: 1500px;
`;

export const Resv = styled.div`
  display: flex;
  align-items: center;
  padding-right: 24px;
  min-width: 300px;
`;

export const ResvData = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 100%;
`;

export const ResvId = styled.p`
  width: 250px;
`;

export const ResvName = styled.p`
  width: 250px;
`;

export const ResvEmail = styled.p`
  width: 250px;
`;
export const ResvPhone = styled.p`
  width: 100px;
`;
export const ResvPax = styled.p`
  width: 100px;
`;
export const ResvDate = styled.p`
  width: 100px;
`;

export const ResvTime = styled.p`
  width: 100px;
`;

export const DeleteButton = styled(RiCloseCircleLine)`
  cursor: pointer;
  
  &:hover {
        color: red
    }
`