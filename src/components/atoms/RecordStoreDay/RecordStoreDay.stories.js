import React from 'react'
import RecordStoreDay from './RecordStoreDay'
import RecordStoreDayMock from './RecordStoreDay.mock'

/// TODO: fix story entries
const RecordStoreDayMeta = {
    title: "atoms/RecordStoreDay",
    component: RecordStoreDay,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "RecordStoreDay-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <RecordStoreDay {...args} />

export const DefaultRecordStoreDay = Template.bind({})
DefaultRecordStoreDay.args = {
    testID: testID,
    ...RecordStoreDayMock
}

export default RecordStoreDayMeta