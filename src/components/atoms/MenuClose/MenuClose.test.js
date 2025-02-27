import React from 'react'
import { render, screen } from "@testing-library/react"
import MenuCloseMock from './MenuClose.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultMenuClose } from './MenuClose.stories'

const testID = "MenuClose-" + Math.floor(Math.random()*90000) + 10000

describe("MenuClose", () => {

    it("Can render MenuClose", () => {
        render(<DefaultMenuClose testID={ testID } { ...MenuCloseMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})