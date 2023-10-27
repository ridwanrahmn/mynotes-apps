import React from "react";
import { createRoot } from "react-dom/client";
import NotesApps from "./components/NotesApps";
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<NotesApps />);
