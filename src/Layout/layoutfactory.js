import React from 'react';

import Welcome from "../Components/Welcome/Welcome";
//import ConnectionSidebar from "./ConnectionSidebar";
import TabIframe from "./TabIframe";
import SettingsSidebar from "../Components/Sidebar/SettingsSidebar/SettingsSidebar";


export const layoutFactory = (node) => {
        var component = node.getComponent();
        if (component === 'welcomeScreen'){
            return <Welcome />
        }
         // if (component === "ConnectionSidebar") {
         //     return <ConnectionSidebar/>
         // }
         if (component === "SettingsSidebar") {
             return <SettingsSidebar/>
         }
        // if (component === "GuacViewer") {
        //     return <GuacViewer {...node.getConfig()} node={node}/>
        // }

        if (component === "button") {
          return <button>{node.getName()}</button>;
        }
        if (component === "TabIframe") {
            return <TabIframe {...node.getConfig()} name={node.name}/>
        }
    };