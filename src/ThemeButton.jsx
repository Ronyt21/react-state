import { useState } from "react";

export default function ThemeButton() {
  const [theme, setTheme] = useState(false);
  return (
    <div
      style={{
        backgroundColor: theme ? "white" : "black",
        color: theme ? "black" : "white",
        height: "100vh"
      }}
    >
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onChange={() => {
            setTheme(!theme);
          }}
        />
        <label class="form-check-label" for="flexSwitchCheckDefault">
          Dark Mode
        </label>
      </div>
    </div>
  );
}
