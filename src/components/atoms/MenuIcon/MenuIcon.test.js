import React from 'react'
import { render, screen } from "@testing-library/react"
import MenuIconMock from './MenuIcon.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultMenuIcon } from './MenuIcon.stories'

const testID = "MenuIcon-" + Math.floor(Math.random()*90000) + 10000

describe("MenuIcon", () => {

    it("Can render MenuIcon", () => {
        render(<DefaultMenuIcon testID={ testID } { ...MenuIconMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})