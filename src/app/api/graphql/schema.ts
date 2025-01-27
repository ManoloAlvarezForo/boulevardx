import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Appointment {
    id: ID!
    time: String!
    client: String!
    jobType: String!
    date: String!
    status: String!
  }

  type Query {
    appointments: [Appointment!]!
    appointment(id: ID!): Appointment
  }

  type Mutation {
    createAppointment(
      time: String!
      client: String!
      jobType: String!
      date: String!
      status: String!
    ): Appointment!

    updateAppointment(
      id: ID!
      time: String
      client: String
      jobType: String
      date: String
      status: String
    ): Appointment!

    deleteAppointment(id: ID!): Boolean!
  }
`;
