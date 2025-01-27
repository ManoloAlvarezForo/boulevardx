export interface Appointment {
  id: string;
  appointmentTime: string;
  customerName: string;
  service: string;
  salon: string;
  date: string;
  status: string;
}

export interface QueryResolvers {
  appointments: () => Appointment[];
  appointment: (
    parent: unknown,
    args: { id: string }
  ) => Appointment | undefined;
}

export interface MutationResolvers {
  createAppointment: (
    parent: unknown,
    args: {
      appointmentTime: string;
      customerName: string;
      service: string;
      salon: string;
      date: string;
      status: string;
    }
  ) => Appointment;
  updateAppointment: (
    parent: unknown,
    args: {
      id: string;
      appointmentTime?: string;
      customerName?: string;
      service?: string;
      salon: string;
      date?: string;
      status?: string;
    }
  ) => Appointment | null;
  deleteAppointment: (parent: unknown, args: { id: string }) => boolean;
}

export type Resolvers = {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
};
