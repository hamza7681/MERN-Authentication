import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dispatchGetUser, fetchUser } from "../../Redux/Actions/AuthActions";

const ProfileComp = () => {
  const { token } = useSelector((state) => state.TokenReducer);
  const { user } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      const getUser = async () => {
        return await fetchUser(token).then((res) => {
          dispatch(dispatchGetUser(res));
        });
      };
      getUser();
    }
  }, [token, dispatch]);
  return (
    <>
      <h1>{user.name}</h1>
    </>
  );
};

export default ProfileComp;
