import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ProductosScreen = () => {

  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: 'Laptop HP',
      descripcion: 'Laptop HP con 8GB RAM y 256GB SSD',
      precio: 1200,
      estado: 'Disponible',
      categoria: 'Tecnología',
      fotografia: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      nombre: 'Mouse Inalámbrico',
      descripcion: 'Mouse ergonómico inalámbrico',
      precio: 25,
      estado: 'Disponible',
      categoria: 'Accesorios',
      fotografia: 'https://via.placeholder.com/150'
    }
  ]);

  const eliminarProducto = (id: number) => {
    setProductos(productos.filter(p => p.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Gestión de Productos</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Nuevo Producto</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image 
              source={{ uri: item.fotografia }} 
              style={styles.image}
            />
            <View style={styles.info}>
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text style={styles.precio}>${item.precio}</Text>
              <Text style={styles.estado}>{item.estado}</Text>
            </View>
            <TouchableOpacity 
              style={styles.deleteButton}
              onPress={() => eliminarProducto(item.id)}
            >
              <Text style={styles.deleteText}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  precio: {
    fontSize: 14,
    color: 'green',
  },
  estado: {
    fontSize: 12,
    color: 'gray',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
  },
  deleteText: {
    color: 'white',
    fontSize: 12,
  },
});

export default ProductosScreen;