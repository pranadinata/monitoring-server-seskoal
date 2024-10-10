#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>

const char *id = "1";
const char *ssid = "IOT-INFOLAHTA";
const char *password = "infolahta08!";
const char *host = "http://iotinfolahta.local:3300/whatsapp/get-temperature";

WiFiClient wifiClient;
HTTPClient http;

void setup() {
  Serial.begin(9600);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
}

void loop() {
  if (Serial.available()) {
    String data = Serial.readStringUntil('\n'); // Membaca satu baris dari serial
    if (WiFi.status() == WL_CONNECTED) {
      processSensorData(data);
    }
  }
}

void processSensorData(String data) {
  int tempIndex = data.indexOf("Temperature : ");
  int humidityIndex = data.indexOf("|Humidity : ");
  int endOfLineIndex = data.length(); 

  if (tempIndex >= 0 || humidityIndex >= 0) {
    // Extract temperature
    String tempString = data.substring(tempIndex + 14, humidityIndex);
    float temperature = tempString.toFloat();

      // Extract humidity
    String humidityString = data.substring(humidityIndex + 12, endOfLineIndex);
    float humidity = humidityString.toFloat();


    http.begin(wifiClient, host);
    http.addHeader("Content-Type", "application/json");
    
    String httpRequestData = "{\"Id\":" + String(id) + ",\"Temperature\":" + String(temperature) + ",\"Kelembapan\":" + String(humidity) + "}";

    int httpResponseCode = http.POST(httpRequestData);

    if (httpResponseCode > 0) {
        String response = http.getString();
        Serial.println(httpRequestData);
        Serial.println(response);
    } else {
        Serial.print("Error on sending POST: ");
        Serial.println(httpResponseCode);
    }
    
    http.end();
    delay(10000); // Delay 10 Detik
  }
}
