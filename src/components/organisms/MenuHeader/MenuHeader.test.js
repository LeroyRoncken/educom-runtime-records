import React from 'react'
import { render, screen } from "@testing-library/react"
import MenuHeaderMock from './MenuHeader.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultMenuHeader } from './MenuHeader.stories'

const testID = "MenuHeader-" + Math.floor(Math.random()*90000) + 10000

describe("MenuHeader", () => {

    it("Can render MenuHeader", () => {
        render(<DefaultMenuHeader testID={ testID } { ...MenuHeaderMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})