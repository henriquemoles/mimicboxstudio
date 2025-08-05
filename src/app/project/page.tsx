'use client';

import { Suspense } from 'react';
import ProjectClient from './ProjectClient';

export default function Page() {
  return (
    <Suspense fallback={<p>Carregando…</p>}>
      <ProjectClient />
    </Suspense>
  );
}
