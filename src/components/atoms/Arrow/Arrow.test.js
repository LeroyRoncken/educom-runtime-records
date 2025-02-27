import React from 'react'
import { render, screen } from "@testing-library/react"
import ArrowMock from './Arrow.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultArrow } from './Arrow.stories'

const testID = "Arrow-" + Math.floor(Math.random()*90000) + 10000

describe("Arrow", () => {

    it("Can render Arrow", () => {
        render(<DefaultArrow testID={ testID } { ...ArrowMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})