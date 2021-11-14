import css from './Statistics.module.css';
import colorGenerator from '../../utils/utils';

type Stat = {
  id: string,
  label: string,
  percentage: number
};

interface Props {
  title?: string,
  stats: Stat[]
}

const Statistics = ({ title, stats }:Props) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.item}
              key={id}
              style={{ backgroundColor: colorGenerator() }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;

