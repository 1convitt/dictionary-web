import React from 'react';
import styled from 'styled-components';

// Styled Components
export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px 20px;
  background-color: #111116;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  
`;

export const HeaderLeft = styled.div`
  flex: 1;
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: bold;

`;

export const HeaderCenter = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
`;

export const SearchInput = styled.input`
  width: 60%;
  padding: 8px 15px;
  border-radius: 25px;
  border: 1px solid #ddd;
  font-size: 16px;
  background-color: transparent;
`;

export const HeaderRight = styled.div`
  display: flex;
  gap: 15px;
`;

export const Icon = styled.div`
  font-size: 20px;
  cursor: pointer;
  color: #FFF;

  &:hover {
    color: #007BFF;
  }
`;