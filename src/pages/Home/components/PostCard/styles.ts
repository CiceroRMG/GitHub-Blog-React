import styled from 'styled-components'

export const PostCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  border-radius: 0.625rem;
  border: 2px solid transparent;
  background: ${(props) => props.theme['base-post']};

  width: 26rem;
  padding: 2rem;

  transition:
    border 0.2s,
    transform 0.2s;

  .headerContent {
    display: flex;
    align-items: flex-start;
    gap: 2rem;

    h2 {
      color: ${(props) => props.theme['base-title']};

      font-size: 1.25rem;
      font-weight: 700;
      line-height: 160%;
      flex: 1;
    }

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.875rem;
      line-height: 160%;
    }
  }

  p {
    text-align: justify;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
    cursor: pointer;
    transform: scale(1.03);
  }
`
