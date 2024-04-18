const UserProfileManager = {
  users: [],
    
  generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
  },
    
  addUser(userInfo) {
    const id = this.generateUniqueId();
    const names = { id, ...userInfo };
    this.users.push(names);
  },
    
  removeUser(userId) {
    this.users = this.users.filter(user => user.id !== userId);
  },
    
  updateUser(userId, newInfo) {
    this.users = this.users.map(user => {
      if (user.id === userId) {
        return { ...user, ...newInfo };
      }
      return user;
      });
    },
    
  findUserByName(name) {
    return this.users.filter(user => user.name.includes(name));
  },
    
  getAllUsers() {
    return this.users;
  }
};
  
  // Пример использования:
  
  const profileManager = Object.create(UserProfileManager);
  
  profileManager.addUser({ name: "Alice", email: "alice@example.com" });
  profileManager.addUser({ name: "Bob", email: "bob@example.com" });
  
  console.log(profileManager.getAllUsers()); // Выводит информацию о Alice и Bob
  
  profileManager.updateUser(profileManager.users[0].id, { name: "Alicia" }); // Обновляет имя Alice на Alicia
  profileManager.removeUser(profileManager.users[1].id); // Удаляет Bob
  
  console.log(profileManager.findUserByName("Ali")); // Находит Alicia