import {
    getAppointments,
    getAppointmentById,
    createAppointment,
    updateAppointment,
    deleteAppointment,
  } from "./appointmentService";
  import { Resolvers } from "./types";
  
  export const resolvers: Resolvers = {
    Query: {
      appointments: () => getAppointments(),
      appointment: (_, { id }) => getAppointmentById(id),
    },
    Mutation: {
      createAppointment: (_, args) => createAppointment(args),
      updateAppointment: (_, { id, ...updates }) => updateAppointment(id, updates),
      deleteAppointment: (_, { id }) => deleteAppointment(id),
    },
  };
  