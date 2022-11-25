import React from 'react'
import { useRecoilValue } from 'recoil'
import { charCountState } from '../App'

const CharacterCount = () => {

    const count = useRecoilValue(charCountState);

    return (
        <div>Character Count: {count}</div>
    )
}

export default CharacterCount