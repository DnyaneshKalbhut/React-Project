import React from 'react'
import styled from 'styled-components'
import { experiences } from '../../data/constants';
import  Timeline  from '@mui/lab/Timeline';
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeprator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import ExperinceCard from '../Cards/ExperinceCard';



const Container = styled.div`
display: flex;
flex-direction: column;
justify-content-center;
position: relative;
z-index: 1;
align-items: center;
padding: 50px 0px ;

@media (max-width:960px) {
  padding: 0px;
}
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TimeLineSection = styled.div`
width: 100%;
max-width: 1000px;
margin-top: 10px;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
gap: 12px;
`

const Experience = () => {
    return (
      <Container id='Experience'>
        <Wrapper>
          <Title>Experience</Title>
          <Desc>Here are some of my experiences</Desc>
          <TimeLineSection>
            <Timeline>
              {experiences.map((experience, index) => (
                <TimelineItem key={index}>
                  <TimelineSeprator>
                    <TimelineDot variant='outlined' color='secondary' />
                    {index !== experiences.length-1 && <TimelineConnector /> }
                  </TimelineSeprator>
                  <TimelineContent sx={{py:"12px", px:2}}>
                    <ExperinceCard experience={experience} />
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </TimeLineSection>
        </Wrapper>
      </Container>
    );
  };
  

export default Experience