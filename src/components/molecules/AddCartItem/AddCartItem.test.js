import React from 'react'
import { render, screen } from "@testing-library/react"
import AddCartItemMock from './AddCartItem.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultAddCartItem } from './AddCartItem.stories'

const testID = "AddCartItem-" + Math.floor(Math.random()*90000) + 10000

describe("AddCartItem", () => {

    it("Can render AddCartItem", () => {
        render(<DefaultAddCartItem testID={ testID } { ...AddCartItemMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})