const allVocabulary = [
{ spanish : 'Por favor', type: 'Phrase', english: 'Please'},
{ spanish : 'Gracias', type: 'Phrase', english: 'Thank you'},
{ spanish : 'Muchas gracias', type: 'Phrase', english: 'Thank you very much'},
{ spanish : 'de nada', type: 'Phrase', english: 'Welcome'},
{ spanish : 'Lo Siento', type: 'Phrase', english: 'I am sorry'},
{ spanish : 'Lo Siento Mucho', type: 'Phrase', english: 'I am so sorry'},
{ spanish : 'Disculpe', type: 'Phrase', english: 'Excuse me'},
{ spanish : 'Perdon', type: 'Phrase', english: 'sorry'},
{ spanish : 'Con Permiso', type: 'Phrase', english: 'excuse me'},
{ spanish : 'Café ', type: 'Noun', english: 'Coffee'},
{ spanish : 'Agua', type: 'Noun', english: 'Water'},
{ spanish : 'Cerveza', type: 'Noun', english: 'Beer'},
{ spanish : 'Poner', type: 'Verb', english: 'to Put'},
{ spanish : 'Uno, Dos, tres …', type: 'Digits', english: 'One, two, three'},
{ spanish : 'Azul', type: 'Noun', english: 'Blue'},
{ spanish : 'Rojo | Roja', type: 'Noun', english: 'Red'},
{ spanish : 'Amarillo | Amarilla', type: 'Noun', english: 'Yellow'},
{ spanish : 'Verde', type: 'Noun', english: 'Green'},
{ spanish : 'Marrón', type: 'Noun', english: 'Brown'},
{ spanish : 'Morado | Morada', type: 'Noun', english: 'Purple'},
{ spanish : 'Rosa | Rosado', type: 'Noun', english: 'Pink'},
{ spanish : 'Negro | Negra', type: 'Noun', english: 'Black'},
{ spanish : 'Blanco | Blanca', type: 'Noun', english: 'White'},
{ spanish : 'Gris', type: 'Noun', english: 'Grey'},
{ spanish : 'Naranja', type: 'Noun', english: 'Orange'},
{ spanish : 'Mesa', type: 'Noun', english: 'Table'},
{ spanish : 'Silla', type: 'Noun', english: 'Chair'},
{ spanish : 'Bolsa', type: 'Noun', english: 'Bag'},
{ spanish : 'Libro', type: 'Noun', english: 'Book'},
{ spanish : 'Espejo', type: 'Noun', english: 'Mirror'},
{ spanish : 'Boligrapho', type: 'Noun', english: 'Pen'},
{ spanish : 'Comida', type: 'Noun', english: 'Food'},
{ spanish : 'Pan', type: 'Noun', english: 'Bread'},
{ spanish : 'Arroz', type: 'Noun', english: 'Rice'},
{ spanish : 'Huevo', type: 'Noun', english: 'Egg'},
{ spanish : 'Carne', type: 'Noun', english: 'Meat'},
{ spanish : 'Cerdo', type: 'Noun', english: 'Pork / Pig'},
{ spanish : 'Pollo', type: 'Noun', english: 'Chicken'},
{ spanish : 'Carne de vaca', type: 'Noun', english: 'Beef'},
{ spanish : 'Pescado', type: 'Noun', english: 'Fish'},
{ spanish : 'Verduras', type: 'Noun', english: 'Vegetable'},
{ spanish : 'Lechuga', type: 'Noun', english: 'Lettuce'},
{ spanish : 'Cebolla', type: 'Noun', english: 'Onion'},
{ spanish : 'Ajo', type: 'Noun', english: 'Garlic'},
{ spanish : 'Pimento', type: 'Noun', english: 'Pepper'},
{ spanish : 'Zanahoria', type: 'Noun', english: 'Carrot'},
{ spanish : 'Tomate', type: 'Noun', english: 'Tomato'},
{ spanish : 'Frutas', type: 'Noun', english: 'Fruits'},
{ spanish : 'Manzana', type: 'Noun', english: 'Apple'},
{ spanish : 'Plátano', type: 'Noun', english: 'Banana'},
{ spanish : 'Piña', type: 'Noun', english: 'Pineapple'},
{ spanish : 'Fresa', type: 'Noun', english: 'Strawberry'},
{ spanish : 'Uva', type: 'Noun', english: 'Grape'},
{ spanish : 'Bebida', type: 'Noun', english: 'drink'},
{ spanish : 'Leche', type: 'Noun', english: 'Milk'},
{ spanish : 'Té', type: 'Noun', english: 'Tea'},
{ spanish : 'Azúcar', type: 'Noun', english: 'Sugar'},
{ spanish : 'Miel', type: 'Noun', english: 'Honey'},
{ spanish : 'Quiero', type: 'Verb', english: 'I want'},
{ spanish : 'con', type: 'Perposition', english: 'with'},
{ spanish : 'Animales', type: 'Noun', english: 'Animals'},
{ spanish : 'gato', type: 'Noun', english: 'Cat'},
{ spanish : 'Perro', type: 'Noun', english: 'Dog'},
{ spanish : 'Pajaro', type: 'Noun', english: 'Bird'},
{ spanish : 'Elephante', type: 'Noun', english: 'Elephant'},
{ spanish : 'Léon', type: 'Noun', english: 'Lion'},
{ spanish : 'oso', type: 'Noun', english: 'Bear'},
{ spanish : 'Caballo', type: 'Noun', english: 'Horse'},
{ spanish : 'tigre', type: 'Noun', english: 'Tiger'},
{ spanish : 'Toro', type: 'Noun', english: 'Bull'},
{ spanish : 'Tortuga', type: 'Noun', english: 'Turtle'},
{ spanish : 'Cerdo', type: 'Noun', english: 'Pork / Pig'},
{ spanish : 'Vaca', type: 'Noun', english: 'Cow'},
{ spanish : 'Oveja', type: 'Noun', english: 'Sheep'},
{ spanish : 'Pato', type: 'Noun', english: 'duck'},
{ spanish : 'Correr', type: 'Verb', english: 'To run'},
{ spanish : 'Caminar', type: 'Verb', english: 'To Walk'},
{ spanish : 'Saltar', type: 'Verb', english: 'To Jump'},
{ spanish : 'Rapido', type: 'Adverb', english: 'Fast'},
{ spanish : 'Despacio', type: 'Adverb', english: 'Slowly'},
{ spanish : 'Yo / Mi / Me', type: 'Pronoun', english: 'I '},
{ spanish : 'Tú, Usted (formal)', type: 'Pronoun', english: 'You'},
{ spanish : 'El', type: 'Pronoun', english: 'He'},
{ spanish : 'Ella', type: 'Pronoun', english: 'She '},
{ spanish : 'Nosotros', type: 'Pronoun', english: 'We'},
{ spanish : 'Vosotros', type: 'Pronoun', english: 'You all'},
{ spanish : 'Ellos, Ellas, Ustedes', type: 'Pronoun', english: 'They'},
{ spanish : 'Ejercicio', type: 'Noun', english: 'Exercise'},
{ spanish : 'Hacer', type: 'Verb', english: 'To do'},
{ spanish : 'Nadar', type: 'Verb', english: 'To swim'},
{ spanish : 'Bailar', type: 'Verb', english: 'To dance'},
{ spanish : 'Montar', type: 'Verb', english: 'To mount '},
{ spanish : 'Jugar', type: 'Verb', english: 'To play'},
{ spanish : 'Sudar', type: 'Verb', english: 'To Sweat'},
{ spanish : 'Me guesta', type: 'Phrase', english: 'I like'},
{ spanish : 'Me encantada', type: 'Phrase', english: 'I love'},
{ spanish : 'Ser', type: 'Verb', english: 'to be'},
{ spanish : 'Estar', type: 'Verb', english: 'to be'},
{ spanish : 'Tener', type: 'Verb', english: 'to have'},
{ spanish : 'Ir', type: 'Verb', english: 'to go'},
{ spanish : 'Poder', type: 'Verb', english: 'to be able to'},
{ spanish : 'Hablar', type: 'Verb', english: 'to speak'},
{ spanish : 'Ver', type: 'Verb', english: 'to see'},
{ spanish : 'Saber', type: 'Verb', english: 'to know'},
{ spanish : 'Conocer', type: 'Verb', english: 'to know'},
{ spanish : 'Poner', type: 'Verb', english: 'to put'},
{ spanish : 'Decir', type: 'Verb', english: 'to say'},
{ spanish : 'Querer', type: 'Verb', english: 'to want'},
{ spanish : 'Dar', type: 'Verb', english: 'to give'},
{ spanish : 'Comer', type: 'Verb', english: 'to eat'},
{ spanish : 'Tomar', type: 'Verb', english: 'to take'},
{ spanish : 'Soy de', type: 'Phrase', english: 'I am from'},
{ spanish : 'Estados unidos', type: 'Noun', english: 'United States'},
{ spanish : 'Mi nombre es', type: 'Phrase', english: 'My name is'},
{ spanish : '¿Cuál es tu nombre?', type: 'Phrase', english: 'What is your name?'},
{ spanish : '¿ Qué tal ?', type: 'Phrase', english: 'Whats up?'},
{ spanish : '¿ Qué passa ?', type: 'Phrase', english: 'Whats up?'},
{ spanish : 'Bien, ¿ y tú ?', type: 'Phrase', english: 'Good, and you?'},
{ spanish : 'Claro', type: 'Phrase', english: 'Sure / Of course'},
{ spanish : 'Necesitar', type: 'Verb', english: 'to need'},
{ spanish : 'con', type: 'Preposition', english: 'with'},
{ spanish : 'cubiertos', type: 'Noun', english: 'Cutlery'},
{ spanish : 'Tenedor', type: 'Noun', english: 'Fork'},
{ spanish : 'Cuchillo', type: 'Noun', english: 'Knife'},
{ spanish : 'Cuchara', type: 'Noun', english: 'Spoon'},
{ spanish : 'Plato', type: 'Noun', english: 'Plate'},
{ spanish : 'Bol', type: 'Noun', english: 'Bowl'},
{ spanish : 'Entiendes', type: 'Verb', english: 'to understand'},
{ spanish : 'Alto | Alta', type: 'Adjective', english: 'tall'},
{ spanish : 'Fechas', type: 'Noun', english: 'Dates'},
{ spanish : 'Semana', type: 'Noun', english: 'Week'},
{ spanish : 'Lunes', type: 'Noun', english: 'Monday'},
{ spanish : 'Martes', type: 'Noun', english: 'Tuesday'},
{ spanish : 'Miercoles', type: 'Noun', english: 'Wednesday'},
{ spanish : 'Jueves', type: 'Noun', english: 'Thursday'},
{ spanish : 'Vienes', type: 'Noun', english: 'Friday'},
{ spanish : 'Sábado', type: 'Noun', english: 'Saturday'},
{ spanish : 'Domingo', type: 'Noun', english: 'Sunday'},
{ spanish : 'año', type: 'Noun', english: 'Year'},
{ spanish : 'meses', type: 'Noun', english: 'months'},
{ spanish : 'mes', type: 'Noun', english: 'month'},
{ spanish : 'Enero', type: 'Noun', english: 'January'},
{ spanish : 'Febrero', type: 'Noun', english: 'February'},
{ spanish : 'Marzo', type: 'Noun', english: 'March'},
{ spanish : 'Abril', type: 'Noun', english: 'April'},
{ spanish : 'Mayo', type: 'Noun', english: 'May'},
{ spanish : 'Junio', type: 'Noun', english: 'June'},
{ spanish : 'Julio', type: 'Noun', english: 'July'},
{ spanish : 'Augusto', type: 'Noun', english: 'August'},
{ spanish : 'Septiembre', type: 'Noun', english: 'September'},
{ spanish : 'Octubre', type: 'Noun', english: 'October'},
{ spanish : 'Noviembre', type: 'Noun', english: 'November'},
{ spanish : 'Diciembre', type: 'Noun', english: 'December'},
{ spanish : 'Cuarto', type: 'Noun', english: 'Quarter'},
{ spanish : 'Media', type: 'Noun', english: 'Half'},
{ spanish : 'menos', type: 'Noun', english: 'minus'},
{ spanish : 'Preguntas', type: 'Noun', english: 'Questions'},
{ spanish : 'Qué', type: 'Question', english: 'What'},
{ spanish : 'Quién', type: 'Question', english: 'Who'},
{ spanish : 'Por qué', type: 'Question', english: 'Why'},
{ spanish : 'Dónde', type: 'Question', english: 'Where'},
{ spanish : 'Cuánto', type: 'Question', english: 'How much / How many'},
{ spanish : 'Cuándo', type: 'Question', english: 'When'},
{ spanish : 'Cómo', type: 'Question', english: 'How'},
{ spanish : 'Padres', type: 'Noun', english: 'Parents'},
{ spanish : 'Madre', type: 'Noun', english: 'Mother'},
{ spanish : 'Padre', type: 'Noun', english: 'Father'},
{ spanish : 'Parientes', type: 'Noun', english: 'Relatives'},
{ spanish : 'relativos', type: 'Noun', english: 'Relatives'},
{ spanish : 'Hermano', type: 'Noun', english: 'Brother'},
{ spanish : 'Hermana', type: 'Noun', english: 'Sister'},
{ spanish : 'Hermanos', type: 'Noun', english: 'Siblings'},
{ spanish : 'Abuelo', type: 'Noun', english: 'Grand father'},
{ spanish : 'Abuela', type: 'Noun', english: 'Grand mother'},
{ spanish : 'Abuelos', type: 'Noun', english: 'Grand parents'},
{ spanish : 'Tío', type: 'Noun', english: 'Uncle'},
{ spanish : 'Tía', type: 'Noun', english: 'Aunt'},
{ spanish : 'Tíos', type: 'Noun', english: 'Uncles / Aunts'},
{ spanish : 'Primo', type: 'Noun', english: 'Male cousin'},
{ spanish : 'Prima', type: 'Noun', english: 'Female cousin'},
{ spanish : 'Sobrino', type: 'Noun', english: 'Nephew'},
{ spanish : 'Sobrina', type: 'Noun', english: 'Niece'},
{ spanish : 'hijo', type: 'Noun', english: 'Son'},
{ spanish : 'hija', type: 'Noun', english: 'Daughter'},
{ spanish : 'hijos', type: 'Noun', english: 'Children'},
{ spanish : 'nieto', type: 'Noun', english: 'Grand son'},
{ spanish : 'nieta', type: 'Noun', english: 'Grand daughter'},
{ spanish : 'nietos', type: 'Noun', english: 'Grand Children'},
{ spanish : 'esposo', type: 'Noun', english: 'Male spouse'},
{ spanish : 'esposa', type: 'Noun', english: 'Female spouse'},
{ spanish : 'bisabuelo', type: 'Noun', english: 'great grand father'},
{ spanish : 'bisabuela', type: 'Noun', english: 'great grand mother'},
{ spanish : 'bisnieto', type: 'Noun', english: 'great grand son'},
{ spanish : 'bisnieta', type: 'Noun', english: 'great grand daughter'},
{ spanish : 'Familia', type: 'Noun', english: 'family'},
{ spanish : 'feliz', type: 'Adjective', english: 'happy'},
{ spanish : 'triste', type: 'Adjective', english: 'sad'},
{ spanish : 'Emocionado | a', type: 'Adjective', english: 'excited'},
{ spanish : 'Cansado | a', type: 'Adjective', english: 'tired'},
{ spanish : 'Enfadado | a', type: 'Adjective', english: 'angry'},
{ spanish : 'Enojado | a', type: 'Adjective', english: 'angry'},
{ spanish : 'Preocupado | a', type: 'Adjective', english: 'worried'},
{ spanish : 'aburrido | a', type: 'Adjective', english: 'bored'},
{ spanish : 'confundido | a', type: 'Adjective', english: 'confused'},
{ spanish : 'Enamorado | a', type: 'Adjective', english: 'In love'},
{ spanish : 'Asustado | a', type: 'Adjective', english: 'scared'},
{ spanish : 'frustrado | a', type: 'Adjective', english: 'frustrated'},
{ spanish : 'soprendido | a', type: 'Adjective', english: 'surprised'},
{ spanish : 'cómodo | a ', type: 'Adjective', english: 'comfortable'},
{ spanish : 'Incómodo | a ', type: 'Adjective', english: 'Uncomfortable'},
{ spanish : 'Avergonzado | a', type: 'Adjective', english: 'embarrassed'},
{ spanish : 'Timido | a ', type: 'Adjective', english: 'shy'},
{ spanish : 'Nervioso | a', type: 'Adjective', english: 'nervous'},
{ spanish : 'Ansioso | a', type: 'Adjective', english: 'anxious'},
{ spanish : 'Me Siento', type: 'Verb', english: 'I feel'},
{ spanish : 'Sentirse', type: 'Verb', english: 'to feel'},
{ spanish : 'Cuerpo', type: 'Noun', english: 'body'},
{ spanish : 'cabeza', type: 'Noun', english: 'head'},
{ spanish : 'cara', type: 'Noun', english: 'face'},
{ spanish : 'ojos', type: 'Noun', english: 'eyes'},
{ spanish : 'orejas', type: 'Noun', english: 'ears'},
{ spanish : 'pecho', type: 'Noun', english: 'chest'},
{ spanish : 'brazos', type: 'Noun', english: 'arms'},
{ spanish : 'piernas', type: 'Noun', english: 'legs'},
{ spanish : 'pies', type: 'Noun', english: 'feet'},
{ spanish : 'manos', type: 'Noun', english: 'hands'},
{ spanish : 'dedos', type: 'Noun', english: 'fingers'},
{ spanish : 'dedos de pies', type: 'Noun', english: 'toes'},
{ spanish : 'espalda', type: 'Noun', english: 'back'},
{ spanish : 'rodilla', type: 'Noun', english: 'knee'},
{ spanish : 'codo', type: 'Noun', english: 'elbow'},
{ spanish : 'hombro', type: 'Noun', english: 'shoulder'},
{ spanish : 'tobillo', type: 'Noun', english: 'ankle'},
{ spanish : 'dientes', type: 'Noun', english: 'teeth'},
{ spanish : 'estómago', type: 'Noun', english: 'stomach'},
{ spanish : 'cadera', type: 'Noun', english: 'hip'},
{ spanish : 'pelo', type: 'Noun', english: 'hair'},
{ spanish : 'cabello', type: 'Noun', english: 'hair'},
{ spanish : 'muñeca', type: 'Noun', english: 'wrist'},
{ spanish : 'tocar', type: 'Verb', english: 'to touch'},
{ spanish : 'Bello | a', type: 'Adjective', english: 'pretty'},
{ spanish : 'Atractivo | a', type: 'Adjective', english: 'attractive'},
{ spanish : 'Alto | a', type: 'Adjective', english: 'tall'},
{ spanish : 'Corto | a', type: 'Adjective', english: 'short'},
{ spanish : 'Delgado | a', type: 'Adjective', english: 'skinny'},
{ spanish : 'Gordo | a', type: 'Adjective', english: 'fat'},
{ spanish : 'Hermoso | a', type: 'Adjective', english: 'gorgeous'},
{ spanish : 'Feo | a', type: 'Adjective', english: 'ugly'},
{ spanish : 'Musculoso | a', type: 'Adjective', english: 'mascular'},
{ spanish : 'Guapo | a', type: 'Adjective', english: 'good looking'},
{ spanish : 'moreno', type: 'Noun', english: 'Brunette'},
{ spanish : 'Morena', type: 'Noun', english: 'Brunette'},
{ spanish : 'Rubio', type: 'Noun', english: 'Blonde'},
{ spanish : 'Rubia', type: 'Noun', english: 'Blonde'},
{ spanish : 'Pelo canoso', type: 'Noun', english: 'Grey hair'},
{ spanish : 'Pelo Rojo', type: 'Noun', english: 'Red hair'},
{ spanish : 'Palido | a', type: 'Adjective', english: 'pale'},
{ spanish : 'Ojos azules', type: 'Noun', english: 'blue eyes'},
{ spanish : 'Joven', type: 'Adjective', english: 'young'},
{ spanish : 'Mayor', type: 'Adjective', english: 'old'},
{ spanish : 'viejo | a', type: 'Adjective', english: 'old'},
{ spanish : 'Personalidad', type: 'Noun', english: 'personality'},
{ spanish : 'amable', type: 'Adjective', english: 'kind'},
{ spanish : 'valiente', type: 'Adjective', english: 'brave'},
{ spanish : 'sensible', type: 'Adjective', english: 'sensitive'},
{ spanish : 'horrible', type: 'Adjective', english: 'horrible'},
{ spanish : 'ambicioso | a', type: 'Adjective', english: 'ambitious'},
{ spanish : 'apasionado | a', type: 'Adjective', english: 'passionate'},
{ spanish : 'cuidadoso | a', type: 'Adjective', english: 'careful'},
{ spanish : 'cinico | a', type: 'Adjective', english: 'cynical'},
{ spanish : 'dependiente', type: 'Adjective', english: 'dependent'},
{ spanish : 'independiente', type: 'Adjective', english: 'indepenedent'},
{ spanish : 'fuerte', type: 'Adjective', english: 'strong'},
{ spanish : 'divertido | a', type: 'Adjective', english: 'fun'},
{ spanish : 'gracioso | a', type: 'Adjective', english: 'funny'},
{ spanish : 'dulce', type: 'Adjective', english: 'sweet'},
{ spanish : 'educado | a', type: 'Adjective', english: 'polite'},
{ spanish : 'inteligente', type: 'Adjective', english: 'intelligent'},
{ spanish : 'generoso | a', type: 'Adjective', english: 'generous'},
{ spanish : 'paciente', type: 'Adjective', english: 'patient'},
{ spanish : 'impaciente', type: 'Adjective', english: 'impatient'},
{ spanish : 'impulsivo | a', type: 'Adjective', english: 'impulsive'},
{ spanish : 'interesante', type: 'Adjective', english: 'interesting'},
{ spanish : 'malo | a', type: 'Adjective', english: 'bad'},
{ spanish : 'mentiroso | a', type: 'Adjective', english: 'liar'},
{ spanish : 'perezoso | a', type: 'Adjective', english: 'lazy'},
{ spanish : 'poderoso | a', type: 'Adjective', english: 'powerful'},
{ spanish : 'positivo | a', type: 'Adjective', english: 'positive'},
{ spanish : 'reservado | a', type: 'Adjective', english: 'reserved'},
{ spanish : 'serio | a', type: 'Adjective', english: 'serious'},
{ spanish : 'simpatico | a', type: 'Adjective', english: 'nice'},
{ spanish : 'talentoso | a', type: 'Adjective', english: 'talented'},
{ spanish : '¿ Cómo eres ?', type: 'Question', english: 'What are you'},
{ spanish : '¿ Quién eres ?', type: 'Question', english: 'Who are you'},
{ spanish : 'Lugares', type: 'Noun', english: 'Places'},
{ spanish : 'Lugar', type: 'Noun', english: 'Place'},
{ spanish : 'Tienda', type: 'Noun', english: 'store'},
{ spanish : 'Escuela', type: 'Noun', english: 'school'},
{ spanish : 'Biblioteca', type: 'Noun', english: 'library'},
{ spanish : 'Supermercado', type: 'Noun', english: 'Supermarket'},
{ spanish : 'Edificio', type: 'Noun', english: 'Building'},
{ spanish : 'Oficina', type: 'Noun', english: 'Office'},
{ spanish : 'Estación de tren', type: 'Noun', english: 'Train Station'},
{ spanish : 'Estación de autobús', type: 'Noun', english: 'Bus station'},
{ spanish : 'Playa', type: 'Noun', english: 'Beach'},
{ spanish : 'Restaurante', type: 'Noun', english: 'Restaurant'},
{ spanish : 'Parque', type: 'Noun', english: 'Park'},
{ spanish : 'Iglesia', type: 'Noun', english: 'Church'},
{ spanish : 'Cine', type: 'Noun', english: 'Cinema'},
{ spanish : 'Correo', type: 'Noun', english: 'Post Office'},
{ spanish : 'Calle', type: 'Noun', english: 'Street'},
{ spanish : 'Esquina', type: 'Noun', english: 'Corner'},
{ spanish : 'a lado de', type: 'Phrase', english: 'next to'},
{ spanish : 'detrás de', type: 'Phrase', english: 'behind of'},
{ spanish : 'a la izquierda de', type: 'Phrase', english: 'To the left of'},
{ spanish : 'a la deracha de', type: 'Phrase', english: 'To the right of'},
{ spanish : 'primero', type: 'Noun', english: 'first'},
{ spanish : 'Luego', type: 'Pronoun', english: 'Then'},
{ spanish : 'Girar', type: 'Verb', english: 'to turn'},
{ spanish : 'Cruzar', type: 'Verb', english: 'to cross'},
{ spanish : 'Sigue derecho', type: 'Phrase', english: 'Continue Straight'},
{ spanish : 'Entre', type: 'Preposition', english: 'between'},
{ spanish : 'En frente', type: 'Preposition', english: 'Opposite'},
{ spanish : 'Delante de', type: 'Phrase', english: 'In front of'},
{ spanish : '¿ Dónde está ?', type: 'Question', english: 'Where is'},
{ spanish : '¿ Adónde vas ?', type: 'Question', english: 'Where are you going?'},
{ spanish : '¿ Adónde voy ?', type: 'Question', english: 'Where am I going?'},
{ spanish : 'precio', type: 'Noun', english: 'Price'},
{ spanish : 'rebaja', type: 'Noun', english: 'discount'},
{ spanish : 'Bolsa de plástico', type: 'Noun', english: 'Plastic bag'},
{ spanish : 'Bolsa de papel', type: 'Noun', english: 'Paper bag'},
{ spanish : 'pasillo', type: 'Noun', english: 'Aisle'},
{ spanish : 'Caja', type: 'Noun', english: 'counter'},
{ spanish : 'Carrito', type: 'Noun', english: 'cart'},
{ spanish : 'Frutas y verduras', type: 'Noun', english: 'Fruits and Vegetables'},
{ spanish : 'Carne', type: 'Noun', english: 'Meat'},
{ spanish : 'Productos lácteos', type: 'Noun', english: 'Dairy'},
{ spanish : 'pasta', type: 'Noun', english: 'Pasta'},
{ spanish : 'Pan', type: 'Noun', english: 'Bread'},
{ spanish : 'Dulces', type: 'Noun', english: 'Sweets'},
{ spanish : 'Comprar', type: 'Verb', english: 'to buy'},
{ spanish : 'Costar', type: 'Verb', english: 'to cost'},
{ spanish : 'Hay', type: 'Phrase', english: 'There is '},
{ spanish : 'Casa', type: 'Noun', english: 'House'},
{ spanish : 'Cocina', type: 'Noun', english: 'Kitchen'},
{ spanish : 'Salón', type: 'Noun', english: 'Living room'},
{ spanish : 'Comedor', type: 'Noun', english: 'Dining Room'},
{ spanish : 'Dormitorio', type: 'Noun', english: 'Bed room'},
{ spanish : 'Habitacion', type: 'Noun', english: 'Bed room'},
{ spanish : 'Baño', type: 'Noun', english: 'Bathroom'},
{ spanish : 'Sótano', type: 'Noun', english: 'Basement'},
{ spanish : 'Escaleras', type: 'Noun', english: 'Stairs'},
{ spanish : 'Puerta', type: 'Noun', english: 'Door'},
{ spanish : 'Ventana', type: 'Noun', english: 'Window'},
{ spanish : 'Techo', type: 'Noun', english: 'Roof / Ceiling'},
{ spanish : 'Lámpara', type: 'Noun', english: 'Lamp'},
{ spanish : 'Reloj', type: 'Noun', english: 'Clock'},
{ spanish : 'Televisión', type: 'Noun', english: 'Television'},
{ spanish : 'Cama', type: 'Noun', english: 'Bed'},
{ spanish : 'Armario', type: 'Noun', english: 'Wardrobe / Closet'},
{ spanish : 'Refrigerador', type: 'Noun', english: 'Refrigerator'},
{ spanish : 'Frigorifico', type: 'Noun', english: 'Refrigerator'},
{ spanish : 'Fregadero', type: 'Noun', english: 'Kitchen Sink'},
{ spanish : 'Limpiar', type: 'Verb', english: 'to clean'},
{ spanish : 'Lavar', type: 'Verb', english: 'to wash'},
{ spanish : 'Barrer', type: 'Verb', english: 'to sweep'},
{ spanish : 'Ducha', type: 'Noun', english: 'Shower'},
{ spanish : 'Lavamanos', type: 'Noun', english: 'Sink'},
{ spanish : 'Espejo', type: 'Noun', english: 'Mirror'},
{ spanish : 'Cepillo', type: 'Noun', english: 'Brush'},
{ spanish : 'Cepillo de dientes', type: 'Noun', english: 'Tooth Brush'},
{ spanish : 'Secador', type: 'Noun', english: 'Hair Dryer'},
{ spanish : 'Jabón', type: 'Noun', english: 'Soap'},
{ spanish : 'Champu', type: 'Noun', english: 'Shampoo'},
{ spanish : 'Acondicionador', type: 'Noun', english: 'Conditioner'},
{ spanish : 'Crema dental', type: 'Noun', english: 'Toothpaste'},
{ spanish : 'inodoro', type: 'Noun', english: 'Toilet'},
{ spanish : 'Esponja', type: 'Noun', english: 'Sponge'},
{ spanish : 'Papel higiénico', type: 'Noun', english: 'Toilet Paper'},
{ spanish : 'Toalla', type: 'Noun', english: 'Towel'},
{ spanish : 'Cepillarse', type: 'Verb', english: 'To Brush'},
{ spanish : 'Ducharse', type: 'Verb', english: 'To Shower'},
]