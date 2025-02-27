import React from 'react'
import { render, screen } from "@testing-library/react"
import MenuListMock from './MenuList.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultMenuList } from './MenuList.stories'

const testID = "MenuList-" + Math.floor(Math.random()*90000) + 10000

describe("MenuList", () => {

    it("Can render MenuList", () => {
        render(<DefaultMenuList testID={ testID } { ...MenuListMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})