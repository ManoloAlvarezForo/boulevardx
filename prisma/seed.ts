import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const appointments = [
    {
      appointmentTime: "10:00 am",
      customerName: "John Doe",
      service: "Balayage",
      salon: "Salon A",
      date: "2025-01-01",
      status: "Pending",
    },
    {
      appointmentTime: "02:00 pm",
      customerName: "Jane Smith",
      service: "Men's Cut",
      salon: "Salon B",
      date: "2025-01-02",
      status: "Completed",
    },
    {
      appointmentTime: "09:00 am",
      customerName: "Alice Johnson",
      service: "Blowout",
      salon: "Salon A",
      date: "2025-01-03",
      status: "Pending",
    },
    {
      appointmentTime: "11:00 am",
      customerName: "Bob Brown",
      service: "Updo",
      salon: "Salon C",
      date: "2025-01-04",
      status: "Pending",
    },
    {
      appointmentTime: "03:00 pm",
      customerName: "Charlie Davis",
      service: "Balayage",
      salon: "Salon B",
      date: "2025-01-05",
      status: "Completed",
    },
    {
      appointmentTime: "04:00 pm",
      customerName: "David Clark",
      service: "Men's Cut",
      salon: "Salon A",
      date: "2025-01-06",
      status: "Pending",
    },
    {
      appointmentTime: "08:00 am",
      customerName: "Eve White",
      service: "Hair Color",
      salon: "Salon C",
      date: "2025-01-07",
      status: "Completed",
    },
    {
      appointmentTime: "12:00 pm",
      customerName: "Frank Green",
      service: "Blowout",
      salon: "Salon B",
      date: "2025-01-08",
      status: "Pending",
    },
    {
      appointmentTime: "01:00 pm",
      customerName: "Grace Black",
      service: "Updo",
      salon: "Salon A",
      date: "2025-01-09",
      status: "Completed",
    },
    {
      appointmentTime: "10:00 am",
      customerName: "Hank White",
      service: "Balayage",
      salon: "Salon C",
      date: "2025-01-10",
      status: "Pending",
    },
    {
      appointmentTime: "02:00 pm",
      customerName: "Ivy Red",
      service: "Men's Cut",
      salon: "Salon B",
      date: "2025-01-11",
      status: "Completed",
    },
    {
      appointmentTime: "03:00 pm",
      customerName: "Jack Blue",
      service: "Blowout",
      salon: "Salon A",
      date: "2025-01-12",
      status: "Pending",
    },
    {
      appointmentTime: "06:00 pm",
      customerName: "Kathy Gray",
      service: "Hair Color",
      salon: "Salon C",
      date: "2025-01-13",
      status: "Completed",
    },
    {
      appointmentTime: "07:00 pm",
      customerName: "Leo Yellow",
      service: "Updo",
      salon: "Salon B",
      date: "2025-01-14",
      status: "Pending",
    },
    {
      appointmentTime: "05:00 pm",
      customerName: "Mia Silver",
      service: "Balayage",
      salon: "Salon A",
      date: "2025-01-15",
      status: "Completed",
    },
  ];

  for (const appointment of appointments) {
    await prisma.appointment.create({
      data: appointment,
    });
  }

  console.log("Appointments created successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
