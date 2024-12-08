import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const PostInfoContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 0.625rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  padding: 2rem 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  margin-top: -5.5rem;
`

export const HeadContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .backBtn {
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 100%;
    text-transform: uppercase;
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    text-decoration: none;
    position: relative;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    transition: transform 0.15s;

    &::before {
      content: '';
      position: absolute;
      top: -10px;
      bottom: -10px;
      left: -10px;
      right: -10px;
    }
  }

  .backBtn:hover {
    transform: translateY(-5px);
  }

  .linkToGithub {
    position: relative;
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 160%;
    text-transform: uppercase;

    display: flex;
    align-items: baseline;
    gap: 0.5rem;
  }

  .linkToGithub::after {
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

  .linkToGithub:hover::after {
    width: 100%;
    left: 0;
  }
`

export const TitleAndTagsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h1 {
    color: ${(props) => props.theme['base-title']};

    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`

export const TagsPostInfos = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: flex-start;
  align-items: center;

  .tagContent {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: ${(props) => props.theme['base-span']};

    svg {
      width: 18px;
      height: 18px;
    }

    span {
      line-height: 160%;
    }
  }
`

export const PostDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2.5rem;
`
