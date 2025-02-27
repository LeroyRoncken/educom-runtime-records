import React from 'react'
import CartOverview from './CartOverview'
import CartOverviewMock from './CartOverview.mock'

/// TODO: fix story entries
const CartOverviewMeta = {
    title: "organisms/CartOverview",
    component: CartOverview,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "CartOverview-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <CartOverview {...args} />

export const DefaultCartOverview = Template.bind({})
DefaultCartOverview.args = {
    testID: testID,
    ...CartOverviewMock
}

export default CartOverviewMeta