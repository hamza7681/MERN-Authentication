import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../../Reuseables/Button";
import Input from "../../Reuseables/Input";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import auth from "../../axios/axiosInstance";

const EditComp = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.TokenReducer);
  const { users } = useSelector((state) => state.UsersReducer);
  const [checkAdmin, setCheckAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [num, setNum] = useState(0);
  const [editUser, setEditUser] = useState([]);

  useEffect(() => {
    if (users.length !== 0) {
      users.forEach((user) => {
        if (user._id === id) {
          setEditUser(user);
          setCheckAdmin(user.role === 1 ? true : false);
        } else {
          navigate("/profile");
        }
      });
    }
  }, [users, id, navigate]);

  const handleCheck = () => {
    setCheckAdmin(!checkAdmin);
    setNum(num + 1);
  };

  const handleUpdate = async () => {
    try {
      if (num % 2 !== 0) {
        const res = await auth.patch(
          `/user/update_all/${editUser._id}`,
          {
            role: checkAdmin ? 1 : 0,
          },
          {
            headers: { Authorization: token },
          }
        );

        toast.success(res.data.msg);
        setNum(0);
      }
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

  return (
    <>
      <Container>
        <SignUpDiv>
          <Heading>Update User</Heading>
         
            <div>
              <Input
                label="Name"
                type="name"
                defaultValue={editUser.name}
                name="name"
                disabled="true"
              />
            </div>
            <div>
              <Input
                label="Email"
                type="email"
                name="email"
                disabled="true"
                defaultValue={editUser.email}
              />
            </div>
            <div>
              <input
                type="checkbox"
                id="isAdmin"
                checked={checkAdmin}
                onChange={handleCheck}
              />
              <label htmlFor="isAdmin">isAdmin</label>
            </div>

            <div>
              <Button
                onClick={handleUpdate}
                name={
                  loading ? (
                    <>
                      <CircularProgress sx={{ color: "white" }} />
                    </>
                  ) : (
                    "Update"
                  )
                }
                type="submit"
              />
            </div>

          <LinksDiv>
            <Link to="/profile" className="links">
              Back to Profile
            </Link>
          </LinksDiv>
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
  height: 90.4vh;
  @media screen and (max-width: 768px) {
    height: 91.6vh;
  }
`;

const Heading = styled.h3`
  color: blueviolet;
`;

const SignUpDiv = styled.div`
  padding: 15px;
  background-color: white;
  text-align: center;
  border-radius: 10px;
  width: 400px;
  div {
    margin-top: 5px;
  }
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

const LinksDiv = styled.div`
  .links {
    display: block;
    color: blueviolet;
  }
`;

export default EditComp;
