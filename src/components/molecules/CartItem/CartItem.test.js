import React from 'react'
import { render, screen } from "@testing-library/react"
import CartItemMock from './CartItem.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultCartItem } from './CartItem.stories'

const testID = "CartItem-" + Math.floor(Math.random()*90000) + 10000

describe("CartItem", () => {

    it("Can render CartItem", () => {
        render(<DefaultCartItem testID={ testID } { ...CartItemMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})