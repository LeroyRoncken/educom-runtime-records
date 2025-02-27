import React from 'react'
import { render, screen } from "@testing-library/react"
import ShoppingCartMock from './ShoppingCart.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultShoppingCart } from './ShoppingCart.stories'

const testID = "ShoppingCart-" + Math.floor(Math.random()*90000) + 10000

describe("ShoppingCart", () => {

    it("Can render ShoppingCart", () => {
        render(<DefaultShoppingCart testID={ testID } { ...ShoppingCartMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})