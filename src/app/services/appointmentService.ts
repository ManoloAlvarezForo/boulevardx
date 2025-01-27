import prisma from "@/lib/prismaClient";

export const getAppointments = async () => {
  return await prisma.appointment.findMany();
};

export const getAppointmentById = async (id: string) => {
  return await prisma.appointment.findUnique({ where: { id } });
};

export const createAppointment = async (data: {
  time: string;
  client: string;
  jobType: string;
  date: string;
  status: string;
}) => {
  return await prisma.appointment.create({ data });
};

export const updateAppointment = async (
  id: string,
  data: {
    time?: string;
    client?: string;
    jobType?: string;
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
