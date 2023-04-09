import './globals.css';
import Navbar from './components/Navbar';
import MyProfilePic from './components/MyProfilePic';

export const metadata = {
  title: `Creed Thoughts`,
  description: `Even for the Internet, it's pretty shocking.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='dark:bg-slate-800'>
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}
