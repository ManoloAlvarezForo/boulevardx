import { Appointment } from "./types";

export const mockAppointments: Appointment[] = [
  {
    id: "1",
    time: "1pm",
    client: "Wilmer West",
    jobType: "Balage",
    date: "2024-02-24",
    status: "pending",
  },
  {
    id: "2",
    time: "2pm",
    client: "Jane Doe",
    jobType: "Haircut",
    date: "2024-02-25",
    status: "completed",
  },
];
