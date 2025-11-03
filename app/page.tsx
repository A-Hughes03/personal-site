
import Dekstop from "@/components/desktop";
export default function Home() {
  const desktopIcons = [
    {
      id: "1",
      title: "Contact",
      icon: "📧",
      content: <p>This is my contact</p>
    }
  ];
  return (
    <Dekstop
      icons={desktopIcons}
    />
  );
}
