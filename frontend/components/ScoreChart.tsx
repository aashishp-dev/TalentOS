export default function ScoreChart() {

  return (

    <div className="bg-slate-900 rounded-2xl p-6">

      <h2 className="text-xl font-bold mb-6">

        Score Breakdown

      </h2>

      <div className="space-y-5">

        {[
          ["Skill",80],
          ["Career",90],
          ["Behavior",76],
          ["Semantic",88]
        ].map(([name,value])=>(

          <div key={String(name)}>

            <div className="flex justify-between mb-2">

              <span>{name}</span>

              <span>{value}%</span>

            </div>

            <div className="w-full h-3 bg-slate-800 rounded">

              <div
                className="bg-green-500 h-3 rounded"
                style={{
                  width:`${value}%`
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}