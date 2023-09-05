import { Aside } from "./style";
import React, { SetStateAction } from "react";

const categories = [
  "NEWS",
  "CHARACTERS",
  "ARMORIES",
  "AUCTIONS",
  "GUILDS",
  "MARKETS",
  "GAMECONTENTS",
];

export const Sidebar = ({
  currentCategory,
  setCurrentCategory,
}: {
  currentCategory: string;
  setCurrentCategory: React.Dispatch<SetStateAction<string>>;
}) => {
  return (
    <section>
      <Aside>
        <ul>
          {categories.map(category => (
            <li
              key={category}
              className={category === currentCategory ? "item-selected" : ""}
              onClick={() => setCurrentCategory(category)}
            >
              <p>{category}</p>
            </li>
          ))}
        </ul>
      </Aside>
    </section>
  );
};
