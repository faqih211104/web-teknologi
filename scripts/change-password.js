const bcrypt = require('bcryptjs');
const postgres = require('postgres');

const [email, newPassword] = process.argv.slice(2);

if (!email || !newPassword) {
  console.log('Cara penggunaan:');
  console.log('  node --env-file=.env scripts/change-password.js <email> <password_baru>');
  console.log('Contoh:');
  console.log('  node --env-file=.env scripts/change-password.js faqihnz24@gmail.com rahasia123');
  process.exit(1);
}

if (newPassword.length < 6) {
  console.error('Error: Password minimal 6 karakter!');
  process.exit(1);
}

async function main() {
  const sql = postgres(process.env.POSTGRES_URL, { ssl: 'require' });
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  
  const result = await sql`
    UPDATE users 
    SET password = ${hashedPassword} 
    WHERE email = ${email}
    RETURNING id, name, email;
  `;

  if (result.length === 0) {
    console.error(`Error: User dengan email "${email}" tidak ditemukan di database.`);
  } else {
    console.log(`Berhasil mengubah password untuk user: ${result[0].email} (${result[0].name})`);
    console.log(`Password baru: ${newPassword}`);
  }

  await sql.end();
}

main().catch(console.error);
