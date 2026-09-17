/**
 * Devotional Web Audio API sound synthesizer
 * Produces an authentic traditional bronze temple bell chime (मंदिर की पावन घंटी)
 * using harmonic overtone synthesis with natural exponential decay.
 */

let audioCtx: AudioContext | null = null;

export function playTempleBell(): void {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    // Harmonic frequencies simulating Indian bronze ghanta (bell)
    const baseFreq = 440; // Fundamental tone
    const partials = [
      { freqRatio: 1.0, gain: 0.6, decay: 3.5 },
      { freqRatio: 1.51, gain: 0.4, decay: 2.8 },
      { freqRatio: 2.01, gain: 0.35, decay: 2.2 },
      { freqRatio: 2.76, gain: 0.25, decay: 1.8 },
      { freqRatio: 3.42, gain: 0.15, decay: 1.4 },
      { freqRatio: 4.18, gain: 0.1, decay: 1.0 },
    ];

    partials.forEach(({ freqRatio, gain, decay }) => {
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq * freqRatio, now);

      // Strike attack and gentle ringing decay
      gainNode.gain.setValueAtTime(0.001, now);
      gainNode.gain.exponentialRampToValueAtTime(gain, now + 0.015);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + decay);

      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + decay);
    });
  } catch (e) {
    console.debug('Audio context not permitted or supported yet', e);
  }
}
