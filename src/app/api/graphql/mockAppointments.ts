import { Appointment } from "./types";

export const mockAppointments: Appointment[] = [
  {
    id: "1",
    appointmentTime: "1pm",
    customerName: "Wilmer West",
    service: "Balage",
    salon: "Balage",
    date: "2024-02-24",
    status: "pending",
  },
  {
    id: "2",
    appointmentTime: "2pm",
    customerName: "Jane Doe",
    service: "Haircut",
    salon: "Balage",
    date: "2024-02-25",
    status: "completed",
  },
];
