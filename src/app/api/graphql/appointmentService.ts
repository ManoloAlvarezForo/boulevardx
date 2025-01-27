import { mockAppointments } from "./mockAppointments";
import { Appointment } from "./types";

export const getAppointments = (): Appointment[] => mockAppointments;

export const getAppointmentById = (id: string): Appointment => {
  const appointment = mockAppointments.find((appt) => appt.id === id);
  if (!appointment) {
    throw new Error("Appointment not found");
  }
  return appointment;
};

export const createAppointment = (data: Omit<Appointment, "id">): Appointment => {
  const newAppointment: Appointment = {
    id: String(mockAppointments.length + 1),
    ...data,
  };
  mockAppointments.push(newAppointment);
  return newAppointment;
};

export const updateAppointment = (
    id: string,
    updates: Partial<Omit<Appointment, "id">>
  ): Appointment => {
    const appointment = getAppointmentById(id);
  
    Object.keys(updates).forEach((key) => {
      const typedKey = key as keyof Omit<Appointment, "id">;
      if (updates[typedKey] !== undefined) {
        appointment[typedKey] = updates[typedKey] as never;
      }
    });
    return appointment;
  };
  

export const deleteAppointment = (id: string): boolean => {
  const index = mockAppointments.findIndex((appt) => appt.id === id);
  if (index === -1) {
    throw new Error("Appointment not found");
  }
  mockAppointments.splice(index, 1);
  return true;
};
