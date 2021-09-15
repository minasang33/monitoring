export const defaultLayout = {
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
                            "name": "start",
                            "component": "welcomeScreen",
                            // "enableClose": false,
                            // "enableDrag": false,
                        }
                    ]
                },
                // {
                //     "type": "tabset",
                //     "weight": 50,
                //     "selected": 0,
                //     //"id": 'tabset_main',
                //     "children": [
                //         {
                //             "type": "tab",
                //             "name": "dev2",
                //             "component": "TabIframe",
                //             // "enableClose": false,
                //             // "enableDrag": false,
                //         }
                //     ]
                // }
            ]
        },
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
                        "enableDrag": false,
                        "enableClose": false,
                        "component": "ConnectionSidebar"
                    },
                    {
                        "type": "tab",
                        "name": "MENU",
                        "id": "border_left_settings",
                        "enableDrag": false,
                        "enableClose": false,
                        "component": "SettingsSidebar"
                    }
                ]
            }
        ]

    }
;
