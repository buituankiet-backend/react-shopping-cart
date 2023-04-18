import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   front-family: Arial, Helvetica, sans-serif;
   border-bottom: 1px solid lightblue;
   padding-bottom: 20px;

   div {
      flex: 1;
   }

   .information,
   .buttons {
      display: flex;
      justify-content: space-between;
   }

   img {
      max-width: 40px;
      max-height: 40px;
      object-fit: cover;
      margin: 10px 0 20px 20px;
   }
`;
