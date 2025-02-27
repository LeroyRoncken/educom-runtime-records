import React from 'react'
import MenuIcon from './MenuIcon'
import MenuIconMock from './MenuIcon.mock'

/// TODO: fix story entries
const MenuIconMeta = {
    title: "atoms/MenuIcon",
    component: MenuIcon,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "MenuIcon-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <MenuIcon {...args} />

export const DefaultMenuIcon = Template.bind({})
DefaultMenuIcon.args = {
    testID: testID,
    ...MenuIconMock
}

export default MenuIconMeta