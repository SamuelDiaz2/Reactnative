import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image
} from "react-native";

export default function App() {
  const [tipo, setTipo] = useState(null);
  const [marcaSeleccionada, setMarcaSeleccionada] = useState(null);

  const carros = [
    {
      nombre: "Toyota",
      imagen: "https://cdn-icons-png.flaticon.com/512/741/741407.png"
    },
    {
      nombre: "BMW",
      imagen: "https://cdn-icons-png.flaticon.com/512/741/741464.png"
    },
    {
      nombre: "Ford",
      imagen: "https://cdn-icons-png.flaticon.com/512/741/741421.png"
    }
  ];

  const motos = [
    {
      nombre: "Yamaha",
      imagen: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
    },
    {
      nombre: "Honda",
      imagen: "https://cdn-icons-png.flaticon.com/512/2972/2972187.png"
    },
    {
      nombre: "Suzuki",
      imagen: "https://cdn-icons-png.flaticon.com/512/2972/2972179.png"
    }
  ];

  const marcas = tipo === "carro" ? carros : motos;

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Escoge tu vehículo</Text>

      <View style={styles.botones}>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => {
            setTipo("carro");
            setMarcaSeleccionada(null);
          }}
        >
          <Text style={styles.textoBoton}>🚗 Carro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boton}
          onPress={() => {
            setTipo("moto");
            setMarcaSeleccionada(null);
          }}
        >
          <Text style={styles.textoBoton}>🏍 Moto</Text>
        </TouchableOpacity>
      </View>

      {tipo && (
        <>
          <Text style={styles.subtitulo}>
            Selecciona una marca
          </Text>

          <FlatList
            data={marcas}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.card,
                  marcaSeleccionada === item.nombre && styles.cardSeleccionada
                ]}
                onPress={() => setMarcaSeleccionada(item.nombre)}
              >
                <Image
                  source={{ uri: item.imagen }}
                  style={styles.imagen}
                />

                <Text style={styles.nombreMarca}>
                  {item.nombre}
                </Text>
              </TouchableOpacity>
            )}
          />

          {marcaSeleccionada && (
            <Text style={styles.resultado}>
              Marca seleccionada: {marcaSeleccionada}
            </Text>
          )}
        </>
      )}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    marginTop: 50
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20
  },

  subtitulo: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center"
  },

  botones: {
    flexDirection: "row",
    justifyContent: "space-around"
  },

  boton: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 10
  },

  textoBoton: {
    color: "white",
    fontSize: 18
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginVertical: 8
  },

  cardSeleccionada: {
    backgroundColor: "#d6eaf8",
    borderColor: "#3498db"
  },

  imagen: {
    width: 50,
    height: 50,
    marginRight: 15
  },

  nombreMarca: {
    fontSize: 18
  },

  resultado: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold"
  }

});