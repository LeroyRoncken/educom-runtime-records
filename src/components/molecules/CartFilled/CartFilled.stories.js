import React from 'react'
import CartFilled from './CartFilled'
import CartFilledMock from './CartFilled.mock'

/// TODO: fix story entries
const CartFilledMeta = {
    title: "molecules/CartFilled",
    component: CartFilled,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "CartFilled-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <CartFilled {...args} />

export const DefaultCartFilled = Template.bind({})
DefaultCartFilled.args = {
    testID: testID,
    ...CartFilledMock
}

export default CartFilledMeta