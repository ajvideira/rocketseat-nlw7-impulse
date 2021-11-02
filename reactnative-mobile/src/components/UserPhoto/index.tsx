import { LinearGradient } from "expo-linear-gradient";
import React from "react";

import { Image, View } from "react-native";

import AvatarImg from "../../assets/avatar.png";
import { COLORS } from "../../theme";

import { styles } from "./styles";

const SIZES = {
  SMALL: {
    containerSize: 32,
    avatarSize: 28,
  },
  NORMAL: {
    containerSize: 48,
    avatarSize: 42,
  },
};

const DEFAULT_AVATAR = Image.resolveAssetSource(AvatarImg).uri;

type UserPhotoProps = {
  imageUri?: string;
  size?: "SMALL" | "NORMAL";
};

export function UserPhoto({
  imageUri = DEFAULT_AVATAR,
  size = "NORMAL",
}: UserPhotoProps) {
  const { avatarSize, containerSize } = SIZES[size];

  return (
    <LinearGradient
      colors={[COLORS.PINK, COLORS.YELLOW]}
      style={[
        styles.container,
        { width: containerSize, height: containerSize },
      ]}
      start={[0, 1]}
      end={[1, 1]}
    >
      <Image
        source={{ uri: imageUri }}
        style={[styles.avatar, { width: avatarSize, height: avatarSize }]}
      />
    </LinearGradient>
  );
}
