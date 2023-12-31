"use client";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const router = useRouter();

  const handleClickLogin = () => {
    console.log(username);
    console.log(password);

    fetch(`https://oprec-betis-be.up.railway.app/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((resJson) => {
        if (resJson.statusCode != 200) throw new Error(resJson.message);
        alert("Success login!");
        setToken(resJson.access_token);
      })
      .catch((err) => alert(`An error has occured: ${err}`));
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
    <main className="flex flex-col gap-2 items-center justify-center h-screen">
      <div className="bg-blue-200 p-4 max-w-[400px] w-[80%] h-[400px] flex flex-col justify-around">
        <h1 className="font-bold text-3xl text-center">Login</h1>
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
      {token ? (
        <h1 className="font-bold text-red-500">
          Simpan baik-baik access_token anda
        </h1>
      ) : null}

      <h1 className="max-w-[400px] w-[80%] break-words">
        <span className="font-bold">Token:</span>{" "}
        {token ? token : "<token will appear here>"}
      </h1>
    </main>
  );
}
