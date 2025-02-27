import React from 'react'
import CartItem from './CartItem'
import CartItemMock from './CartItem.mock'

/// TODO: fix story entries
const CartItemMeta = {
    title: "molecules/CartItem",
    component: CartItem,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "CartItem-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <CartItem {...args} />

export const DefaultCartItem = Template.bind({})
DefaultCartItem.args = {
    testID: testID,
    ...CartItemMock
}

export default CartItemMeta