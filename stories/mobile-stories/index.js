import {getStorybookUI, configure} from "@storybook/react-native";

import "../rn-addons";

configure(() => {
    require("./Presentation");
}, module);

const StorybookUIRoot = getStorybookUI({
    asyncStorage: null
});

export default StorybookUIRoot;