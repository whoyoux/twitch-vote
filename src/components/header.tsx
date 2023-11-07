"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import ThemeSwitcher from "./theme-switcher";
import { Button } from "./ui/button";
import { Session, User } from "@prisma/client";

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
  const session = useSession();

  const signInHandler = async () => {
    try {
      await signIn("twitch");
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "loading") {
    return (
      <Button size="lg" disabled>
        Loading
      </Button>
    );
  }

  return (
    <div>
      {session.status === "authenticated" ? (
        <Button size="lg" onClick={() => signOut()}>
          Log out
        </Button>
      ) : (
        <Button size="lg" onClick={signInHandler}>
          Login via Twitch
        </Button>
      )}
    </div>
  );
};

export default Header;
