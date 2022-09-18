import styled from "styled-components";

export const Title = styled.div`
  padding: 20px;
  color: #1c1c1c;
  font-family: inter;
  text-align: center;
  font-weight: 600;
  font-size: 30px;
`;

export const MainContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TableContainer = styled.div`
  width: 80%;
  max-width: 933px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #f0f0f0;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02);
  border-radius: 14px;
`;
export const TableHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 18px;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  border-radius: 15px 15px 0px 0px;
`;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: #f5f5f5;
  margin-bottom: 15px;
`;
export const SearchBar = styled.input`
  box-sizing: border-box;
  width: 80%;
  font-family: inter;
  height: 45px;
  background: #f5f5f5;
  padding: 10px;
  border: 1px solid #e0e0df;
  border-radius: 8px 0px 0px 8px;
`;
export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderLabel = styled.div`
  width: 33%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: #616161;
`;

export const RowsContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
