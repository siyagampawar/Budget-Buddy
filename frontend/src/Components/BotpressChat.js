import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BotpressChat = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (location.pathname !== '/home' || initialized) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;

    script.onload = () => {
        window.botpressWebChat.init({
            "composerPlaceholder": "Chat with bot",
            "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
            "botId": "efc0fc2d-02e1-4331-aa33-0d129a13a01a",
            "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
            "messagingUrl": "https://messaging.botpress.cloud",
            "clientId": "efc0fc2d-02e1-4331-aa33-0d129a13a01a",
            "lazySocket": true,
            "themeName": "prism",
            "frontendVersion": "v1",
            "showPoweredBy": true,
            "theme": "prism",
            "themeColor": "#2563eb"
        });

      if (window.botpressWebChat.store && window.botpressWebChat.store.dispatch) {
        window.botpressWebChat.store.dispatch({
          type: 'WebChat/reset',
        });
      }

      setInitialized(true);
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
      document.head.removeChild(script);
    };
  }, [location.pathname, initialized]);

  const webChatStyle = {
    height: '300px !important',
  };

  return location.pathname === '/home' ? <div id="webchat" style={webChatStyle} /> : null;
};

export default BotpressChat;