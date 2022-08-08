import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`
const DescriptionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  align-items: center;
  margin: 1rem;
  width: 100%;
  & a {
    text-decoration: none;
  }              
  & ul {
    line-height: 1.5em;
    margin: 5px 0 15px;
    padding: 0;
  }
  & li {
    list-style: none;
    position: relative;
    padding: 0 0 0 20px;
  }   
`

const ItemWrapper = styled.div`
  margin: 1rem;
  padding: .8rem;
`
const Languages = ({ languages }) => {
  return (
    <Wrapper>
      <h3>Languages</h3>
      <DescriptionWrapper>
        <ul>
          <li>
            Spanish. Native
          </li>
          <li>
            English. C1
          </li>
          <li>
            French. B1 
          </li>
        </ul>
      </DescriptionWrapper>
    </Wrapper>
  )
}

export { Languages }