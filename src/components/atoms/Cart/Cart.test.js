import React from 'react'
import { render, screen } from "@testing-library/react"
import CartMock from './Cart.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultCart } from './Cart.stories'

const testID = "Cart-" + Math.floor(Math.random()*90000) + 10000

describe("Cart", () => {

    it("Can render Cart", () => {
        render(<DefaultCart testID={ testID } { ...CartMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})