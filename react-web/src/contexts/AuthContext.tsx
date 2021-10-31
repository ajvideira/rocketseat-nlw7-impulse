import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

type User = {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
};

type AuthResponse = {
  token: string;
  user: User;
};

type AuthContextData = {
  user: User | null;
  signInUrl: string;
  signOut: () => void;
};

const AuthContext = createContext({} as AuthContextData);

type AuthContextProviderProps = {
  children: ReactNode;
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const signInUrl = `https://github.com/login/oauth/authorize?scopoe=user&client_id=${
    import.meta.env.VITE_GITHUB_CLIENT_ID
  }`;

  function signOut() {
    localStorage.removeItem("@dowhile:token");
    setUser(null);
  }

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("@dowhile:token");
      if (!token) return;

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const { data } = await api.get<User>("/user/profile");
      setUser(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (window.location.search.includes("code")) {
        const code = new URLSearchParams(window.location.search).get("code");
        window.history.pushState({}, "", window.location.origin);
        if (code) {
          const { data } = await api.post<AuthResponse>("/authenticate", {
            code,
          });
          localStorage.setItem("@dowhile:token", data.token);
          setUser(data.user);
        }
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signInUrl, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const authContext = useContext(AuthContext);
  return authContext;
}
