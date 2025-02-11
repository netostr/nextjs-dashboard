// import { db } from '@vercel/postgres';

// const client = await db.connect();

// async function deleteAll() {
//   await client.sql`
//     TRUNCATE TABLE invoices, customers, revenue, users RESTART IDENTITY CASCADE
//   `;
// }



export async function GET() {
  return Response.json({
    message:
      'Uncomment this file and remove this line. You can delete this file when you are finished.',
  });
  //   try {
  //     await client.sql`BEGIN`;
  //     await deleteAll();
  //     await client.sql`COMMIT`;

  //     return Response.json({ message: 'Database deleted successfully' });
  //   } catch (error) {
  //     await client.sql`ROLLBACK`;
  //     return Response.json({ error }, { status: 500 });
  //   }
}
