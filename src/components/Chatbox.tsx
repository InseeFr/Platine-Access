export const Chatbot = () => {
  return (
    <>
      <df-messenger
        location="europe-west1"
        project-id="insee-allcxagents"
        agent-id="4c3b1ceb-466c-444d-ac67-c24f44da2f98"
        language-code="fr"
        max-query-length="-1"
        intent="default"
      >
        <df-messenger-chat-bubble
          chat-title-icon="https://entreprises.stat-publique.fr/img/favicon.ico"
          chat-title="Insee - Platine"
          chat-icon="https://contact.eloquant.cloud/insee/file/acd/chatbot/chat.svg"
        ></df-messenger-chat-bubble>
      </df-messenger>
      <style>
        {`
        df-messenger {
          --df-messenger-chat-window-width : 550px;
        }

        @media (max-width:570px){ 
          df-messenger {
            --df-messenger-chat-window-width : calc(100vw - 20px) !important;
          }
        }
      `}
      </style>
    </>
  );
};
