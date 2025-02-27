import React from 'react'
import { render, screen } from "@testing-library/react"
import MenuOverlayMock from './MenuOverlay.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultMenuOverlay } from './MenuOverlay.stories'

const testID = "MenuOverlay-" + Math.floor(Math.random()*90000) + 10000

describe("MenuOverlay", () => {

    it("Can render MenuOverlay", () => {
        render(<DefaultMenuOverlay testID={ testID } { ...MenuOverlayMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})