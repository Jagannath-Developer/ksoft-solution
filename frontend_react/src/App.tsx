import React, { useState } from "react";
import Auth from "./containers/auth";
import { Button } from "./components";

function App() {
  return (
    <div>
      <div className="flex justify-center gap-5 mt-5">
        <Button>SignIn</Button>
        <Button>SignUp</Button>
      </div>
      <Auth />
    </div>
  );
}

export default App;
