"use client";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState("");
  const router = useRouter();

  const handleClickRegister = () => {
    console.log(username);
    console.log(password);

    fetch(`https://oprec-betis-be.up.railway.app/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        confirmPassword,
      }),
    })
      .then((res) => (res.ok ? res.json() : alert("Failed to register.")))
      .then((resJson) => {
        alert("Success register!");
        setToken(resJson.access_token);
      })
      .catch((err) => console.log(`An error has occured: ${err}.`));
  };

  const handleClickBackToLogin = () => {
    router.push("/login");
  };

  const handleChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <main className="flex flex-col gap-2 items-center justify-center h-screen">
      <div className="bg-blue-200 p-4 max-w-[400px] w-[80%] h-[400px] flex flex-col justify-around">
        <h1 className="font-bold text-3xl text-center">Register</h1>
        <TextField
          variant="filled"
          label="Username"
          value={username}
          onChange={handleChangeUsername}
        />

        <TextField
          variant="filled"
          label="Password"
          type="password"
          value={password}
          onChange={handleChangePassword}
        />

        <TextField
          variant="filled"
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
        />

        <div className="flex gap-2">
          <Button
            variant="contained"
            className="text-black"
            onClick={handleClickRegister}
          >
            Register
          </Button>

          <Button
            variant="text"
            className="text-black"
            onClick={handleClickBackToLogin}
          >
            Back to login
          </Button>
        </div>
      </div>
      <h1>Token: {token ? token : "<token will appear here>"}</h1>
    </main>
  );
}
