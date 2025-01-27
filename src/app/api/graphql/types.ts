export interface Appointment {
    id: string;
    time: string;
    client: string;
    jobType: string;
    date: string;
    status: string;
  }
  
  export interface QueryResolvers {
    appointments: () => Appointment[];
    appointment: (parent: unknown, args: { id: string }) => Appointment | undefined;
  }
  
  export interface MutationResolvers {
    createAppointment: (
      parent: unknown,
      args: {
        time: string;
        client: string;
        jobType: string;
        date: string;
        status: string;
      }
    ) => Appointment;
    updateAppointment: (
      parent: unknown,
      args: {
        id: string;
        time?: string;
        client?: string;
        jobType?: string;
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
