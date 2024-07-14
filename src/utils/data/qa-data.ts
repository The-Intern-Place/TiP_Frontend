interface QAItem {
  id: number;
  question: string;
  answer: string;
}

export const qaData: QAItem[] = [
  {
    id: 1,
    question: "How can I get started?",
    answer:
      "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup.",
  },
  {
    id: 2,
    question: "What is the pricing structure?",
    answer:
      "Our pricing structure is flexible. We offer both free and paid plans. You can choose the one that suits your needs and budget.",
  },
  {
    id: 3,
    question: "What kind of support do you provide?",
    answer:
      "We offer comprehensive customer support. You can reach out to our support team through various channels, including email, chat, and a knowledge base.",
  },
  {
    id: 4,
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users.",
  },
];
