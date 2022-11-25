import { createContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();
export default AuthContext;

export const AuthContextProvider = ({ children }) => {
  const user_id = 1;
  const [initialData, setinitialData] = useState({});
  useEffect(() => {
    var config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/json",
      },
    };
    axios
      .get(`http://127.0.0.1:8000/dummy/${user_id}`, config)
      .then((res) => setinitialData(res.data))
      .catch((err) => console.log(err));
  });

  const handleSubmit = (data) => {
    var config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/json",
      },
      data: data,
    };
    axios
      .put(`http://127.0.0.1:8000/user/update/${user_id}`, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const deleteUser = (user_id) => {
    var config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/json",
      },
    };
    axios
      .delete(`http://127.0.0.1:8000/delete/${user_id}`, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  let context = {
    initialData,
    handleSubmit,
    deleteUser,
  };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
