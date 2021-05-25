import { useState, useEffect } from "react";
const api = process.env.REACT_APP_API_URL;

const SearchForm = ({ param, setParam }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${api}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  }, []);

  return (
    <form>
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(e) => setParam({ ...param, name: e.target.value })}
        />
        <select
          value={param.personId}
          onChange={(e) => setParam({ ...param, personId: e.target.value })}
        >
          <option value="">负责人</option>
          {users.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default SearchForm;
