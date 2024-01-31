import { affaanV, BilalV, RehanV, mate4, scan, upload, stats } from "../assets"

const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "contact",
      title: "Contact",
    },
];

const services = [
  {
    title: "vivek chouhan",
    icon: affaanV,
  },
  {
    title: "Bilal Ansari",
    icon: BilalV,
  },
  {
    title: "Rehan Shah",
    icon: RehanV,
  },
  {
    title: "Maaz Shaikh",
    icon: mate4,
  },
];

const experiences = [
  {
    title: "Upload Your Diagnosis Report",
    icon: upload,
    iconBg: "#58E186",
    points: [
      "Upload your diagnosis report in pdf format",
    ],
  },
  { 
    title: "Wait while our Ai Analyses the Chest X-ray Scan",
    icon: scan,
    iconBg: "#7B8DEA",
    points: [
      "Our Ai Model will predict the disease"
    ],
  },
  {
    title: "Get the results of your X-ray",
    icon: stats,
    iconBg: "#97a8b2",
    points: [
      "Likely diseases will be shown to you",
    ],
  },
];

export {
  navLinks,
  services,
  experiences
}