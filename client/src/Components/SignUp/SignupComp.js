import React from "react";
import styled from "styled-components";
import Input from "../../Reuseables/Input";

const SignupComp = () => {
  return (
    <>
      <Container>
        <SignUpDiv>
          <Heading>SignUp</Heading>
          <div>
            <Input label='Enter your name' type='text'/>
          </div>
          <div>
            <Input label='Enter your email' type='email' />
          </div>
          <div>
            <Input label='Enter your password' type='password' />
          </div>
        </SignUpDiv>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blueviolet;
  height: 100vh;
`;

const Heading = styled.h3`
  color: blueviolet;
`;

const SignUpDiv = styled.div`
  padding: 15px;
  background-color: white;
  text-align: center;
  border-radius: 10px;
`;

export default SignupComp;
