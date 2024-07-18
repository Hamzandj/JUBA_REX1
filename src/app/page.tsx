"use client";

import { useContext, useState } from "react";

import Orbits from "@/components/shared/orbits";
import { Button } from "@/components/ui/button";

import MotionSection from "@/components/shared/motion-section";
import { JubarexContext, JubarexContextType } from "./context";

const Home = () => {
  const {
    user,
    setUser,
    userProfile,
    setUserProfile,
    logout,
    refreshUserFromToken,
  } = useContext(JubarexContext) as JubarexContextType;

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = async () => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const res: { access_token: string } = await response.json();

    //save token to session
    localStorage.setItem("accessToken", res.access_token);

    await refreshUserFromToken();
  };

  return (
    <section className="relative">
      <MotionSection
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="z-10 relative container flex flex-col justify-center items-center text-center lg:text-start lg:items-start h-[calc(100vh-60px)] lg:h-screen"
      >
        {/* Hero Conetent  */}
        <article className="mb-8 flex flex-col gap-y-2 lg:gap-y-4">
          <h3 className="font-jetbrains font-medium text-base lg:text-lg">
            protect Your Ancient Treasures with juba Rex.
          </h3>
          <h1 className="font-bold text-3xl lg:text-5xl">
            Safeguarding & Digitalizing{" "}
          </h1>
          <h1 className="font-bold text-3xl lg:text-5xl">
            <span className="text-[#FFB800]">Ancient Treasures</span>
          </h1>
        </article>

        {/* Hero Intro */}
        <p className="text-sm lg:text-base lg:mr-[40%]">
          protect Your Ancient Treasures with juba Rex. our Services Not Only
          Secure Physical Pieces But Also Digitally Preserve Theme For
          Generation To Come.
        </p>

        {/* Buttons  */}

        {user?.email ? (
          <div className="flex justify-center items-center gap-x-4 mt-8 lg:mt-12">
            <h2>
              Hello {user.firstname} {user.lastname}
            </h2>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-x-4 mt-8 lg:mt-12">
            <div>
              Email :{" "}
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              Password :{" "}
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <Button onClick={login} size="lg">
              <p className="font-semibold text-base lg:text-lg">Login</p>
            </Button>
          </div>
        )}
      </MotionSection>

      <Orbits mini={false} />
    </section>
  );
};

export default Home;
