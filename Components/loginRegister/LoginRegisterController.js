"use client";

import React, { useState } from "react";
import LoginPage from "./LoginPage";
import { useSelector } from "react-redux";

const LoginRegisterController = () => {
  const isDialog = useSelector(
    (state) => state.authDialog.value.isAuthDialogOpen
  );
  console.log(isDialog);
  return <div className={` `}>{isDialog && <LoginPage />}</div>;
};

export default LoginRegisterController;
