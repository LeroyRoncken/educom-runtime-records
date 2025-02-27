import React from 'react'
import { render, screen } from "@testing-library/react"
import FooterMock from './Footer.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultFooter } from './Footer.stories'

const testID = "Footer-" + Math.floor(Math.random()*90000) + 10000

describe("Footer", () => {

    it("Can render Footer", () => {
        render(<DefaultFooter testID={ testID } { ...FooterMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})