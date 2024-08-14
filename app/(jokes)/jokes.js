import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";
import { globalStyles } from "../../styles/gobalStyles";

const initialJokes = [
  {
    id: generateRandomString(),
    content: "What is a koala bear’s favorite drink ? - Koka-Koala !",
    highlight: "Koka-Koala",
  },
  {
    id: generateRandomString(),
    content:
      "What is a koala bear’s favorite line in the movie “The Sixth Sense”? - “Aussie dead people.”",
    highlight: "Aussie",
  },
  {
    id: generateRandomString(),
    content:
      "Why did the koala bear eat so much eucalyptus ? - He simply couldn’t leaf it alone.",
    highlight: "leaf",
  },
];

function generateRandomString() {
  return Math.random().toString(36).substring(2);
}

export default function App() {
  const [jokes, setJokes] = useState(initialJokes);
  const [joke, setJoke] = useState({ id: "", content: "", highlight: "" });

  function handleAddJoke() {
    setJokes([...jokes, joke]);
    setJoke({ id: generateRandomString(), content: "", highlight: "" });
  }

  function makeMeBeautiful({ content, highlight }) {
    const colors = ["#fbbf24", "#38bdf8", "#10b981", "#14b8a6"];
    const emojis = ["😭", "😁", "😍", "😆"];
    const current = makeMeBeautiful.current || 0;
    makeMeBeautiful.current = (current + 1) % colors.length;

    const start = content.indexOf(highlight);
    const before = content.substring(0, start);
    const after = content.substring(start + highlight.length);

    return (
      <View key={generateRandomString()} style={styles.jokeContainer}>
        <Text>{before}</Text>
        {highlight && (
          <Text
            style={[styles.highlight, { backgroundColor: colors[current] }]}
          >
            {highlight}
          </Text>
        )}
        <Text>{after}</Text>
        <Text style={styles.emoji}>{emojis[current]}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        The Notebook for
        <Text style={styles.titleHighlight}>
          a chuckle
          <Text style={styles.titleEmoji}>😂</Text>
        </Text>
      </Text>

      {jokes.map((randomJoke) => makeMeBeautiful(randomJoke))}

      <View style={styles.form}>
        <Text style={globalStyles.paragraph}>new joke</Text>
        <TextInput
          style={styles.input}
          value={joke.content}
          onChangeText={(text) =>
            setJoke({ ...joke, content: text, highlight: "" })
          }
        />
        <Pressable style={styles.button} onPress={handleAddJoke}>
          <Text>Add</Text>
        </Pressable>
      </View>

      <View>
        <Text style={globalStyles.paragraph}>
          {joke.content ? "Preview" : "Type something ..."}
        </Text>
        <View style={styles.previewContainer}>
          {joke.content && (
            <Pressable
              onPress={() =>
                setJoke({
                  ...joke,
                  highlight: joke.content.substring(
                    joke.content.lastIndexOf(" ") + 1
                  ),
                })
              }
            >
              {makeMeBeautiful(joke)}
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  titleHighlight: {
    marginHorizontal: 8,
    backgroundColor: "#86efac",
    padding: 5,
    transform: [{ rotate: "-3deg" }],
  },
  titleEmoji: {
    position: "absolute",
    top: -20,
    right: -10,
    transform: [{ rotate: "12deg" }],
  },

  jokeContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    position: "relative",
  },
  highlight: {
    borderRadius: 4,
    padding: 4,
    transform: [{ rotate: "-2deg" }],
  },
  emoji: {
    position: "absolute",
    right: -10,
    top: -10,
  },
  form: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    backgroundColor: "white",
    flex: 1,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#d1d5db",
    padding: 10,
    borderRadius: 8,
  },
  previewContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  paragraph: {
    color: "white",
  },
});
