"use client";

import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient"; // Asegúrate de que la ruta sea correcta

export default function ApolloProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
