import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from "react-native";

export default function App() {
  const [tipo, setTipo] = useState(null);

  const carros = [
    "Toyota",
    "Chevrolet",
    "Ford",
    "BMW",
    "Mercedes-Benz"
  ];

  const motos = [
    "Yamaha",
    "Honda",
    "Suzuki",
    "Kawasaki",
    "Ducati"
  ];

  const marcas = tipo === "carro" ? carros : motos;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Selecciona un vehículo</Text>

      <View style={styles.botones}>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => setTipo("carro")}
        >
          <Text style={styles.textoBoton}>Carro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boton}
          onPress={() => setTipo("moto")}
        >
          <Text style={styles.textoBoton}>Moto</Text>
        </TouchableOpacity>
      </View>

      {tipo && (
        <>
          <Text style={styles.subtitulo}>
            Marcas de {tipo === "carro" ? "Carros" : "Motos"}
          </Text>

          <FlatList
            data={marcas}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.itemTexto}>{item}</Text>
              </View>
            )}
          />
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
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd"
  },
  itemTexto: {
    fontSize: 18
  }
});