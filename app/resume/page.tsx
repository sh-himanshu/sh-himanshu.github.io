'use client';

import { SITE_CONFIG } from '@/lib/data';
import { useEffect } from 'react';

export default function ResumePage() {
  useEffect(() => {
    window.location.href = SITE_CONFIG.resumeUrl;
  }, []);

  return null;
}
