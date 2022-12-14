import React, { Fragment,useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from '../../context/github/GithubContext'

const Users=()=>{

  const githubContext = useContext(GithubContext)

  const {loading,users} =githubContext;

    if(loading)
    return (<Fragment><Spinner/></Fragment>)
    else if(!loading)
    return (
      <div style={userStyle}>
        {users.map((user) => {
          return (
            <UserItem key={user.id} user={user} />
          );
        })}
      </div>
    );
}


const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
