import Container from '@/components/Container'
import LocationFilter from '@/components/LocationFilter'
import NavBar from '@/components/layout/NavBar'
import { TooltipProvider } from '@/components/ui/tooltip'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'StaySavvy || Admin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
          <TooltipProvider>
          <NavBar />
              <LocationFilter />
              <Container>
                  {children}
                </Container>
          </TooltipProvider>
    </div>
  )
}
