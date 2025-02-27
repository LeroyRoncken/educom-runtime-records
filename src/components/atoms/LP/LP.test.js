import React from 'react'
import { render, screen } from "@testing-library/react"
import LPMock from './LP.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultLP } from './LP.stories'

const testID = "LP-" + Math.floor(Math.random()*90000) + 10000

describe("LP", () => {

    it("Can render LP", () => {
        render(<DefaultLP testID={ testID } { ...LPMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})