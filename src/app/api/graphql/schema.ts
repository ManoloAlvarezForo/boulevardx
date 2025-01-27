import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Appointment {
    id: ID!
    appointmentTime: String!
    customerName: String!
    service: String!
    salon: String!
    date: String!
    status: String!
  }

  input AppointmentInput {
    appointmentTime: String!
    customerName: String!
    service: String!
    salon: String!
    date: String!
    status: String!
  }

  input UpdateAppointmentInput {
    appointmentTime: String
    customerName: String
    service: String!
    salon: String!
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
