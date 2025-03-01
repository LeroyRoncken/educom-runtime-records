import React from 'react'
import { render, screen } from "@testing-library/react"
import HeaderMock from './Header.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultHeader } from './Header.stories'

const testID = "Header-" + Math.floor(Math.random()*90000) + 10000

describe("Header", () => {

    it("Can render Header", () => {
        render(<DefaultHeader testID={ testID } { ...HeaderMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})