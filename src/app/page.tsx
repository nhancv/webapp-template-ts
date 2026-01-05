import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-24">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
          <CardDescription>This is a clean Next.js template with Shadcn UI.</CardDescription>
        </CardHeader>
      </Card>
    </main>
  );
}
