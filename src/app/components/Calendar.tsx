import React from "react";
import moment from "moment";
import { Appointment } from "../api/graphql/types";
interface CalendarProps {
  appointments: Appointment[];
}

const Calendar: React.FC<CalendarProps> = ({ appointments }) => {
  const startOfMonth = moment().startOf("month");
  const endOfMonth = moment().endOf("month");

  const startDayOfWeek = startOfMonth.day();
  const totalDays = endOfMonth.date();

  const calendarDays: Array<string | null> = Array(startDayOfWeek)
    .fill(null)
    .concat(
      [...Array(totalDays)].map((_, i) =>
        startOfMonth.clone().add(i, "days").format("YYYY-MM-DD")
      )
    );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Appointments Calendar</h2>
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-medium text-gray-600">
            {day}
          </div>
        ))}

        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`h-24 border rounded-lg p-1 ${
              day ? "bg-white" : "bg-gray-200"
            } flex flex-col items-center`}
          >
            {day && (
              <>
                <span className="text-sm font-bold">{moment(day).date()}</span>
                <div className="mt-2 space-y-2">
                  {appointments
                    .filter((appointment) => appointment.date === day)
                    .map((appointment) => (
                      <div
                        key={appointment.id}
                        className="bg-white rounded-lg shadow p-3 text-gray-800"
                      >
                        <p className="text-sm font-semibold text-gray-900">
                          {appointment.customerName}
                        </p>
                        <p className="text-xs text-gray-500">
                          {appointment.service}
                        </p>
                        <p className="text-xs text-gray-500">
                          {appointment.appointmentTime} - {appointment.service}
                        </p>
                      </div>
                    ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
