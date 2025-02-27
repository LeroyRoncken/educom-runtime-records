import React from 'react'
import MenuItemArrow from './MenuItemArrow'
import MenuItemArrowMock from './MenuItemArrow.mock'

/// TODO: fix story entries
const MenuItemArrowMeta = {
    title: "atoms/MenuItemArrow",
    component: MenuItemArrow,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "MenuItemArrow-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <MenuItemArrow {...args} />

export const DefaultMenuItemArrow = Template.bind({})
DefaultMenuItemArrow.args = {
    testID: testID,
    ...MenuItemArrowMock
}

export default MenuItemArrowMeta