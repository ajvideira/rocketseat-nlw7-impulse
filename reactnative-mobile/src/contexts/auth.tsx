import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "../models/user";
import * as AuthSession from "expo-auth-session";
import { api } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  GITHUB_CLIENT_ID,
  GITHUB_SCOPE,
  TOKEN_STORAGE,
  USER_STORAGE,
  TEST_ENV,
} from "@env";

type AuthContextData = {
  user: User | null;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  isSigningIn: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

type AuthSessionResponse = AuthSession.AuthSessionResult & {
  params: {
    code?: string;
    error?: string;
  };
};

type AuthorizationApiResponse = {
  data: {
    token: string;
    user: User;
  };
};

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isSigningIn, setIsSigningIn] = useState(true);

  async function signIn() {
    try {
      setIsSigningIn(true);
      const authUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=${GITHUB_SCOPE}`;
      const authSessionResponse = (await AuthSession.startAsync({
        authUrl,
      })) as AuthSessionResponse;

      if (
        authSessionResponse.type === "success" &&
        authSessionResponse.params.error !== "access_denied"
      ) {
        const { data: authApiResponse } = await api.post<
          { code: string },
          AuthorizationApiResponse
        >("/authenticate", {
          code: authSessionResponse.params.code,
        });

        storeApiData(authApiResponse.token, authApiResponse.user);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSigningIn(false);
    }
  }

  async function signOut() {
    await AsyncStorage.removeItem(USER_STORAGE);
    await AsyncStorage.removeItem(TOKEN_STORAGE);
    api.defaults.headers.common["Authorization"] = "";
    setUser(null);
  }

  async function storeApiData(token: string, user: User) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
    await AsyncStorage.setItem(TOKEN_STORAGE, token);
    setUser(user);
  }

  useEffect(() => {
    (async () => {
      const user = await AsyncStorage.getItem(USER_STORAGE);
      const token = await AsyncStorage.getItem(TOKEN_STORAGE);

      if (user && token) {
        await storeApiData(token, JSON.parse(user));
      }
      setIsSigningIn(false);
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isSigningIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
