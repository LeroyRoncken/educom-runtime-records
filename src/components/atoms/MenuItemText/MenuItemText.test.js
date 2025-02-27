import React from 'react'
import { render, screen } from "@testing-library/react"
import MenuItemTextMock from './MenuItemText.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultMenuItemText } from './MenuItemText.stories'

const testID = "MenuItemText-" + Math.floor(Math.random()*90000) + 10000

describe("MenuItemText", () => {

    it("Can render MenuItemText", () => {
        render(<DefaultMenuItemText testID={ testID } { ...MenuItemTextMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})