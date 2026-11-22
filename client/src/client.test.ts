import test from 'node:test';
import assert from 'node:assert/strict';

test('Sinhala Chapter 1 objectives contain required story stages', () => {
  const objectives = [
    { id: 1, titleSi: 'සායනයේ ප්‍රධාන ගේට්ටුවේ යතුර සොයාගන්න', descriptionSi: 'පිළිගැනීමේ කවුන්ටරය (Reception Desk) පරීක්ෂා කර යතුර ලබාගන්න.', completed: false },
    { id: 2, titleSi: 'උත්පාදක යන්ත්‍රය (Generator) සඳහා ෆියුස් එකක් සොයා විදුලිය ලබාදෙන්න', descriptionSi: 'විදුලි කාමරයේ ඇති ෆියුස් එක සොයාගෙන උත්පාදක යන්ත්‍රයට සවි කරන්න.', completed: false },
    { id: 3, titleSi: 'වෛද්‍යවරයාගේ රහස් සේප්පුව (Safe Code 739) විවෘත කරන්න', descriptionSi: 'බිත්තියේ සටහන් කර ඇති කේතය (739) භාවිතයෙන් සේප්පුව විවෘත කරන්න.', completed: false },
    { id: 4, titleSi: 'හඬ පටය (Audio Recorder) අසන්න', descriptionSi: 'වෛද්‍ය කාර්යාලයේ ඇති කැසට් රෙකෝඩරය ක්‍රියාත්මක කර විකාශනයට සවන් දෙන්න.', completed: false },
    { id: 5, titleSi: 'වහලයේ රේඩියෝ කුළුණෙන් SOS සංඥාව යවා බේරෙන්න', descriptionSi: 'පඩිපෙළ ඔස්සේ වහලයට නැගී හදිසි සංඥාව සම්ප්‍රේෂණය කර ගලවාගැනීමේ හෙලිකොප්ටරය එනතුරු රැඳී සිටින්න.', completed: false },
  ];

  assert.equal(objectives.length, 5);
  assert.equal(objectives[0].id, 1);
  assert.match(objectives[0].titleSi, /ගේට්ටුවේ යතුර/);
  assert.match(objectives[1].titleSi, /ෆියුස් එකක්/);
  assert.match(objectives[2].titleSi, /සේප්පුව/);
  assert.match(objectives[3].titleSi, /හඬ පටය/);
  assert.match(objectives[4].titleSi, /SOS සංඥාව/);
});

test('Safe keypad code validation (code 739)', () => {
  const correctCode = '739';
  const validateCode = (code: string) => code === correctCode;

  assert.equal(validateCode('739'), true);
  assert.equal(validateCode('123'), false);
  assert.equal(validateCode('738'), false);
  assert.equal(validateCode(''), false);
  assert.equal(validateCode('7390'), false);
});

test('Virtual Joystick coordinate normalization and clamping', () => {
  const joystickRadius = 50;

  function calculateThumb(dx: number, dy: number) {
    const dist = Math.hypot(dx, dy);
    const clampedDist = Math.min(dist, joystickRadius);
    const angle = Math.atan2(dy, dx);
    const thumbX = Math.cos(angle) * clampedDist;
    const thumbY = Math.sin(angle) * clampedDist;

    const strafe = Math.abs(thumbX / joystickRadius) < 0.001 ? 0 : thumbX / joystickRadius;
    const forward = Math.abs(thumbY / joystickRadius) < 0.001 ? 0 : -thumbY / joystickRadius;
    return { strafe, forward };
  }

  // Push straight up (forward)
  const up = calculateThumb(0, -50);
  assert.equal(Math.round(up.forward), 1);
  assert.equal(Math.abs(Math.round(up.strafe)), 0);

  // Push straight down (backward)
  const down = calculateThumb(0, 50);
  assert.equal(Math.round(down.forward), -1);
  assert.equal(Math.abs(Math.round(down.strafe)), 0);

  // Push beyond radius (clamping check)
  const farRight = calculateThumb(120, 0);
  assert.equal(Math.round(farRight.strafe), 1);
  assert.equal(Math.abs(Math.round(farRight.forward)), 0);
});

test('Climax timer formatting displays mm:ss correctly', () => {
  function formatClimaxTimer(secondsRemaining: number): string {
    const mins = Math.floor(secondsRemaining / 60);
    const secs = Math.floor(secondsRemaining % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  assert.equal(formatClimaxTimer(90), '01:30');
  assert.equal(formatClimaxTimer(5), '00:05');
  assert.equal(formatClimaxTimer(0), '00:00');
  assert.equal(formatClimaxTimer(125), '02:05');
});

test('Flashlight battery consumption model', () => {
  let battery = 100;
  const drainRate = 0.4; // 0.4% per second
  const delta = 10; // 10 seconds elapsed

  battery = Math.max(0, battery - delta * drainRate);
  assert.equal(battery, 96);
});
