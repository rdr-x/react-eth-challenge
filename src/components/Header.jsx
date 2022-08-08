import React from 'react'
import styled from 'styled-components'
import ImgProfile from '../../public/assets/images/self.png'
import { About } from './About'

const Wrapper = styled.div`
  display: flexbox;
  width: 100%;
  justify-content: center;
  align-items: center;
`
const ImgWrapper = styled.img`
  border-radius: 50%;
  box-shadow: rgba(255, 255, 255, 0.25) 1px 34px 21px -21px, rgba(255, 255, 255, 0.3) 8px 34px 89px -34px, rgba(255, 255, 255, 0.35) -1px -21px 8px 0px inset;
  object-fit: cover;
  margin: 1rem;
`

const DescriptionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  align-items: center;
  margin: 1rem;
  width: 30%;
  & a {
    text-decoration: none;
  }
`

const ItemWrapper = styled.div`
  margin: 1rem;
  padding: .8rem;
`


const Header = ({ avatar, name, profession, phone, email, website, address }) => {
  return (
    <Wrapper>
      <ImgWrapper
        src={ImgProfile}
        width="233px"
        height="233px"
        alt="image-profile"
      />
      <h1>
        
      </h1>
      <DescriptionWrapper>
        <ItemWrapper>
          <About />
        </ItemWrapper>
      </DescriptionWrapper>
    </Wrapper>
  )
}

export { Header }