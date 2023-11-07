"use client";

import { signIn } from "next-auth/react";
import ThemeSwitcher from "./theme-switcher";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="w-full max-w-full flex items-center justify-between py-10 border-b">
      <h1 className="hidden sm:block scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        twitch voter
      </h1>
      <h1 className="sm:hidden scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        logo
      </h1>

      <div className="flex items-center gap-4">
        <Account />

        <ThemeSwitcher />
      </div>
    </header>
  );
};

const Account = () => {
  const signInHandler = async () => {
    try {
      await signIn();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Button size="lg" onClick={signInHandler}>
      Login via Twitch
    </Button>
  );
};

export default Header;
