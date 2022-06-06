import React from "react";
import styled from "styled-components";

const Admin = () => {
  return (
    <>
      <Container>
        <h2>Admin Can access this route...!!!</h2>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 91.5vh;
  background-color: blueviolet;
`;

export default Admin;
