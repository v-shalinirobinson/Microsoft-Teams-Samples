// Adaptive Card for tab to show in stage view
const adaptiveCardForTabStageView = () => ({
    $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
    body: [
        {
            type: 'TextBlock',
            size: 'Medium',
            weight: 'Bolder',
            text: 'Click the button to open the url in tab stage view'
        },
        {
            type: 'ActionSet',
            actions: [
                {
                    type: "Action.Submit",
                    title: "View via card",
                    data: {
                        msteams: {
                            type: "invoke",
                            value: {
                                type: "tab/tabInfoAction",
                                tabInfo: {
                                    contentUrl:  process.env.BaseUrl + "/content",
                                    websiteUrl: process.env.BaseUrl + "/content",
                                    name: "Stage view",
                                    entityId: "entityId"
                                 }
                                }
                            }
                    }
                },
                /*{
                   // type: "Action.OpenUrl",
                    title: "View via Deep Link",
                    url: "https://teams.microsoft.com/l/stage/{appId}/0?context={�contentUrl�:�[contentUrl]�,�websiteUrl�:�[websiteUrl]�,�name�:�[name]�}"
                }*/
            ]
        }
    ],
    type: 'AdaptiveCard',
    version: '1.4'
});

module.exports = {
    adaptiveCardForTabStageView,
};