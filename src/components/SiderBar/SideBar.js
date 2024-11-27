import React from 'react';
import styled from 'styled-components';

// Styled components cho Sidebar và các phần tử bên trong
const SidebarContainer = styled.div`
  position: fixed;
  top: 1;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: black;
  color: white;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.1);
`;

const SidebarItem = styled.a`
  padding: 15px 20px;
  text-decoration: none;
  color: white;
  font-size: 16px;
  display: block;
  transition: background-color 0.3s ease;
  text-align: center  

  &:hover {
    background-color: #34495e;
  }
`;

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarItem href="#home">Home</SidebarItem>
            <SidebarItem href="#about">Document</SidebarItem>
            <SidebarItem href="#services">History</SidebarItem>
            <SidebarItem href="#contact">Contact</SidebarItem>
        </SidebarContainer>
    );
};

export default Sidebar;
