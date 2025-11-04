import AboutData from "../data/aboutData";
import ContactData from "../data/contactData";
import SkillsData from "../data/skillsData";
import type { DesktopIcon } from "./desktopIcons.types";

export const desktopIcons: DesktopIcon[] = [
    {
        id: "contact",
        title: "Contact",
        icon: "📧",
        content: <ContactData />,
    },
    {
        id: "about",
        title: "About Me",
        icon: "💼",
        content: <AboutData />,
    },
    {
        id: "skills",
        title: "Skills",
        icon: "🛠️",
        content: <SkillsData />,
      }
];