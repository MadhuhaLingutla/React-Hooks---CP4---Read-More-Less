// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
`
export const Heading = styled.h1`
  color: #1e293b;
  margin-bottom: 40px;
  font-family: 'Roboto';
`
export const SubHeading = styled.p`
  color: #334155;
  font-size: 20px;
  margin-bottom: 40px;
`
export const Image = styled.img`
  width: 800px;
  height: 450px;
  margin-bottom: 30px;
`
export const Description = styled.p`
  color: #334155;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 40px;
`
export const CustomButton = styled.button`
  background-color: #1f81ff;
  color: white;
  font-size: 15px;
  border-radius: 5px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
`
