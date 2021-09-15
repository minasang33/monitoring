import React, {useContext} from 'react';
//import {AppContext} from "../../../Context/AppContext";
import {Container, Divider, Segment} from "semantic-ui-react";

import {SETTINGS_LINKS} from "../../../settings"
import TabLink from "../TabLink/TabLink";

function SettingsSidebar(props) {
    //const [appState,] = useContext(AppContext);

    return (
        <Container className='sidebarContainer'>
            <Segment color='grey'>
              {SETTINGS_LINKS.map(link =>
                <>
                  <TabLink
                    url={link.url}
                    tabName={link.tabName}
                    linkName={link.name}
                    visible={true}/>
                  <Divider/>
                </>
              )}

            </Segment>
        </Container>
    );
}

export default SettingsSidebar;