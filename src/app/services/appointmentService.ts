import prisma from "@/lib/prismaClient";

export const getAppointments = async () => {
  return await prisma.appointment.findMany();
};

export const getAppointmentById = async (id: string) => {
  return await prisma.appointment.findUnique({ where: { id } });
};

export const createAppointment = async (data: {
  appointmentTime: string;
  customerName: string;
  service: string;
  salon: string;
  date: string;
  status: string;
}) => {
  return await prisma.appointment.create({ data });
};

export const updateAppointment = async (
  id: string,
  data: {
    appointmentTime?: string;
    customerName?: string;
    service?: string;
    salon?: string;
    date?: string;
    status?: string;
  }
) => {
  return await prisma.appointment.update({
    where: { id },
    data,
  });
};

export const deleteAppointment = async (id: string) => {
  await prisma.appointment.delete({ where: { id } });
  return true;
};
