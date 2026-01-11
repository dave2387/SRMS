import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const roles = [
  { key: "admin", email: "admin@gmail.com", password: "123456" },
  { key: "hod", email: "hod@gmail.com", password: "123456" },
  { key: "technician", email: "tech@gmail.com", password: "123456" },
  { key: "requestor", email: "req@gmail.com", password: "123456" },
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = (email, password, roleKey) => {
    const roleData = roles.find((r) => r.key === roleKey);

    if (
      roleData &&
      roleData.email === email &&
      roleData.password === password
    ) {
      const userData = { email, role: roleKey };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return { success: true };
    }

    return { success: false };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export { AuthContext };
