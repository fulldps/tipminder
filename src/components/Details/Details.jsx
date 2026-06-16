import InfoCard from "./InfoCard/InfoCard";
import DetailsTable from "./DetailsTable/DetailsTable";

import * as styles from "./Details.module.css";
import DetailsChart from "./DetailsChart/DetailsChart";

export default function Details({ user }) {
  const cards = [
    {
      id: 1,
      title: "Username",
      info: user.firstName,
      linkTitle: "Edit profile",
      link: "#",
    },
    {
      id: 2,
      title: "Card",
      info: user.bank.cardNumber,
      linkTitle: "See other cards",
      link: "#",
    },
    {
      id: 3,
      title: "Tips transferred",
      info: "18292",
      linkTitle: "View details",
      link: "#",
    },
    {
      id: 4,
      title: "Tips amount",
      info: "10$ (2030-12-31)",
      linkTitle: "View details",
      link: "#",
    },
    {
      id: 5,
      title: "GPT paid",
      info: "20$ (2030-12-31)",
      linkTitle: "View details",
      link: "#",
    },
    {
      id: 6,
      title: "Tips processing",
      info: "20$ (2030-12-31)",
      linkTitle: "View details",
      link: "#",
    },
  ];

  return (
    <>
      <h2>Details</h2>
      <section className={styles.detailsSection}>
        <div className={styles.cardsRow}>
          {cards.map((card) => (
            <InfoCard
              key={card.id}
              title={card.title}
              info={card.info}
              linkTitle={card.linkTitle}
              link={card.link}
            />
          ))}
        </div>
        <div className={styles.chartAndTable}>
          <DetailsChart />
          <DetailsTable />
        </div>
      </section>
    </>
  );
}
