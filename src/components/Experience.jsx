import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: block;
  justify-content: cener;
  align-items: center;
  margin: 2rem;
`
const DescriptionWrapper = styled.div`
  align-items: center;
  margin: 1rem;
  width: 100vw;
  & a {
    text-decoration: none;
  }
`

const Experience = () => {
  return (
    <Wrapper>
      <h1>
        Experience
      </h1>
      <DescriptionWrapper>
        
      </DescriptionWrapper>
    </Wrapper>
  )
}

export { Experience }
