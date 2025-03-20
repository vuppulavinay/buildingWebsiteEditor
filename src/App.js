
import React, { useEffect, useRef, useState } from 'react';
import { renderPage, pageRender } from './commonFn/renderPagesElements';
import { renderBlockElements } from './commonFn/renderBlockElements';
import './App.css';

function App() {
  const hasRun = useRef(false);
  const [selectedPage, setSelectedPage] = useState("homePage");

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    // renderBlockElements();
    // renderPage(selectedPage);

    pageRender();
  }, [selectedPage]);

  console.log(selectedPage, "selectedPage")

  return (
    <>
      <div>

        <div className="canvas-editor" id="canvasContainer">

        </div>
        <div>

        </div>
      </div>

    </>
  );
}

export default App;

{/* <div className="toolbar">
        <button onClick={() => setSelectedPage("homePage")}>Home Page</button>
        <button onClick={() => setSelectedPage("aboutPage")}>About Page</button>
        <button onClick={() => setSelectedPage("contactPage")}>Contact Page</button>
      </div> */}