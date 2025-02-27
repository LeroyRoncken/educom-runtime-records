import React from 'react'
import { render, screen } from "@testing-library/react"
import AddToCartMock from './AddToCart.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultAddToCart } from './AddToCart.stories'

const testID = "AddToCart-" + Math.floor(Math.random()*90000) + 10000

describe("AddToCart", () => {

    it("Can render AddToCart", () => {
        render(<DefaultAddToCart testID={ testID } { ...AddToCartMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})