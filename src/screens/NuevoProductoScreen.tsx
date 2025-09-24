import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const NuevoProductoScreen = ({ navigation }: any) => {
  const [form, setForm] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    estado: 'Disponible',
    categoria: '',
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Nuevo Producto</Text>
      
      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el nombre"
        value={form.nombre}
        onChangeText={(text) => setForm({ ...form, nombre: text })}
      />
      
      <Text style={styles.label}>Descripción</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Ingrese la descripción"
        value={form.descripcion}
        onChangeText={(text) => setForm({ ...form, descripcion: text })}
        multiline
        numberOfLines={3}
      />
      
      <Text style={styles.label}>Estado</Text>
      <TextInput
        style={styles.input}
        placeholder="Disponible o No disponible"
        value={form.estado}
        onChangeText={(text) => setForm({ ...form, estado: text })}
      />
      
      <Text style={styles.label}>Categoría</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese la categoría"
        value={form.categoria}
        onChangeText={(text) => setForm({ ...form, categoria: text })}
      />
      
      <Text style={styles.label}>Precio</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el precio"
        value={form.precio}
        onChangeText={(text) => setForm({ ...form, precio: text })}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Fotografía</Text>
      <TouchableOpacity style={styles.fotoButton}>
        <Text style={styles.fotoButtonText}>Seleccionar Foto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.guardarButton}>
        <Text style={styles.guardarButtonText}>Guardar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  fotoButton: {
    backgroundColor: '#FF9500',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  fotoButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  guardarButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  guardarButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NuevoProductoScreen;