import React from 'react'
import { render, screen } from "@testing-library/react"
import CartFilledMock from './CartFilled.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultCartFilled } from './CartFilled.stories'

const testID = "CartFilled-" + Math.floor(Math.random()*90000) + 10000

describe("CartFilled", () => {

    it("Can render CartFilled", () => {
        render(<DefaultCartFilled testID={ testID } { ...CartFilledMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})