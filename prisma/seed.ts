import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const appointments = [
    { time: '10:00 am', client: 'John Doe', jobType: 'Balayage', date: '2025-02-01', status: 'Pending' },
    { time: '02:00 pm', client: 'Jane Smith', jobType: 'Men\'s Cut', date: '2025-02-02', status: 'Completed' },
    { time: '09:00 am', client: 'Alice Johnson', jobType: 'Blowout', date: '2025-02-03', status: 'Pending' },
    { time: '11:00 am', client: 'Bob Brown', jobType: 'Updo', date: '2025-02-04', status: 'Pending' },
    { time: '03:00 pm', client: 'Charlie Davis', jobType: 'Balayage', date: '2025-02-05', status: 'Completed' },
    { time: '04:00 pm', client: 'David Clark', jobType: 'Men\'s Cut', date: '2025-02-06', status: 'Pending' },
    { time: '08:00 am', client: 'Eve White', jobType: 'Hair Color', date: '2025-02-07', status: 'Completed' },
    { time: '12:00 pm', client: 'Frank Green', jobType: 'Blowout', date: '2025-02-08', status: 'Pending' },
    { time: '01:00 pm', client: 'Grace Black', jobType: 'Updo', date: '2025-02-09', status: 'Completed' },
    { time: '10:00 am', client: 'Hank White', jobType: 'Balayage', date: '2025-02-10', status: 'Pending' },
    { time: '02:00 pm', client: 'Ivy Red', jobType: 'Men\'s Cut', date: '2025-02-11', status: 'Completed' },
    { time: '03:00 pm', client: 'Jack Blue', jobType: 'Blowout', date: '2025-02-12', status: 'Pending' },
    { time: '06:00 pm', client: 'Kathy Gray', jobType: 'Hair Color', date: '2025-02-13', status: 'Completed' },
    { time: '07:00 pm', client: 'Leo Yellow', jobType: 'Updo', date: '2025-02-14', status: 'Pending' },
    { time: '05:00 pm', client: 'Mia Silver', jobType: 'Balayage', date: '2025-02-15', status: 'Completed' }
  ];

  // Insertar las citas en la base de datos
  for (const appointment of appointments) {
    await prisma.appointment.create({
      data: appointment,
    });
  }

  console.log('Appointments created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
