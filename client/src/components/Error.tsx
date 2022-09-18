import React from "react";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
export default function Error() {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>There was an error processing your request</AlertTitle>
    </Alert>
  );
}
