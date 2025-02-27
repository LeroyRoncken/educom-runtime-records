import React from 'react'
import { render, screen } from "@testing-library/react"
import ReadMoreMock from './ReadMore.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultReadMore } from './ReadMore.stories'

const testID = "ReadMore-" + Math.floor(Math.random()*90000) + 10000

describe("ReadMore", () => {

    it("Can render ReadMore", () => {
        render(<DefaultReadMore testID={ testID } { ...ReadMoreMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})