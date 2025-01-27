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

  input AppointmentInput {
    time: String!
    client: String!
    jobType: String!
    date: String!
    status: String!
  }

  input UpdateAppointmentInput {
    time: String
    client: String
    jobType: String
    date: String
    status: String
  }

  type Query {
    appointments: [Appointment!]!
    appointment(id: ID!): Appointment
  }

  type Mutation {
    createAppointment(input: AppointmentInput!): Appointment!
    updateAppointment(id: ID!, input: UpdateAppointmentInput!): Appointment!
    deleteAppointment(id: ID!): Boolean!
  }
`;
