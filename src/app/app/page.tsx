import { AppHeader } from '~/components'
import { IconInfoCircle } from '@tabler/icons-react'

export default function HomePage() {
  return (
    <main className="grid h-full grid-rows-[auto,_1fr]">
      <AppHeader />
      <div className="p-32">
        <div className="flex w-full items-center gap-3 rounded-lg border p-3">
          <IconInfoCircle className="h-6 w-6 text-muted-foreground" />
          <pre>
            Edit{' '}
            <span className="rounded bg-foreground px-2 py-0.5 text-background text-lime-400 dark:bg-border">
              src/app/app/page.tsx
            </span>{' '}
            to make changes to this page.
          </pre>
        </div>
      </div>
    </main>
  )
}
