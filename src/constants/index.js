import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitIcon6,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Demo",
    url: "#demo",
  },
  {
    id: "1",
    title: "Features",
    url: "#features",
  },
  {
    id: "2",
    title: "Pricing",
    url: "#pricing",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Upskiller",
    description: "For Working Professionals to tally with modern tech stack ",
    price: "20k",
    payment: "https://pages.razorpay.com/dcrypt-upskiller",
    features: [
      "Specialized Learning modules",
      "Progress and achievement tracking",
      "Access learning resources to keep up with the fast-paced, ever-evolving tech world.",
      "Improve your skills and knowledge to maintain a competitive edge.",
      "Equip yourself with the latest skills and knowledge to secure your place in the industry.",
    ],
  },
  {
    id: "1",
    title: "GEEK (Students)",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "5k",
    payment: "https://pages.razorpay.com/dcrypt-geeks",
    features: [
      "Access to specialized learning content in tech domains such as Software Development, AI, Data Science, and more.",
      "Instant, around-the-clock support from an AI chatbot to assist with problem-solving and queries.",
      "ACompete with other students in coding contests to refine your rating and stand out.",
      "Gain the attention of scouts looking for top talent, potentially opening doors to exciting opportunities.",
    ],
  },
  {
    id: "2",
    title: "Recruiters",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    payment: null,
    features: [
      "Identify and recruit the best talent for your company with ease.",
      "Test candidates' skills by inviting them to contests, evaluating their performance alongside others.",
      "Receive personalized profile suggestions based on your historical hiring patterns.",
      "Efficiently acquire top talent through data-driven insights and seamless recruitment methods.",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything to the mentors at CODREL",
    text: "You would get access to our exclusive community of CODREL mentors who are experts in their fields.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "2",
    title: "Domain Specific Learning",
    text: "Unlike conventional education system, you would be learning domains  relevant to your interests.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "24/7 AI chatbot BUZZ",
    text: "You will get access to the awesomely curated AI coding assistant to help  you with all your doubts and problems.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Contests, Rankings and Ratings",
    text: "Compete with either your institute coders or global coders to improve your ranking and test your skills",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Connect with recruiters",
    text: "Stand out on the leaderboards  and get noticed by top companies in the industry.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon5,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Magnified Spotlight",
    text: "As you grow your account you will be in the spotlight of the recruiters hiring on Dcrypt thus giving you an edge over other",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon6,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
