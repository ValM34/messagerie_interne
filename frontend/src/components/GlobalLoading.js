import React from "react";
import styled from "@emotion/styled";

const GlobalLoading = (props) => {
  return (
    <Container>
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: not-allowed;
`;

export default GlobalLoading;
