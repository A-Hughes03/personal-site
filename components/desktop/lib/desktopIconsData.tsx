import ContactData from "../data/contactData";
import type { DesktopIcon } from "./desktopIcons";

export const desktopIcons: DesktopIcon[] = [
    {
        id: "contact",
        title: "Contact",
        icon: "📧",
        content: <ContactData />,
    }
];