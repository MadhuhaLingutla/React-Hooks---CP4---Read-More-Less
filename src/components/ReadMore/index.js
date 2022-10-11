// Write your code here

import {useState} from 'react'
import {
  Container,
  Heading,
  SubHeading,
  Image,
  Description,
  CustomButton,
  ContentContainer,
} from './styledComponents'

const ReadMore = props => {
  const [readMore, setReadMore] = useState(false)
  const {reactHooksDescription} = props
  const slicedText = readMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  const buttonText = readMore ? 'Read Less' : 'Read More'

  const updateReadMoreStatus = () => setReadMore(prevState => !prevState)

  return (
    <Container>
      <ContentContainer>
        <Heading>React Hooks</Heading>
        <SubHeading>Hooks are a new addition to React</SubHeading>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>{slicedText}</Description>
        <CustomButton onClick={updateReadMoreStatus}>{buttonText}</CustomButton>
      </ContentContainer>
    </Container>
  )
}

export default ReadMore
