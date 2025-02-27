import React from 'react'
import MenuItem from './MenuItem'
import MenuItemMock from './MenuItem.mock'

/// TODO: fix story entries
const MenuItemMeta = {
    title: "molecules/MenuItem",
    component: MenuItem,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "MenuItem-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <MenuItem {...args} />

export const DefaultMenuItem = Template.bind({})
DefaultMenuItem.args = {
    testID: testID,
    ...MenuItemMock
}

export default MenuItemMeta