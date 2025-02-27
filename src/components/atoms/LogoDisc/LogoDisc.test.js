import React from 'react'
import { render, screen } from "@testing-library/react"
import LogoDiscMock from './LogoDisc.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultLogoDisc } from './LogoDisc.stories'

const testID = "LogoDisc-" + Math.floor(Math.random()*90000) + 10000

describe("LogoDisc", () => {

    it("Can render LogoDisc", () => {
        render(<DefaultLogoDisc testID={ testID } { ...LogoDiscMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})