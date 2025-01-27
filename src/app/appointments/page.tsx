// src/app/appointments/page.tsx
import { gql } from "@apollo/client";
import client from "../../lib/apolloClient";
import Calendar from "../components/Calendar";

const GET_APPOINTMENTS = gql`
  query GetAppointments {
    appointments {
      id
      client
      jobType
      date
      time
      status
    }
  }
`;

export default async function AppointmentsPage() {
  const { data, error, loading } = await client.query({ query: GET_APPOINTMENTS });

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error loading appointments: {error.message}</div>;

  return (
    <div className="p-6">
      <Calendar appointments={data.appointments} />
    </div>
  );
}
