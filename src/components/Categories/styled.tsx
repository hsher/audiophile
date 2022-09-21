import { BLACK, GRAY } from "src/design-system/colors";
import styled from "styled-components";

export const CategoryWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  padding: 200px 0 168px;
`;

export const Category = styled.div`
  align-items: center;
  background-color: ${GRAY};
  border-radius: 8px;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 60px 15px 15px 15px;
  position: relative;
`;

export const ImageWrapper = styled.div`
  left: 50%;
  position: absolute;
  text-align: center;
  top: 0;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export const Shadow = styled.div`
  background: ${BLACK};
  filter: blur(21.7463px);
  height: 18px;
  margin-bottom: 38px;
  width: 122px;
`;

export const LinkText = styled.span`
  padding-right: 10px;
`;
