import React from "react";
import { AIConversation } from "@aws-amplify/ui-react-ai";
import { useAIConversation } from "./client";

export const App = () => {
  const [
    {
      data: { messages },
      isLoading,
    },
    handleSendMessage,
  ] = useAIConversation("chat");

  return (
    <AIConversation
      messages={messages}
      isLoading={isLoading}
      handleSendMessage={handleSendMessage}
    />
  );
};
