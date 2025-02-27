import React from 'react'
import { render, screen } from "@testing-library/react"
import CartOverviewMock from './CartOverview.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultCartOverview } from './CartOverview.stories'

const testID = "CartOverview-" + Math.floor(Math.random()*90000) + 10000

describe("CartOverview", () => {

    it("Can render CartOverview", () => {
        render(<DefaultCartOverview testID={ testID } { ...CartOverviewMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})