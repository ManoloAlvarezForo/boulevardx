/*
  Warnings:

  - You are about to drop the column `client` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `jobType` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Appointment` table. All the data in the column will be lost.
  - Added the required column `appointmentTime` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerName` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salon` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "client",
DROP COLUMN "jobType",
DROP COLUMN "time",
ADD COLUMN     "appointmentTime" TEXT NOT NULL,
ADD COLUMN     "customerName" TEXT NOT NULL,
ADD COLUMN     "salon" TEXT NOT NULL,
ADD COLUMN     "service" TEXT NOT NULL;
