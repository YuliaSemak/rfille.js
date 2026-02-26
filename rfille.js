import { readFile } from 'node:fs/promises';

const args = process.argv;
const fileName = args[2];

if (!fileName) {
  console.log('Будь ласка, вкажіть імʼя файлу.');
  console.log('Приклад: node rfile.js book.txt');
  process.exit(1);
}

try {
  const data = await readFile(fileName, 'utf-8');
  const lines = data.split('\n');
  console.log(`Кількість рядків у файлі "${fileName}": ${lines.length}`);
} catch (error) {
  console.error('Помилка при читанні файлу:', error.message);
}
