import React from 'react';
import Filter from '../components/Filter';
import Header from '../components/Header';

export default function DetailsPage() {
  return (
    <div>
      <Header title="Population/Cities" />
      <main>
        <Filter />
        <div className="cities-list">
          Under construction
        </div>
      </main>
    </div>
  );
}
