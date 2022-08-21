import React from 'react';
import styled from 'styled-components/macro';

import {
    MAIN_STORY,
    OPINION_STORIES,
    SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import {QUERIES} from "../../constants";

const MainStoryGrid = () => {
    return (
        <Wrapper>
            <MainStorySection>
                <MainStory {...MAIN_STORY} />
            </MainStorySection>

            <SecondaryStorySection>
                <StoryList>
                    {SECONDARY_STORIES.map((story, index) => (
                        <SecondaryStoryWrapper key={story.id}>
                            <SecondaryStory  {...story} />
                        </SecondaryStoryWrapper>
                    ))}
                </StoryList>
            </SecondaryStorySection>

            <OpinionSection>
                <SectionTitle>Opinion</SectionTitle>
                <OpinionList>
                    {OPINION_STORIES.map((story, index) => (
                        <OpinionStoryWrapper key={story.id}>
                            <OpinionStory {...story} />
                        </OpinionStoryWrapper>
                    ))}
                </OpinionList>
            </OpinionSection>

            <AdvertisementSection>
                <Advertisement/>
            </AdvertisementSection>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    gap: 48px 0;
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
    'main-story secondary-stories'
    'advertisement advertisement'
    'opinion-stories opinion-stories';
  }

  @media ${QUERIES.laptopAndUp} {
    gap: 0px;
    grid-template-columns: 5fr 4fr 3fr;
    grid-template-areas:
    'main-story secondary-stories opinion-stories '
    'main-story advertisement advertisement';
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    padding-right: 16px;
    margin-right: 16px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const SecondaryStoryWrapper = styled.div`
  padding-bottom: 1rem;
  margin-bottom: 1rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-gray-300);
  }
`

const OpinionStoryWrapper = styled(SecondaryStoryWrapper)`
  flex: 1;
  
  @media ${QUERIES.tabletOnly} {
    &:not(:last-child) {
      border-bottom: none;
    }
  }
`

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionList = styled(StoryList)`
  gap: 32px;
  
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
  }

  @media ${QUERIES.laptopAndUp} {
    gap: revert;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.laptopAndUp} {
    padding-left: 16px;
    margin-left: 16px;
    border-left: 1px solid var(--color-gray-300);
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    border-top: 1px solid var(--color-gray-300);
    padding-top: 16px;
    margin-top: 16px;
  }
`;

export default MainStoryGrid;
