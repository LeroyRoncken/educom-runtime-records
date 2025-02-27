import React from 'react'
import Homepage from './Homepage'
import HomepageMock from './Homepage.mock'

/// TODO: fix story entries
const HomepageMeta = {
    title: "pages/Homepage",
    component: Homepage,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Homepage-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Homepage {...args} />

export const DefaultHomepage = Template.bind({})
DefaultHomepage.args = {
    testID: testID,
    ...HomepageMock
}

export default HomepageMeta