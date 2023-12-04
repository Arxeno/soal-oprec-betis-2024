"use client";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleClickLogin = () => {
    console.log(username);
    console.log(password);
  };

  const handleClickOrRegister = () => {
    router.push("/register");
  };

  const handleChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="bg-blue-200 p-4 max-w-[400px] w-[80%] h-[400px] flex flex-col justify-around">
        <h1 className="font-bold text-3xl text-center">Login</h1>
        <TextField
          variant="filled"
          label="Username"
          onChange={handleChangeUsername}
        />

        <TextField
          variant="filled"
          label="Password"
          type="password"
          onChange={handleChangePassword}
        />

        <div className="flex gap-2">
          <Button
            variant="contained"
            className="text-black"
            onClick={handleClickLogin}
          >
            Login
          </Button>

          <Button
            variant="text"
            className="text-black"
            onClick={handleClickOrRegister}
          >
            Or Register
          </Button>
        </div>
      </div>
    </main>
  );
}
