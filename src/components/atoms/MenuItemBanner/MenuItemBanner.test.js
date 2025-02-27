import React from 'react'
import { render, screen } from "@testing-library/react"
import MenuItemBannerMock from './MenuItemBanner.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultMenuItemBanner } from './MenuItemBanner.stories'

const testID = "MenuItemBanner-" + Math.floor(Math.random()*90000) + 10000

describe("MenuItemBanner", () => {

    it("Can render MenuItemBanner", () => {
        render(<DefaultMenuItemBanner testID={ testID } { ...MenuItemBannerMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})