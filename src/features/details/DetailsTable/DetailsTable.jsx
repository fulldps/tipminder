import * as styles from "./DetailsTable.module.css";

const MOCK_DETAILS_TABLE = [
  {
    id: 1,
    date: "12/10/2023",
    location: "Georgia",
    amountOfTips: "$6.54",
  },
  {
    id: 2,
    date: "12/10/2023",
    location: "Georgia",
    amountOfTips: "$6.54",
  },
  {
    id: 3,
    date: "12/10/2023",
    location: "Georgia",
    amountOfTips: "$6.54",
  },
  {
    id: 4,
    date: "12/10/2023",
    location: "Georgia",
    amountOfTips: "$6.54",
  },
  {
    id: 5,
    date: "12/10/2023",
    location: "Georgia",
    amountOfTips: "$6.54",
  },
  {
    id: 6,
    date: "12/10/2023",
    location: "Georgia",
    amountOfTips: "$6.54",
  },
  {
    id: 7,
    date: "12/10/2023",
    location: "Georgia",
    amountOfTips: "$6.54",
  },
  {
    id: 8,
    date: "12/10/2023",
    location: "Georgia",
    amountOfTips: "$6.54",
  },
  {
    id: 9,
    date: "12/10/2023",
    location: "Georgia",
    amountOfTips: "$6.54",
  },
  {
    id: 10,
    date: "12/10/2023",
    location: "Georgia",
    amountOfTips: "$6.54",
  },
];

export default function DetailsTable() {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">Data</th>
            <th scope="col">Location</th>
            <th scope="col">Amount of tips transferred</th>
          </tr>
        </thead>
        <tbody>
          {MOCK_DETAILS_TABLE.map((detail) => (
            <tr key={detail.id}>
              <td>{detail.date}</td>
              <td>{detail.location}</td>
              <td>{detail.amountOfTips}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
