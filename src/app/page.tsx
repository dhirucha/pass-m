import { AddCard } from "@/components/add-card"
import { AddPassword } from "@/components/add-password"
import { YourCards } from "@/components/your-cards"
import { YourPasswords } from "@/components/your-passwords"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Pass-m - Home',
  description: 'This is homepage of password manager',
}

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <section className="bg-card rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-card-foreground">Add a credit card</h2>
            <AddCard />
          </section>

          <section className="bg-card rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-card-foreground">Add a password</h2>
            <AddPassword />
          </section>
        </div>

        <div className="space-y-6">
          <section className="bg-card rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-card-foreground">Your Cards</h2>
            <YourCards />
          </section>

          <section className="bg-card rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-card-foreground">Your passwords</h2>
            <YourPasswords />
          </section>
        </div>
      </div>
    </div>
  )
}

