import React from 'react'
import { render, screen } from "@testing-library/react"
import HomepageMock from './Homepage.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultHomepage } from './Homepage.stories'

const testID = "Homepage-" + Math.floor(Math.random()*90000) + 10000

describe("Homepage", () => {

    it("Can render Homepage", () => {
        render(<DefaultHomepage testID={ testID } { ...HomepageMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})