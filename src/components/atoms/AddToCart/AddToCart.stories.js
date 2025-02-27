import React from 'react'
import AddToCart from './AddToCart'
import AddToCartMock from './AddToCart.mock'

/// TODO: fix story entries
const AddToCartMeta = {
    title: "atoms/AddToCart",
    component: AddToCart,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "AddToCart-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <AddToCart {...args} />

export const DefaultAddToCart = Template.bind({})
DefaultAddToCart.args = {
    testID: testID,
    ...AddToCartMock
}

export default AddToCartMeta