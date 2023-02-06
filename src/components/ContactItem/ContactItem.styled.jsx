import styled from '@emotion/styled';
import { btn, font } from 'components/Style/mixins';

export const ItemContact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonDeleteContact = styled.button`
  ${font({ fs: 14, fw: 400, lh: 18 })};
  ${btn};
  padding: 5px 10px;
  margin: 10px 0px;
`;
