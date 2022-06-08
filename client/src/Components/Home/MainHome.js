import React from "react";
import styled from "styled-components";
import useAdmin from "../../CustomHooks/useAdmin";

const MainHome = () => {
  const { isSuperAdmin, isAdmin } = useAdmin();

  return (
    <>
      <Container>
        <UserAdmin>User</UserAdmin>
        {isSuperAdmin ? <Admin>Admin</Admin> : ""}
        {isSuperAdmin || isAdmin ? <Moderator>Moderator</Moderator> : ""}
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
width: 33%;
  height: 400px;
  color: green;
`;

const Admin = styled.div`
  height: 400px;
  color: red;
width: 33%;

`;

const Moderator = styled.div`
  height: 400px;
  color: brown;
width: 34%;

`;

export default MainHome;
