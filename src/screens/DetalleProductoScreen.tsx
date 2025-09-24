import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ProductosScreen = ({ navigation }: any) => {
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
      <TouchableOpacity 
        style={styles.guardarButton}
        onPress={() => navigation.navigate('NuevoProducto')}
      >
        <Text style={styles.guardarButtonText}>+ Nuevo Producto</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>Detalle Items</Text>
      
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.infoContainer}>
              <Text style={styles.nombre}>Nombre: {item.nombre}</Text>
              <Text style={styles.precio}>Precio: ${item.precio}</Text>
              <Text style={styles.descripcion}>Descripción: {item.descripcion}</Text>
              
              <View style={styles.botonesContainer}>
                <TouchableOpacity 
                  style={styles.verButton}
                  onPress={() => navigation.navigate('DetalleProducto', { producto: item })}
                >
                  <Text style={styles.verButtonText}>Ver</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.verButton}
                  onPress={() => navigation.navigate('DetalleProducto', { producto: item })}
                >
                  <Text style={styles.verButtonText}>Ver</Text>
                </TouchableOpacity>
              </View>
            </View>
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
    padding: 15,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#333',
  },
  guardarButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  guardarButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoContainer: {
    flex: 1,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  precio: {
    fontSize: 14,
    marginBottom: 5,
    color: '#666',
  },
  descripcion: {
    fontSize: 14,
    marginBottom: 10,
    color: '#666',
  },
  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  verButton: {
    backgroundColor: '#34C759',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  verButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ProductosScreen;