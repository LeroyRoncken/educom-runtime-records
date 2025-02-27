import React from 'react'
import { render, screen } from "@testing-library/react"
import CircledNumberMock from './CircledNumber.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultCircledNumber } from './CircledNumber.stories'

const testID = "CircledNumber-" + Math.floor(Math.random()*90000) + 10000

describe("CircledNumber", () => {

    it("Can render CircledNumber", () => {
        render(<DefaultCircledNumber testID={ testID } { ...CircledNumberMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})