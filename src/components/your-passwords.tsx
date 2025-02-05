import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for demonstration
const passwords = [
  { id: 1, website: "example.com", username: "johndoe@example.com" },
  { id: 2, website: "anothersite.com", username: "jane.doe@email.com" },
]

export function YourPasswords() {
  return (
    <div className="space-y-4">
      {passwords.map((password) => (
        <Card key={password.id}>
          <CardHeader>
            <CardTitle>{password.website}</CardTitle>
            <CardDescription>{password.username}</CardDescription>
          </CardHeader>
          <CardContent>{/* Add password actions (e.g., copy, edit, delete) here */}</CardContent>
        </Card>
      ))}
    </div>
  )
}

