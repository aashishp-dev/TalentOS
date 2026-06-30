const cards = [

  {
    title: "Candidates",
    value: "100K"
  },

  {
    title: "Top Ranked",
    value: "100"
  },

  {
    title: "Hybrid Models",
    value: "4"
  },

  {
    title: "Status",
    value: "LIVE"
  }

];

export default function StatsCards() {

  return (

    <div className="grid grid-cols-4 gap-6">

      {cards.map((card) => (

        <div
          key={card.title}
          className="rounded-2xl bg-slate-900 p-6"
        >

          <p className="text-slate-400">
            {card.title}
          </p>

          <h2 className="text-4xl font-bold mt-2">

            {card.value}

          </h2>

        </div>

      ))}

    </div>

  );

}