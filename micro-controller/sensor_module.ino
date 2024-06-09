#include <DHT.h>

#define DHTPIN 2     // Pin sensor terhubung
#define DHTTYPE DHT22   // Tipe sensor DHT22

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
}

void loop() {
  delay(2000);  // Delay antar bacaan

  // Membaca kelembapan dan suhu
  float humidity = dht.readHumidity();
  float temp = dht.readTemperature();  // Membaca suhu dalam Celsius

  if (isnan(humidity) || isnan(temp)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  Serial.print("Temperature : ");
  Serial.print(temp);
  Serial.print("|");
  Serial.print("Humidity : ");
  Serial.println(humidity);
}