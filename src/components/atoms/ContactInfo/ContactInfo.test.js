import React from 'react'
import { render, screen } from "@testing-library/react"
import ContactInfoMock from './ContactInfo.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultContactInfo } from './ContactInfo.stories'

const testID = "ContactInfo-" + Math.floor(Math.random()*90000) + 10000

describe("ContactInfo", () => {

    it("Can render ContactInfo", () => {
        render(<DefaultContactInfo testID={ testID } { ...ContactInfoMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})