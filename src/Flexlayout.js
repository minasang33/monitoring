import {Layout, Model, TabNode, IJsonModel} from 'flexlayout-react';
import './App.css';
import 'flexlayout-react/style/light.css';


var json : IJsonModel= {
    global: {
      "splitterSize": 5,
      "tabEnableRename": false,
      "tabSetHeaderHeight": 25,
      "tabSetTabStripHeight": 25

    },
    layout: {
      "type": "row",
      "weight": 100,
      "children": [
        {
          "type": "tabset",
          "weight": 50,
          "selected": 0,
          "id": 'tabset_main',

          "children": [
            {
              "type": "tab",
              "name": "Start",
              "component": "welcomeScreen",
              // "enableClose": false,
              // "enableDrag": false,
            }
          ]
        }, {
          "type": "tabset",
          "weight": 50,

          "selected": 0,
          "children": [
            {
              "type": "tab",
              "name": "other",
              //"component": "button"
            }
          ]
        }
      ]
    },
  "action":[

  ],
    "borders": [
      {
        "type": "border",
        "selected": 0,
        "location": "left",
        "show": "true",
        "enableDrop": "false",
        "size": 250,
        "children": [
          {
            "type": "tab",
            "name": "Connections",
            "id": "border_left_connections",
            // "enableDrag": false,
            // "enableClose": false,
            "component": "ConnectionSidebar"
          },
          {
            "type": "tab",
            "name": "Settings",
            "id": "border_left_settings",
            // "enableDrag": false,
            // "enableClose": false,
            "component": "SettingsSidebar"
          }
        ]
      }
    ]

  };

function allowDrop(dragNode, dropInfo) {
  let dropNode = dropInfo.node;

  // prevent non-border tabs dropping into borders
  if (dropNode.getType() == "border" && (dragNode.getParent() == null || dragNode.getParent().getType() != "border"))
    return false;

  // prevent border tabs dropping into main layout
  if (dropNode.getType() != "border" && (dragNode.getParent() != null && dragNode.getParent().getType() == "border"))
    return false;

  return true;
}

const model = Model.fromJson(json);

function Flexlayout(){

  //model.setOnAllowDrop(allowDrop);

  const factory = (node: TabNode) => {

    var component = node.getComponent();
    if (component === "button") {
      return <button>{node.getName()}</button>;
    }
  }

  return (
    <Layout
      model={model}
      factory={factory} />
  );
}
export default Flexlayout;
