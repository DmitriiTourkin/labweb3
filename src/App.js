import './App.css';
import Calculator from "./Calculator";
import { useState } from "react";

const scientists = [
  {
    id: 1,
    name: "Альберт Эйнштейн",
    age: 76,
    gender: "мужской",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
    numberOfArticles: 301,
    fieldOfScience: "Физика",
    country: "Германия"
  },
  {
    id: 2,
    name: "Мария Кюри",
    age: 66,
    gender: "женский",
    imageUrl: "https://i.pinimg.com/originals/de/93/32/de933204572d2b72eeec814a502afadb.jpg",
    numberOfArticles: 48,
    fieldOfScience: "Физика и химия",
    country: "Польша"
  },
  {
    id: 3,
    name: "Чарльз Дарвин",
    age: 73,
    gender: "мужской",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Charles_Darwin_seated_crop.jpg/220px-Charles_Darwin_seated_crop.jpg",
    numberOfArticles: 25,
    fieldOfScience: "Биология",
    country: "Великобритания"
  },
  {
    id: 4,
    name: "Нильс Бор",
    age: 77,
    gender: "мужской",
    imageUrl: "https://cheese-head.ru/wp-content/uploads/3/9/f/39f7f91ae8f588256e50853e86232c4c.jpeg",
    numberOfArticles: 119,
    fieldOfScience: "Физика",
    country: "Дания"
  },
  {
    id: 5,
    name: "Александр Флеминг",
    age: 73,
    gender: "мужской",
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-2644207.jpg?resize=1200:*",
    numberOfArticles: 162,
    fieldOfScience: "Медицина",
    country: "Великобритания"
  },
  {
    id: 6,
    name: "Иван Павлов",
    age: 86,
    gender: "мужской",
    imageUrl: "https://i.pinimg.com/originals/ac/10/d3/ac10d38a659e0400bf05db051401ab54.jpg",
    numberOfArticles: 200,
    fieldOfScience: "Физиология",
    country: "Россия"
  },
  {
    id: 7,
    name: "Никола Тесла",
    age: 86,
    gender: "мужской",
    imageUrl: "https://sun9-18.userapi.com/impg/xTJpstQAye6IOtKZWfBWTF5CJ0fG4xXxR31TrQ/4-tL-wyQ-NQ.jpg?size=700x712&quality=96&sign=a415b9ee6496d8b35f9ca0b50ae2f22c&c_uniq_tag=XMOpInuWrOd6g34sp5N5wQ0AbueowJWitk-1XUkwmGg&type=album",
    numberOfArticles: 112,
    fieldOfScience: "Физика",
    country: "Сербия"
  },
  {
    id: 8,
    name: "Эдвард Дженнер",
    age: 73,
    gender: "мужской",
    imageUrl: "https://ru.citaty.net/media/authors/edward-jenner.jpg",
    numberOfArticles: 38,
    fieldOfScience: "Медицина",
    country: "Великобритания"
  },
  {
    id: 9,
    name: "Галилео Галилей",
    age: 77,
    gender: "мужской",
    imageUrl: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2003/04/galileo_galilei_1564_-_1642/10321948-2-eng-GB/Galileo_Galilei_1564_-_1642_pillars.jpg",
    numberOfArticles: 60,
    fieldOfScience: "Астрономия и физика",
    country: "Италия"
  },
  {
    id: 10,
    name: "Рита Леви-Монтальчини",
    age: 103,
    gender: "женский",
    imageUrl: "https://avatars.dzeninfra.ru/get-zen_doc/3704848/pub_63a9ec2199fe4052b8b90ccc_63a9f3a51538732532d1ff40/scale_1200",
    numberOfArticles: 150,
    fieldOfScience: "Биология",
    country: "Италия"
  }
];




function App() {
  return (
    <div className="App">
      <TableView data={scientists}/>
    </div>
  );
}

function Description() {
  return (
      <div>
        <p>Вы можете сортировать данные по столбцу</p>
        <p>Вы можете искать по научной области</p>
      </div>
  )
}

function TableView(props) {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [filter, setFilter] = useState("");

  const handleSortClick = (param) => {
    if (sortBy === param) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(param);
      setSortOrder("asc");
    }
  };

  const filteredData = props.data.filter((person) =>
    person.fieldOfScience.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedData = filteredData.slice().sort((a, b) => {
    if (sortOrder === "asc") {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    } else {
      return a[sortBy] < b[sortBy] ? 1 : -1;
    }
  });

  return (
    <>
      <h1>Справочник персоналий</h1>
      <div className="table table-responsive">
        <label htmlFor="filter">Фильтр по научной области:</label>
        <input
          type="text"
          id="filter"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
        <table className="table-striped table-hover table-sm">
          <thead className="table-dark">
            <tr>
              <th>№</th>
              <th onClick={() => handleSortClick("name")}>Имя</th>
              <th onClick={() => handleSortClick("age")}>Возраст</th>
              <th onClick={() => handleSortClick("numberOfArticles")}>
                Количество статей
              </th>
              <th onClick={() => handleSortClick("fieldOfScience")}>
                Область науки
              </th>
              <th onClick={() => handleSortClick("country")}>Страна</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((onePerson) => (
              <tr key={onePerson.id}>
                <td>{onePerson.id}</td>
                <td>
                  <img src={onePerson.imageUrl} className="person-image" />
                  <figcaption>{'\n'+onePerson.name}</figcaption>
                </td>
                <td>{onePerson.age}</td>
                <td>{onePerson.numberOfArticles}</td>
                <td>{onePerson.fieldOfScience}</td>
                <td>{onePerson.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;