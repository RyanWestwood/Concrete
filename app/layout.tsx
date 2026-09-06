import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Ethans Concrete | Thoughtfully poured in Arkansas',description:'Patios, driveways, and small concrete projects in Arkansas. One craftsman. Every detail. Get in touch with Ethan about your space.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
