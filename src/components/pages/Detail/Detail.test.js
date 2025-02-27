import React from 'react'
import { render, screen } from "@testing-library/react"
import DetailMock from './Detail.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultDetail } from './Detail.stories'

const testID = "Detail-" + Math.floor(Math.random()*90000) + 10000

describe("Detail", () => {

    it("Can render Detail", () => {
        render(<DefaultDetail testID={ testID } { ...DetailMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})