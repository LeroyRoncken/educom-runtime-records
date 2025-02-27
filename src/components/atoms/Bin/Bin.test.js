import React from 'react'
import { render, screen } from "@testing-library/react"
import BinMock from './Bin.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultBin } from './Bin.stories'

const testID = "Bin-" + Math.floor(Math.random()*90000) + 10000

describe("Bin", () => {

    it("Can render Bin", () => {
        render(<DefaultBin testID={ testID } { ...BinMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})