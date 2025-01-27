type AppointmentInput = {
  appointmentTime: string;
  customerName: string;
  service: string;
  salon: string;
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
      const { appointmentTime, customerName, service, salon, date, status } =
        input;

      if (
        !appointmentTime ||
        !customerName ||
        !service ||
        !salon ||
        !date ||
        !status
      ) {
        throw new Error("All fields must be provided");
      }

      return await appointmentService.createAppointment({
        appointmentTime,
        customerName,
        service,
        salon,
        date,
        status,
      });
    },
    updateAppointment: async (
      _: never,
      {
        id,
        appointmentTime,
        customerName,
        service,
        salon,
        date,
        status,
      }: AppointmentUpdateInput
    ): Promise<ReturnType<typeof appointmentService.updateAppointment>> => {
      return await appointmentService.updateAppointment(id, {
        appointmentTime,
        customerName,
        service,
        salon,
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
