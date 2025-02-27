import React from 'react'
import { render, screen } from "@testing-library/react"
import MenuItemMock from './MenuItem.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultMenuItem } from './MenuItem.stories'

const testID = "MenuItem-" + Math.floor(Math.random()*90000) + 10000

describe("MenuItem", () => {

    it("Can render MenuItem", () => {
        render(<DefaultMenuItem testID={ testID } { ...MenuItemMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})