import React from 'react'
import { render, screen } from "@testing-library/react"
import InfoMock from './Info.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultInfo } from './Info.stories'

const testID = "Info-" + Math.floor(Math.random()*90000) + 10000

describe("Info", () => {

    it("Can render Info", () => {
        render(<DefaultInfo testID={ testID } { ...InfoMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})