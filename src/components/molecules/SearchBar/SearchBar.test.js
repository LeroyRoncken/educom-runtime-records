import React from 'react'
import { render, screen } from "@testing-library/react"
import SearchBarMock from './SearchBar.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultSearchBar } from './SearchBar.stories'

const testID = "SearchBar-" + Math.floor(Math.random()*90000) + 10000

describe("SearchBar", () => {

    it("Can render SearchBar", () => {
        render(<DefaultSearchBar testID={ testID } { ...SearchBarMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})