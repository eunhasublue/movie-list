import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const [userDetail, setUserDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id)
      .then((res) => {
        setUserDetail(res.data);
        setLoading(false);
      });
  }, []);

  const userDetailInfo = loading ? (
    <Spinner />
  ) : (
    <div>
      <div>{userDetail.name}</div>
      <div>{userDetail.email}</div>
      <div>{userDetail.phone}</div>
    </div>
  );

  return (
    <>
      <h1>User Infomaiton</h1>
      {userDetailInfo}
    </>
  );
};

export default UserDetail;
