import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductoCard = () => {
  const producto = {
    id: 1,
    nombre: 'Laptop HP',
    descripcion: 'Laptop Hp',
    precio: 1200,
    estado: 'Disponible',
    categoria: 'Tecnología',
    fotografia: 'https://via.placeholder.com/150'
  };

  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: producto.fotografia }} 
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.nombre}>{producto.nombre}</Text>
        <Text style={styles.precio}>${producto.precio}</Text>
        <Text style={styles.estado}>{producto.estado}</Text>
      </View>
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
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

export default ProductoCard;