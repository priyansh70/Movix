import { useState, useEffect } from "react";
import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";

const clientId = "7208c868-3b7f-44b8-86b2-f0812d09c189";

const configuration = {
  color: "#04152D",
  botName: "Movix",
  layout: {
    width: "100%",
    height: "100%",
    side: "right",
  },
  enableReset: true,
  showPoweredBy: false,
};

export default function Chatbot() {
  const client = getClient({ clientId });
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleWebchat = () => setIsWebchatOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // sm breakpoint
    };
    handleResize(); // check on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WebchatProvider
      client={client}
      configuration={configuration}
    >
      {/* Floating Chat Button */}
      <Fab
        onClick={toggleWebchat}
        id="chatbot-button"
      />

      {/* Responsive Chat Window */}
      {isWebchatOpen && (
        <div
          className="chat"
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: isMobile ? "280px" : "400px",
            height: isMobile ? "350px" : "500px",
            zIndex: 9998,
            borderRadius: isMobile ? "8px" : "16px",
            overflow: "hidden",
            boxShadow: isMobile
              ? "0 4px 16px  rgba(0,0,0,0.25)"
              : "0 8px 30px rgba(0,0,0,0.25)",
          }}
        >
          <Webchat />
        </div>
      )}
    </WebchatProvider>
  );
}
