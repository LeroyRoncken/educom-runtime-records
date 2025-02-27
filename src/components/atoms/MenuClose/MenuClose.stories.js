import React from 'react'
import MenuClose from './MenuClose'
import MenuCloseMock from './MenuClose.mock'

/// TODO: fix story entries
const MenuCloseMeta = {
    title: "atoms/MenuClose",
    component: MenuClose,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "MenuClose-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <MenuClose {...args} />

export const DefaultMenuClose = Template.bind({})
DefaultMenuClose.args = {
    testID: testID,
    ...MenuCloseMock
}

export default MenuCloseMeta