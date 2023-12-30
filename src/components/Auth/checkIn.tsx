import React, { useState, useEffect } from "react";

// Định nghĩa kiểu dữ liệu cho đối tượng user
interface User {
  id: string;
  password: string;
}

const App = () => {
    const [data, setData] = useState<{ users: User[] }>();
  
    const loadData = async () => {
      const response = await fetch("account.json");
      const jsonData = await response.json();
      setData(jsonData);
    };
  
    // Hàm thêm tài khoản mới với id và password được truyền vào
    const addUser = async (id: string, password: string) => {
      // Tạo một tài khoản mới với id và password được truyền vào
      const newUser: User = {
        id,
        password,
      };
  
      // Cập nhật state với tài khoản mới
      setData((prevData) => {
        return {users: [...(prevData?.users || []), newUser]};
      });
  
      // Gửi yêu cầu POST để ghi lại dữ liệu mới vào file JSON
      await fetch("account.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ users: [...(data?.users || []), newUser] }), // Chuyển dữ liệu mới (bao gồm cả tài khoản mới) thành chuỗi JSON để gửi đi
      });
    };
  
    useEffect(() => {
      loadData();
    }, []);
  

  };
  
  export default App;