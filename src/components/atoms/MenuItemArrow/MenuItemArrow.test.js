import React from 'react'
import { render, screen } from "@testing-library/react"
import MenuItemArrowMock from './MenuItemArrow.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultMenuItemArrow } from './MenuItemArrow.stories'

const testID = "MenuItemArrow-" + Math.floor(Math.random()*90000) + 10000

describe("MenuItemArrow", () => {

    it("Can render MenuItemArrow", () => {
        render(<DefaultMenuItemArrow testID={ testID } { ...MenuItemArrowMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})