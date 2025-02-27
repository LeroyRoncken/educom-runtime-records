import React from 'react'
import { render, screen } from "@testing-library/react"
import LogoNameMock from './LogoName.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultLogoName } from './LogoName.stories'

const testID = "LogoName-" + Math.floor(Math.random()*90000) + 10000

describe("LogoName", () => {

    it("Can render LogoName", () => {
        render(<DefaultLogoName testID={ testID } { ...LogoNameMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})