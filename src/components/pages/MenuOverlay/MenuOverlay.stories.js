import React from 'react'
import MenuOverlay from './MenuOverlay'
import MenuOverlayMock from './MenuOverlay.mock'

/// TODO: fix story entries
const MenuOverlayMeta = {
    title: "pages/MenuOverlay",
    component: MenuOverlay,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "MenuOverlay-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <MenuOverlay {...args} />

export const DefaultMenuOverlay = Template.bind({})
DefaultMenuOverlay.args = {
    testID: testID,
    ...MenuOverlayMock
}

export default MenuOverlayMeta