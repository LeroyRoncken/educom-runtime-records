import React from 'react'
import MenuItemBanner from './MenuItemBanner'
import MenuItemBannerMock from './MenuItemBanner.mock'

/// TODO: fix story entries
const MenuItemBannerMeta = {
    title: "atoms/MenuItemBanner",
    component: MenuItemBanner,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "MenuItemBanner-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <MenuItemBanner {...args} />

export const DefaultMenuItemBanner = Template.bind({})
DefaultMenuItemBanner.args = {
    testID: testID,
    ...MenuItemBannerMock
}

export default MenuItemBannerMeta