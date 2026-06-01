import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Founder } from "./pages/Founder";
import { Ministries } from "./pages/Ministries";
import { Events } from "./pages/Events";
import { Media } from "./pages/Media";
import { Gallery } from "./pages/Gallery";
import { Give } from "./pages/Give";
import { Visit } from "./pages/Visit";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "founder", Component: Founder },
      { path: "ministries", Component: Ministries },
      { path: "events", Component: Events },
      { path: "media", Component: Media },
      { path: "gallery", Component: Gallery },
      { path: "give", Component: Give },
      { path: "visit", Component: Visit },
      { path: "contact", Component: Contact },
    ],
  },
]);
