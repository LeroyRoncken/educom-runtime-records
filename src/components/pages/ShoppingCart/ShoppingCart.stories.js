import React from 'react'
import ShoppingCart from './ShoppingCart'
import ShoppingCartMock from './ShoppingCart.mock'

/// TODO: fix story entries
const ShoppingCartMeta = {
    title: "pages/ShoppingCart",
    component: ShoppingCart,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "ShoppingCart-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <ShoppingCart {...args} />

export const DefaultShoppingCart = Template.bind({})
DefaultShoppingCart.args = {
    testID: testID,
    ...ShoppingCartMock
}

export default ShoppingCartMeta