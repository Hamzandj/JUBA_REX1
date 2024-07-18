import { User, UserProfile } from "@/types";
import { Dispatch, createContext } from "react";

export type JubarexContextType = {
  user: User | undefined;
  setUser: Dispatch<User>;
  userProfile: UserProfile | undefined;
  setUserProfile: Dispatch<UserProfile>;
};

export const JubarexContext = createContext<JubarexContextType | null>(null);
