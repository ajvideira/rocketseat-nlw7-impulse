import React from "react";

import { Text, TouchableOpacity, View } from "react-native";

import LogoImg from "../../assets/logo.svg";
import { useAuth } from "../../contexts/auth";
import { UserPhoto } from "../UserPhoto";

import { styles } from "./styles";

export function Header() {
  const { user, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <LogoImg />

      <View style={styles.userPhotoLogout}>
        {!!user && (
          <TouchableOpacity onPressOut={signOut}>
            <Text style={styles.logoutText}>Sair</Text>
          </TouchableOpacity>
        )}

        <UserPhoto imageUri={user?.avatar_url} />
      </View>
    </View>
  );
}
