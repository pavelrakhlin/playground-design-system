import { createRoot } from "react-dom/client";
import "@tailwindcss";
import "./root.css";
import { DesignSystem } from "../design-system/design-system";

createRoot(document.getElementById("root")).render(<DesignSystem />);
