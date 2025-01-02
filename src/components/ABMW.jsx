import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
/* justify-content: center; */
text-align: center;
`
export default function ABMW() {
  return (
    <StyledDiv>
      <h2 className='abH2'>BMW in your country</h2>
      <h1 className='abmH1' id='amH1'>ALL BMW MODELS</h1>
      <h3 className='abH2'><img src="" alt=">" />Find your BMW</h3>
    </StyledDiv>
  )
}
