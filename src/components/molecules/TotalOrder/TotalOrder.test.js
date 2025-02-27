import React from 'react'
import { render, screen } from "@testing-library/react"
import TotalOrderMock from './TotalOrder.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultTotalOrder } from './TotalOrder.stories'

const testID = "TotalOrder-" + Math.floor(Math.random()*90000) + 10000

describe("TotalOrder", () => {

    it("Can render TotalOrder", () => {
        render(<DefaultTotalOrder testID={ testID } { ...TotalOrderMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})