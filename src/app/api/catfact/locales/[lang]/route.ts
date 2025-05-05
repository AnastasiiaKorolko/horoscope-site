import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: { lang: string } }
) {
  const lang = params.lang;
  try {
    // Шлях до локалізаційних файлів
    const filePath = path.join(process.cwd(), 'src', 'i18n', 'locales', lang, 'common.json');
    const data = fs.readFileSync(filePath, 'utf8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    console.error(`Error loading locale ${lang}:`, error);
    return NextResponse.json({ error: 'Locale not found' }, { status: 404 });
  }
}