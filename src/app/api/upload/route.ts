import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const overwrite = formData.get('overwrite') === 'true';
    const subDir = formData.get('subDir') as string || '';

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = file.name.replace(/\s+/g, '-'); // Sanitize filename
    
    // Construct target path
    const targetBaseDir = path.join(process.cwd(), 'public', 'images');
    const targetDir = subDir ? path.join(targetBaseDir, subDir) : targetBaseDir;
    const targetPath = path.join(targetDir, fileName);

    // Create directory if it doesn't exist
    await fs.mkdir(targetDir, { recursive: true });

    // Check for existence
    try {
      await fs.access(targetPath);
      // If we reach here, file exists
      if (!overwrite) {
        return NextResponse.json({ 
          error: 'File already exists', 
          code: 'FILE_EXISTS',
          fileName 
        }, { status: 409 });
      }
    } catch (e) {
      // File doesn't exist, proceed
    }

    // Write file
    await fs.writeFile(targetPath, buffer);

    const publicPath = subDir ? `/images/${subDir}/${fileName}` : `/images/${fileName}`;

    return NextResponse.json({ 
      success: true, 
      path: publicPath 
    });

  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
