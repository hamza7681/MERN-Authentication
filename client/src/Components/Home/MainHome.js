import React from "react";
import styled from "styled-components";
import useAdmin from "../../CustomHooks/useAdmin";

const MainHome = () => {
  const isAdmin = useAdmin();
  return (
    <>
      <Container>
        <UserAdmin>User & Admin</UserAdmin>
        {isAdmin ? <Admin>Admin</Admin> : ""}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const UserAdmin = styled.div`
  width: 50%;
  height: 400px;
  color: green;
`;

const Admin = styled.div`
  width: 50%;
  height: 400px;
  color: red;
`;

export default MainHome;
