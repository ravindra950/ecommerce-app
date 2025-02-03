
export const fetchOrders = async () => {
    return [
      { id: 1, userId: 1, total: 100, status: "Shipped" },
      { id: 2, userId: 2, total: 50, status: "Pending" },
    ];
  };
  
  export const fetchUsers = async () => {
    return [
      { id: 1, name: "Ravindra Kambale", email: "ravik@gmail.com" },
      { id: 2, name: "Vaibhav Joshi", email: "vaibhavjosh@gmail.com" },
    ];
  };
  