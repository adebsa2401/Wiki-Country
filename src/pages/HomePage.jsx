import Filter from '../components/Filter';
import Header from '../components/Header';

export default function HomePage() {
  return (
    <div>
      <Header title="Population/Countries" />
      <main>
        <Filter />
      </main>
    </div>
  );
}
