import { useTheme } from "../../../shared/lib/theme/useTheme";
import Button from "../../../shared/ui/Button/Button";

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      Переключить {theme === "light" ? "темную" : "светлую"} тему
    </Button>
  );
};

export default ThemeSwitcher;
