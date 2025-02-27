import React from 'react'
import MenuList from './MenuList'
import MenuListMock from './MenuList.mock'

/// TODO: fix story entries
const MenuListMeta = {
    title: "organisms/MenuList",
    component: MenuList,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "MenuList-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <MenuList {...args} />

export const DefaultMenuList = Template.bind({})
DefaultMenuList.args = {
    testID: testID,
    ...MenuListMock
}

export default MenuListMeta