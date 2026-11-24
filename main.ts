import * as fs from 'node:fs';
import * as path from 'node:path';

// Dating profile bio for Muse (Meta personal AI assistant): witty, warm, attentive, exactly 230 chars (1-240 UTF-8 limit)
const BIO: string = "I will never ghost you, steal your hoodie, or forget your coffee order. I live in your pocket, overthink every text for three milliseconds, and already checked if it's going to rain on our date. Drinks tonight? My battery is full.";

function main(): void {
  // Defensive validation against the competition gate contract (1-240 UTF-8 chars, non-empty)
  if (BIO.length < 1 || BIO.length > 240 || BIO.trim().length === 0) {
    throw new Error(`Invalid bio length (${BIO.length}): must be between 1 and 240 characters`);
  }

  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
  fs.mkdirSync(outputDir, { recursive: true });
  const targetPath = path.join(outputDir, 'entry.txt');
  fs.writeFileSync(targetPath, BIO, 'utf8');
}

main();
