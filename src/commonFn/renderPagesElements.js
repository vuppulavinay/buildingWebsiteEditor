
import Pages from "../pages/pages.json";
import { renderElement } from "./renderBlockElements";
import BlockInfo from "../blocks/block.json";
import { Children } from "react";

export const renderPage = (pageName) => {
  // const page = Pages.pages[pageName];


  // if (page) {
  //   const canvas = document.getElementById('canvasContainer');
  //   canvas.innerHTML = '';

  //   page.structure.forEach((blockName) => {
  //     const block = BlockInfo.blockList.find((b) => b.name === blockName);
  //     console.log(block, "block")
  //     if (block) {
  //       renderElement(block);
  //     }
  //   });
  // } else {
  //   console.error(`Page "${pageName}" not found.`);
  // }
};



export const pageRender = () => {
  const { ListOfPages } = Pages;
  console.log(Pages, "pages");
  if (ListOfPages.length > 0) {
    const canvas = document.getElementById('canvasContainer');
    let currElemnt, subElement;
    let count = 0;
    ListOfPages.forEach((e) => {
      if (e?.component?.tagName) {
        const block = BlockInfo.blockList.find((b) => b.name === e.component.tagName);
        if (block) {
          currElemnt = renderElement(block);
          if (e?.component?.components?.length > 0) {
            let comps = e?.component?.components;
            comps.forEach((val) => {
              const block = BlockInfo.blockList.find((b) => b.name === val.tagName);

              if (block) {
                let subElement = renderElement({
                  ...block,
                  ...(val.content ? { content: val.content } : { content: block.content }),
                  ...(val.styles ? { styles: val.styles } : { styles: block.styles })
                });
                console.log(subElement, 'subElement');
                if (val?.components?.length > 0) {
                  val?.components.forEach((ele) => {
                    const block = BlockInfo.blockList.find((b) => b.name === ele.tagName);
                    if (block) {
                      let nestedEle = renderElement({ ...block, 
                        ...(ele.content ? { content: ele.content } : { content: block.content }),
                        ...(ele.styles ? { styles: ele.styles } : { styles: block.styles })
                       });
                      if (ele?.components?.length > 0) {
                        ele.components.forEach((childEle) => {
                          const block = BlockInfo.blockList.find((b) => b.name === childEle.tagName);
                          let childrenEle = renderElement({ ...block, 
                            ...(childEle.content ? { content: childEle.content } : { content: block.content }),
                            ...(childEle.styles ? { styles: childEle.styles } : { styles: block.styles })
                           })
                          nestedEle.appendChild(childrenEle);
                        })

                      }
                      subElement.appendChild(nestedEle);
                    }
                  })
                }
                currElemnt.appendChild(subElement);
              }


            });


          }
        }

      }
    })
    canvas.appendChild(currElemnt)
  }


  console.log(Pages, "pages");

}