import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 0.625rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  padding: 2rem 2.5rem;

  display: flex;
  gap: 2rem;

  margin-top: -5.5rem;

  .avatar {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 0.5rem;
  }
`

export const ProfileInfosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const NameAndLinkProfileInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 0.5rem;

  .nameAndLinkContent {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3 {
      color: ${(props) => props.theme['base-title']};
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
    }

    p {
      line-height: 160%;
    }
  }

  a {
    position: relative;
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 160%;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 50%;
    background-color: currentColor;
    transition:
      width 0.3s ease,
      left 0.3s ease;
  }

  a:hover::after {
    width: 100%;
    left: 0;
  }
`

export const BioAndTagsProfileInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  gap: 1.5rem;
`

export const TagsProfileInfos = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: flex-start;
  align-items: center;

  .tagContent {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    svg {
      color: ${(props) => props.theme['base-label']};
      width: 18px;
      height: 18px;
      margin-top: 0.1rem;
    }

    span {
      color: ${(props) => props.theme['base-subtitle']};
      line-height: 160%;
    }
  }
`
