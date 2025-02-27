import React from 'react'
import MenuHeader from './MenuHeader'
import MenuHeaderMock from './MenuHeader.mock'

/// TODO: fix story entries
const MenuHeaderMeta = {
    title: "organisms/MenuHeader",
    component: MenuHeader,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "MenuHeader-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <MenuHeader {...args} />

export const DefaultMenuHeader = Template.bind({})
DefaultMenuHeader.args = {
    testID: testID,
    ...MenuHeaderMock
}

export default MenuHeaderMeta