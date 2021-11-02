import { MotiView } from "moti";
import React from "react";

import { Text, View } from "react-native";
import { Message } from "../../models/message";
import { UserPhoto } from "../UserPhoto";

import { styles } from "./styles";

type MessageItemProps = {
  data: Message;
};

export function MessageItem({ data }: MessageItemProps) {
  return (
    <MotiView
      style={styles.container}
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 700 }}
    >
      <Text style={styles.text}>{data.text}</Text>
      <View style={styles.userInfo}>
        <UserPhoto size="SMALL" imageUri={data.user.avatar_url} />
        <Text style={styles.userName}>{data.user.name}</Text>
      </View>
    </MotiView>
  );
}
