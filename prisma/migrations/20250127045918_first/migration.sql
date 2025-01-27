-- CreateTable
CREATE TABLE "Appointment" (
    "id" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "jobType" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);
