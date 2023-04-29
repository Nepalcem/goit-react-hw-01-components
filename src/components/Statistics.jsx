const Statistics = ({ title = '', stats }) => {
  return (
    <section class="statistics">
      {title.length > 0 && <h2 class="title">{title}</h2>}

      <ul class="stat-list">
        {stats.map(stat => {
         return ( <li key={stat.id} class="item">
            <span class="label">{stat.label}</span>
            <span class="percentage">{stat.percentage}</span>
          </li>)
        })}
      </ul>
    </section>
  );
};

export default Statistics;