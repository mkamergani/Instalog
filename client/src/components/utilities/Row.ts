import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const LabelContainer = styled.div`
  width: 33%;
  min-width: 200px;
  display: flex;
  align-items: center;
`;
export const DateContainer = styled.div`
  width: 33%;
  min-width: 200px;
  display: flex;
  align: items-center;
  justify-content: space-between;
`;
export const Label = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #1c1c1c;
`;

export const ActorIcon = styled.div`
  margin-right: 11px;
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: linear-gradient(138.62deg, #f3994a 14.17%, #b325e2 84.99%);
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #ffffff;
`;
export const Expand = styled.button`
  width: 30px;
  background: #ffffff;
  text-align: center;
  border: 0;
`;
