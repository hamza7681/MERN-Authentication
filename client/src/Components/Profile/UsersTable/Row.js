import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../axios/axiosInstance";
import { useSelector } from "react-redux";

function Row(props) {
  const { row } = props;
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.TokenReducer);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row">
          {row._id}
        </TableCell>
        <TableCell align="left">{row.name}</TableCell>
        <TableCell align="left">{row.email}</TableCell>
        <TableCell align="left">{row.role === 1 ? "Yes" : "No"}</TableCell>

        <TableCell align="left">
          <EditBtn onClick={() => navigate(`/edit-user/${row._id}`)}>
            Edit
          </EditBtn>
          {row.role === 1 ? (
            ""
          ) : (
            <>
              <DelBtn
                onClick={async () => {
                  try {
                    const res = await auth.delete(
                      `/user/delete-profile/${row._id}`,
                      { headers: { Authorization: token } }
                    );
                    toast.success(res.data.msg);
                  } catch (e) {
                    toast.error(e.response.data.msg);
                  }
                }}
              >
                Delete
              </DelBtn>
            </>
          )}
        </TableCell>
      </TableRow>
      <TableRow></TableRow>
    </React.Fragment>
  );
}

const EditBtn = styled.button`
  background-color: green;
  color: white;
  text-transform: uppercase;
  padding: 4px 8px 4px 8px;
  border: none;
  border-radius: 3px;
  margin-right: 6px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    margin-right: 0;
  }
`;

const DelBtn = styled.button`
  background-color: red;
  color: white;
  text-transform: uppercase;
  padding: 4px 8px 4px 8px;
  border: none;
  border-radius: 3px;
`;

export default Row;
