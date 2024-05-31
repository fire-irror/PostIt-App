import React, { useEffect, useState } from "react";
import styles from '../../css/search/search.module.css';
import logo from '../../assets/logo.svg';
import searchImg from '../../assets/search.svg';
import data from "../../../data.json"

interface UserData {
  name: string;
  concept: string;
  team1: string;
  team2?: string;
  team3?: string;
  team4?: string;
  team5?: string;
  team6?: string;
  type: string;
  image: string;
}

const categories = [
  { name: "web", label: "웹사이트", size: "l" },
  { name: "app", label: "앱", size: "s" },
  { name: "game", label: "게임", size: "m" }
];

const categories1 = [
  { name: "rest", label: "쉼표", size: "m" },
  { name: "doubleQuotes", label: "쌍따옴표", size: "l" },
  { name: "ExclamationMark", label: "느낌표", size: "m" },
  { name: "period", label: "온점", size: "m" },
  { name: "global", label: "글로벌", size: "m" },
  { name: "club", label: "동아리", size: "m" }
]

const Search: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("");
  const [userData, setUserData] = useState<UserData[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    setUserData(data);
  }, []);

  const handleSearch = () => {
    if (searchInput === "") {
      alert("검색어를 입력하세요");
    } else {
      const filtered = data.filter(item => item.name.includes(searchInput));
      setUserData(filtered);
    }
    console.log(userData);
  };

  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} alt="logo" />

      <input
        className={styles.searchInput}
        placeholder="작품 이름 혹은 학생 이름을 입력하세요"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <img src={searchImg} className={styles.searchImg} alt="search" onClick={handleSearch} />
      <p className={styles.title}>검색 카테고리</p>

      <div className={styles.wrapCategory}>
        {categories.map((category) => (
          <button
            key={category.name}
            className={`${styles.button} ${activeButton === category.name ? styles.active : ""} ${styles[category.size]}`}
            onClick={() => setActiveButton(category.name)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <p className={styles.title}>부스 주제</p>
      <div className={styles.wrapCategory1}>
        {categories1.map((category) => (
          <button
            key={category.name}
            className={`${styles.button} ${activeButton === category.name ? styles.active : ""} ${styles[category.size]}`}
            onClick={() => setActiveButton(category.name)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <p className={styles.title1}>전체보기</p>

      <div className={styles.wrapData}>
        {userData.map((item, index) => (
          <div key={index} className={styles.wrapContent}>
            <img src={item.image} alt={item.name} className={styles.image} />

            <div className={styles.wrapText}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.teamName}>{item.team1} {item.team2} {item.team3} {item.team4} {item.team5} {item.team6}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;