import { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder } from './orders.js';

// Tambahkan pesanan
addOrder('Alice', [
  { name: 'Nasi Goreng', price: 20000 },
  { name: 'Teh Manis', price: 5000 },
]);

addOrder('Bob', [
  { name: 'Mie Goreng', price: 15000 },
  { name: 'Kopi', price: 10000 },
]);

console.log('Pesanan awal:', orders);

// Perbarui status pesanan
updateOrderStatus(orders[0].id, 'Diproses');
updateOrderStatus(orders[1].id, 'Selesai');

console.log('Setelah update status:', orders);

// Hitung total pendapatan
const totalRevenue = calculateTotalRevenue();
console.log(`Total pendapatan: ${totalRevenue}`);

// Hapus pesanan
deleteOrder(orders[0].id);

console.log('Setelah penghapusan:', orders);
