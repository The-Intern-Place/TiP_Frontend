import React from "react";

export interface jobFaqs {
  question: string;
  answer: string;
}
const useGetStartTemplateChunk = () => {
  const jobSearchFAQs: jobFaqs[] = [
    {
      question: "How do I create an effective resume that stands out?",
      answer:
        "To create an effective resume, focus on clear formatting, use strong action verbs, and tailor it to each job description by highlighting relevant skills and achievements. Quantify accomplishments with numbers when possible (e.g., 'increased sales by 20%') and keep it concise, ideally one page for most positions.",
    },
    {
      question:
        "What should I include in my cover letter, and how long should it be?",
      answer:
        "Your cover letter should briefly introduce yourself, explain why you're interested in the position, and highlight a few key skills or experiences that make you a great fit. Keep it to one page, and personalize it to the job and company by mentioning specific details about the role.",
    },
    {
      question:
        "How can I search for jobs that match my skills and experience?",
      answer:
        "Use job search platforms like LinkedIn, Indeed, or specialized job boards in your industry. Refine your search using keywords that match your skills, location, and experience level. Networking and reaching out to connections in your field can also uncover hidden job opportunities.",
    },
    {
      question: "What are the best ways to prepare for a job interview?",
      answer:
        "Research the company and review the job description thoroughly. Prepare answers to common interview questions and practice articulating your achievements. Have questions ready for the interviewer, and consider conducting mock interviews with a friend to build confidence.",
    },
    {
      question: "How can I negotiate my salary after receiving a job offer?",
      answer:
        "Research salary benchmarks for the role in your area using sites like Glassdoor or PayScale. Politely express your appreciation for the offer, then present a reasonable counteroffer based on your findings. Emphasize your skills and the value you bring, and be prepared for a constructive discussion.",
    },
    {
      question: "What should I do if I don’t hear back after an interview?",
      answer:
        "Send a polite follow-up email to thank the interviewer and inquire about the status of your application. Wait at least a week after the interview before following up. If you still don’t hear back, it may be best to move on and focus on other opportunities.",
    },
    {
      question: "How do I handle gaps in my employment history on my resume?",
      answer:
        "Address employment gaps by briefly explaining them in your cover letter or resume. If applicable, mention any skills you developed during that time, such as volunteer work or freelance projects. Focus on the skills and experiences that make you a strong candidate for the job.",
    },
    {
      question:
        "What are the most in-demand skills employers look for in my industry?",
      answer:
        "In-demand skills vary by industry but often include technical skills relevant to the field, problem-solving abilities, communication skills, adaptability, and teamwork. Research job listings in your field to identify the skills most frequently mentioned and consider ways to develop them if needed.",
    },
    {
      question: "How can I build a strong LinkedIn profile for my job search?",
      answer:
        "Optimize your LinkedIn profile by using a professional photo, writing a compelling headline, and crafting a clear summary that highlights your skills and experience. Add accomplishments, certifications, and keywords relevant to your industry. Connect with others in your field to expand your network.",
    },
    {
      question:
        "What are some effective networking strategies for finding job opportunities?",
      answer:
        "Attend industry events, join professional organizations, and use social media platforms like LinkedIn to connect with professionals in your field. Reach out to former colleagues or alumni from your school, and consider informational interviews to learn more about companies or roles of interest.",
    },
  ];

  const subNav = [
    {
      button: "Getting Started",
      url: "/getting-started",
    },
    {
      button: "My Profile",
      url: "/my-profile",
    },
    {
      button: "Application process",
      url: "/application-process",
    },
    {
      button: "Job Search",
      url: "/job-search",
    },
    {
      button: "Job Alerts",
      url: "/job-alerts",
    },
  ];

  return {
    jobSearchFAQs,
    subNav,
  };
};

export default useGetStartTemplateChunk;
