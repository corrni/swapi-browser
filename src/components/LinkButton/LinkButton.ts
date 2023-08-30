import { styled } from 'styled-components'

export const LinkButton = styled.button`
  border: 0;
  border-radius: 0.25rem;
  color: var(--color-slate-600);
  background: var(--color-slate-300);
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.2;
  white-space: nowrap;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  margin: 2rem auto;
  display: block;
  cursor: pointer;

  &:disabled {
    color: var(--color-slate-500);
    cursor: default;
  }
`
