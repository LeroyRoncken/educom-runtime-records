import React from 'react'
import { render, screen } from "@testing-library/react"
import RecordStoreDayMock from './RecordStoreDay.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultRecordStoreDay } from './RecordStoreDay.stories'

const testID = "RecordStoreDay-" + Math.floor(Math.random()*90000) + 10000

describe("RecordStoreDay", () => {

    it("Can render RecordStoreDay", () => {
        render(<DefaultRecordStoreDay testID={ testID } { ...RecordStoreDayMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})