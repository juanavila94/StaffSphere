import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { TbMessageChatbot } from "react-icons/tb";
import { GrFormClose } from "react-icons/gr";

const theme = {
  background: "#f5f8fb",
  headerBgColor: "#38BDF8",
  headerFontColor: "#fff",
  headerFontSize: "20px",
  botBubbleColor: "#38BDF8",
  botFontColor: "#fff",
  userBubbleColor: "#38BDF8",
  userFontColor: "#fff",
};

function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-0 right-0 mb-8 mr-8 z-30">
      {isOpen ? (
        <div className="bg-white shadow-lg rounded-lg p-4">
          <div className="fixed bottom-0 right-0 mb-4 mr-4">
            <ThemeProvider theme={theme}>
              <ChatBot
                steps={[
                  {
                    id: "hello-world",
                    message: "Hello, welcome! What's your name?",
                    trigger: "2",
                  },
                  {
                    id: "2",
                    user: true,
                    trigger: "3",
                  },
                  {
                    id: "3",
                    message: "Hi {previousValue}, nice to meet you!",
                    trigger: "4",
                  },
                  {
                    id: "4",
                    message: "Do you need anything from me?",
                    trigger: "5",
                  },
                  {
                    id: "5",
                    options: [
                      { value: "y", label: "Yes", trigger: "6A" },
                      { value: "n", label: "No", trigger: "6B" },
                    ],
                  },
                  {
                    id: "6A",
                    message: "Great! Tell me what are you looking for...",
                    trigger: "seleccion",
                  },
                  {
                    id: "6B",
                    message:
                      "Im sorry if I cannot be of help to you. See you later",
                    end: true,
                  },
                  {
                    id: "seleccion",
                    options: [
                      {
                        value: "f",
                        label: "StaffSphere Company",
                        trigger: "7A",
                      },
                      {
                        value: "b",
                        label: "StaffSphere Service",
                        trigger: "7B",
                      },
                    ],
                  },
                  {
                    id: "7A",
                    message:
                      "I see you want StaffShpere Company Info! What would you like to know more about?",
                    trigger: "company",
                  },
                  {
                    id: "7B",
                    message:
                      "I see you want StaffShpere Service Info! What would you like to know more about?",
                    trigger: "service",
                  },
                  {
                    id: "company",
                    options: [
                      { value: "a", label: "About", trigger: "9A" },
                      { value: "m", label: "Members", trigger: "9B" },
                    ],
                  },
                  {
                    id: "service",
                    options: [
                      { value: "p", label: "Payment", trigger: "10A" },
                      { value: "h", label: "How it works", trigger: "10B" },
                    ],
                  },
                  {
                    id: "9A",
                    message:
                      "StaffSphere was founded in 2023 in order to provide a complete service so that all companies can keep track of themselves and all their employees.",
                    trigger: "preguntaVuelta",
                  },
                  {
                    id: "9B",
                    message:
                      "The members of the company are: Carlos Martinez, Didier Brange, Estiven Moica, Francisco Toti, Juan Avila, Pablo Cogno, Sofia Reynal",
                    trigger: "preguntaVuelta",
                  },
                  {
                    id: "10A",
                    message:
                      "The service costs 2.000 USD and is paid only once upon purchase.",
                    trigger: "preguntaVuelta",
                  },
                  {
                    id: "10B",
                    message:
                      "In order to use the service provided by StaffSphere, you first have to register your company and then create a superAdmin to create all the rest of your company's staff and be able to use all the functionalities",
                    trigger: "preguntaVuelta",
                  },
                  {
                    id: "preguntaVuelta",
                    message: "Do you need to know anything else?",
                    trigger: "respuestaVuelta",
                  },
                  {
                    id: "respuestaVuelta",
                    options: [
                      { value: "y", label: "Yes", trigger: "6A" },
                      { value: "n", label: "No", trigger: "6B" },
                    ],
                  },
                ]}
              />
            </ThemeProvider>
          </div>
          <button
            className="absolute bottom-[460px] -right-5 mt-4 mr-4 hover:bg-sky-300 text-white font-bold text-3xl"
            onClick={toggleChat}
          >
            <GrFormClose />
          </button>
        </div>
      ) : (
        <button
          className="bg-sky-400 hover:bg-sky-300 text-white font-bold py-3 px-3 text-3xl rounded-full"
          onClick={toggleChat}
        >
          <TbMessageChatbot />
        </button>
      )}
    </div>
  );
}

export default ChatButton;
