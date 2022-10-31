import React, { useEffect, useState } from 'react';
import User from '../components/User';
import Pagination from '../components/Pagination';

const API_URL = 'https://randomuser.me/api/?page=1&results=50&nat-us';

const USER_PER_PAGE = 5;

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleClick = (pageNum) => setPage(pageNum);

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
    return;
  };

  const handleNext = () => {
    if (page < 10) setPage(page + 1);
    return;
  };
  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      const response = await fetch(`${API_URL}`);
      setIsLoading(false);
      const data = await response.json();

      setUsers(data.results);

      setTotalPages(Math.floor(data.results.length) / 5);
    };
    fetchUsers();
  }, []);

  const startIndex = (page - 1) * USER_PER_PAGE;
  const selectedUsers = users.slice(startIndex, startIndex + USER_PER_PAGE);

  return (
    <div>
      <h1>Users Pages</h1>
      <p>Page {page}</p>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        selectedUsers.map((user) => <User key={user.login.uuid} user={user} />)
      )}
      <Pagination
        totalPages={totalPages}
        handleClick={handleClick}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
}
