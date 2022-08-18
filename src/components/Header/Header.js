import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <StyledButton>
              <Search size={24} />
            </StyledButton>
            <StyledButton>
              <Menu size={24} />
            </StyledButton>
          </ActionGroup>
          <DesktopHeader>
            <Logo />
          </DesktopHeader>
          <ActionGroup>
            <MobileUserButton>
              <User size={24} />
            </MobileUserButton>
            <DesktopUserButton>
              <Button>
                Subscribe
              </Button>
              <Link>
                Already a subscriber?
              </Link>
            </DesktopUserButton>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
    </header>
  );
};

const Link = styled.a`
  color: var(--color-gray-900);
  font-weight: var(--font-weight-normal);
  font-family: var(--font-serif);
  font-style: italic;
  text-decoration: underline;
  font-size: 0.875rem;
  margin-top: 0.57em;
`

const StyledButton = styled.button`
  @media ${QUERIES.laptopAndUp} {
    color: var(--color-gray-900);
  }
`

const DesktopUserButton = styled(StyledButton)`
  display: none;
  
  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const MobileUserButton = styled(StyledButton)`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    background: var(--color-gray-100);
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const DesktopHeader = styled(MaxWidthWrapper)`
  display: none;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  color: var(--color-offblack);

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

export default Header;
