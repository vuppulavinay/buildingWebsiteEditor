

import BlockInfo from "../blocks/block.json";

export const renderBlockElements = () => {
  let { blockList } = BlockInfo;
  blockList.forEach((block) => {
    renderElement(block);
  });
};

export const renderElement = (ele) => {
  let canvas = document.getElementById('canvasContainer');
  let eleInit;
  if (ele.type === 'div') {
    eleInit = document.createElement('div');
    eleInit.innerHTML = ele.content;
    // eleInit.setAttribute('contentEditable', true);
  }
  else if (ele.type === 'button') {
    eleInit = document.createElement('button');
    eleInit.textContent = ele.content;
    ele?.classes && ele?.classes.length > 0 && ele.classes.forEach((e) => {
      eleInit.classList.add(e)
    });
    eleInit.setAttribute('contentEditable', true);
  } else if (ele.type === 'p') {
    eleInit = document.createElement('p');
    eleInit.innerHTML = ele.content;
    eleInit.setAttribute('contentEditable', true);
  } else if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(ele.type)) {
    eleInit = document.createElement(`${ele.type}`);
    eleInit.innerHTML = ele.content;
    eleInit.setAttribute('contentEditable', true);
  }


  for (let styleKey in ele.styles) {
    eleInit.style[styleKey] = ele.styles[styleKey];
  }


  // canvas.appendChild(eleInit);
  return eleInit
};
