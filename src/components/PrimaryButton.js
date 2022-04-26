import React from "react";
import styled from "styled-components";

const PrimaryButtonWrapper = styled.button`
  padding: 24px;
`;

const LoadingButtonWrapper = styled.div`
  font-weight: bold;
`;

export default function PrimaryButton({ children, onClick, isLoading }) {
  return (
    <PrimaryButtonWrapper onClick={onClick} disabled={isLoading}>
      {isLoading ? (
        children
      ) : (
        <LoadingButtonWrapper>Loading...</LoadingButtonWrapper>
      )}
    </PrimaryButtonWrapper>
  );
}
