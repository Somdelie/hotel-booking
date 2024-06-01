"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import Container from "../Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ModeToggle } from "../theme-toggle";
import { NavMenu } from "./NavMenu";
import SearchHotel from "../ui/SearchHotel";

const NavBar = () => {
  const router = useRouter();
  const { userId } = useAuth();

  return (
    <div className="sticky top-0 z-50 border border-b-primary/10 bg-secondary overflow-hidden">
      <Container>
        <div className="flex justify-between items-center">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image src="/logo.svg" alt="logo" width="30" height="30" />
            <div className="font-bold sm:text-xl">StaySavvy</div>
          </div>
          <div className="hidden sm:block">
            <SearchHotel />
          </div>

          <div className="flex gap-2 sm:gap-3 items-center">
            <div className="flex">
              <ModeToggle />
              {userId ? (
                <div className="ml-2">
                  <NavMenu />
                </div>
              ) : null}
            </div>
            <UserButton afterSignOutUrl="/" />
            {!userId && (
              <>
                <Button
                  onClick={() => router.push("/sign-in")}
                  variant="outline"
                  size="sm"
                >
                  Sign in
                </Button>
                <Button onClick={() => router.push("/sign-up")} size="sm">
                  Sign up
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
