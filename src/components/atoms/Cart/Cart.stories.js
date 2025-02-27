import React from 'react'
import Cart from './Cart'
import CartMock from './Cart.mock'

/// TODO: fix story entries
const CartMeta = {
    title: "atoms/Cart",
    component: Cart,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Cart-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Cart {...args} />

export const DefaultCart = Template.bind({})
DefaultCart.args = {
    testID: testID,
    ...CartMock
}

export default CartMeta