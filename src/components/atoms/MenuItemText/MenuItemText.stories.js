import React from 'react'
import MenuItemText from './MenuItemText'
import MenuItemTextMock from './MenuItemText.mock'

/// TODO: fix story entries
const MenuItemTextMeta = {
    title: "atoms/MenuItemText",
    component: MenuItemText,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "MenuItemText-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <MenuItemText {...args} />

export const DefaultMenuItemText = Template.bind({})
DefaultMenuItemText.args = {
    testID: testID,
    ...MenuItemTextMock
}

export default MenuItemTextMeta