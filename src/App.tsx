import React, { ChangeEvent, useState } from 'react';
import UploadFile from './components/upload-file';

interface User {
  id: number;
  name: string;
  email: string;
}

// Определение интерфейса для структуры JSON файла
interface UsersJson {
  users: User[];
}

const JsonFileReader: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const text = e.target?.result as string;
        try {
          const json = JSON.parse(text) as UsersJson;
          setUsers(json.users); // Установка массива пользователей из json
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      };

      reader.readAsText(file);
    }
  };

  return (
    <div>
      {/* <input type="file" onChange={handleFileChange} accept=".json" />
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      )} */}
      <UploadFile />
    </div>
  );
};

export default JsonFileReader;

