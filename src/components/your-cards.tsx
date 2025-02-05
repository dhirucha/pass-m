import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for demonstration
const cards = [
  { id: 1, last4: "1234", brand: "Visa", expiry: "12/24" },
  { id: 2, last4: "5678", brand: "Mastercard", expiry: "06/25" },
]

export function YourCards() {
  return (
    <div className="space-y-4">
      {cards.map((card) => (
        <Card key={card.id}>
          <CardHeader>
            <CardTitle>
              {card.brand} •••• {card.last4}
            </CardTitle>
            <CardDescription>Expires {card.expiry}</CardDescription>
          </CardHeader>
          <CardContent>{/* Add more card details or actions here */}</CardContent>
        </Card>
      ))}
    </div>
  )
}

