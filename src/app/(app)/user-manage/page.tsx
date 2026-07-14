"use client";

import { api } from "@/services";
import React, { useEffect } from "react";

const App: React.FC = () => {
  const loadData = async () => {
    const res = await api.getUserById({ query: { user_id: "1c0f4f3fedee4449b85197398e4fea35" } });
    console.log(res);
  };

  useEffect(() => {
    loadData();
  }, []);
  return <>user-management</>;
};

export default App;
