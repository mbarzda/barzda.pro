import { css, styled } from 'solid-styled-components';

const Line = styled('p')`
  font-size: 1.25rem;
`;

export const Contacts = () => (
  <>
    <h3
      class={css`
        text-align: center;
      `}
    >
      Contact me
    </h3>
    <Line>
      Email{' '}
      <a class="email" href="mailto:martynas@barzda.pro">
        martynas@barzda.pro
      </a>
    </Line>
    <Line>
      Mobile:{' '}
      <a class="tel" href="tel:+37067350413">
        +370 673 50413
      </a>
    </Line>
    <Line>
      LinkedIn:{' '}
      <a href="//www.linkedin.com/in/mbarzda" target="_blank">
        /in/mbarzda
      </a>
    </Line>
  </>
);
