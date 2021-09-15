import React, {useContext} from "react";
import {LayoutContext} from "./Layout/LayoutContext";
import FlexLayout from "flexlayout-react";
import {layoutFactory} from "./Layout/layoutfactory";


function Main() {

  const [layoutState,] = useContext(LayoutContext);
//const nextGridIndex = 1;

// const onAddFromTabSetButton = (node: TabSetNode | BorderNode) => {
//   // if (this.state.model!.getMaximizedTabset() == null) {
//   // layoutState.addTabToTabSet(node.getId(), {
//   //   component: "button",
//   //   name: "Grid "
//   // });
//   // }
//
//   layoutState.layout.current.addTabToActiveTabSet({
//     type: "tab",
//     component: "logDetail",
//     name: "name",
//     config: {
//       url: "url"
//     }
//   });
// }
// const onRenderTabSet = (node: (TabSetNode | BorderNode), renderValues: ITabSetRenderValues) => {
//
//   renderValues.stickyButtons.push(
//     <img src="images/add.png"
//          alt="Add"
//          key="Add button"
//          title="Add Tab (using onRenderTabSet callback, see Demo)"
//          style={{ marginLeft: 5, width:24, height:24 }}
//          onClick={() => onAddFromTabSetButton(node)}
//     />);
//
// }
  const getContent = () => {
    return <FlexLayout.Layout ref={layoutState.layout} model={layoutState.model}
                              factory={layoutFactory}/>
  };

  return(
    <div className="App">
      {getContent()}
    </div>

  )

}
export default Main;