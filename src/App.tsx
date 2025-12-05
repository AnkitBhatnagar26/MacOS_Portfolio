import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Dock, Home, Image, Navbar, Text, Welcome } from "#components";
import { Contact, Finder, Resume, Safari, Terminal } from "#windows";
import Photos from "#windows/Photos";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Home />
      <Photos />
    </div>
  );
};

export default App;
