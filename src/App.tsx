import { generateClient } from "aws-amplify/data";
import { AIConversationProvider } from '@aws-amplify/ui-react-ai';
import { createAIHooks, AIConversation } from '@aws-amplify/ui-react-ai';
import type { Schema } from "../amplify/data/resource";

const client = generateClient<Schema>({ authMode: 'userPool' });
const { useAIConversation } = createAIHooks(client);

export default function Page() {
  const [
    {
      data: { messages },
    },
    sendMessage,
  ] = useAIConversation('chat');
  // 'chat' here should be the key in your schema

  return (
    <AIConversationProvider>
      <AIConversation
        messages={messages}
        handleSendMessage={sendMessage}
      />
    </AIConversationProvider>
    );
}