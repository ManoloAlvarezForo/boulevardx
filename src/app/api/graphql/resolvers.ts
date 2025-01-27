type AppointmentInput = {
  time: string;
  client: string;
  jobType: string;
  date: string;
  status: string;
};

type AppointmentUpdateInput = AppointmentInput & {
  id: string;
};

import * as appointmentService from "@/app/services/appointmentService";

export const resolvers = {
  Query: {
    appointments: async (): Promise<
      ReturnType<typeof appointmentService.getAppointments>
    > => {
      return await appointmentService.getAppointments();
    },
    appointment: async (
      _: never,
      { id }: { id: string }
    ): Promise<ReturnType<typeof appointmentService.getAppointmentById>> => {
      return await appointmentService.getAppointmentById(id);
    },
  },
  Mutation: {
    createAppointment: async (
      _: never,
      { input }: { input: AppointmentInput }
    ): Promise<ReturnType<typeof appointmentService.createAppointment>> => {
      const { time, client, jobType, date, status } = input;

      if (!time || !client || !jobType || !date || !status) {
        throw new Error("All fields must be provided");
      }

      return await appointmentService.createAppointment({
        time,
        client,
        jobType,
        date,
        status,
      });
    },
    updateAppointment: async (
      _: never,
      { id, time, client, jobType, date, status }: AppointmentUpdateInput
    ): Promise<ReturnType<typeof appointmentService.updateAppointment>> => {
      return await appointmentService.updateAppointment(id, {
        time,
        client,
        jobType,
        date,
        status,
      });
    },
    deleteAppointment: async (
      _: never,
      { id }: { id: string }
    ): Promise<boolean> => {
      return await appointmentService.deleteAppointment(id);
    },
  },
};
