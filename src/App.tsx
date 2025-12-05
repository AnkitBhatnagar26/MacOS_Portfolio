import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Dock, Image, Navbar, Text, Welcome } from "#components";
import { Contact, Finder, Resume, Safari, Terminal } from "#windows";

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
    </div>
  );
};

export default App;
