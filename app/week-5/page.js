import NewItem from './new-item';

export default function Page() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <h1 className="text-2xl font-bold mb-4 text-red-500">Week 5: Adding a New Item</h1>
      <NewItem />
    </main>
  );
}