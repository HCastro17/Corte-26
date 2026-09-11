import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Limpieza previa para evitar duplicados en pruebas
  await prisma.appointment.deleteMany();
  await prisma.service.deleteMany();
  await prisma.user.deleteMany();

  // 1. Crear Barberos
  const barbero1 = await prisma.user.create({
    data: {
      email: 'carlos.barbero@gmail.com',
      name: 'Carlos López',
      role: Role.BARBERO,
    },
  });

  const barbero2 = await prisma.user.create({
    data: {
      email: 'mario.barbero@gmail.com',
      name: 'Mario Santos',
      role: Role.BARBERO,
    },
  });

  // 2. Crear Cliente de prueba
  await prisma.user.create({
    data: {
      email: 'cliente.prueba@gmail.com',
      name: 'Juan Pérez',
      role: Role.CLIENTE,
      points: 120,
    },
  });

  // 3. Crear Servicios de la Barbería
  await prisma.service.createMany({
    data: [
      {
        name: 'Corte Tradicional',
        description: 'Corte clásico a máquina y tijera',
        price: 45.0,
        durationMinutes: 25,
      },
      {
        name: 'Corte Fade + Arreglo de Barba',
        description: 'Degradado al ras, toalla caliente y perfilado de barba',
        price: 65.0,
        durationMinutes: 35,
      },
      {
        name: 'Arreglo de Barba',
        description: 'Perfilado con navaja y bálsamo hidratante',
        price: 30.0,
        durationMinutes: 20,
      },
    ],
  });

  console.log('Seed ejecutado: Barberos, cliente y servicios creados exitosamente.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });