import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./User";
import CustomButton from "./shared/CustomButton";
import AddUser from "./AddUser";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Tariq", email: "tariq@gmail.com", isBlocked: true },
    { id: 2, name: "Anas", email: "anas@gmail.com", isBlocked: false },
    { id: 3, name: "Hala", email: "hala@gmail.com", isBlocked: true },
    { id: 4, name: "Asmaa", email: "asmaa@gmail.com", isBlocked: false },
  ]);

  setUsers(users);

  return (
    <section className="container">  
      <div className="">
        <h1 className="text-center mb-4">Add Users</h1>
        <AddUser />

        <h2 className="mb-4 text-center">Users Table</h2>
        <div className="table-responsive">
          <table className="table table-hover table-bordered w-100">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <User
                  id={user.id}
                  name={user.name}
                  email={user.email}
                  isBlocked={user.isBlocked}
                  key={index}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default App;
