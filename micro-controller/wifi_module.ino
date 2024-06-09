#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>

// const char *ssid = "PROLiNK_PRC3801_9F80";
// const char *password = "prolink12345";
const char *id = ""
const char *name = ""
const char *ssid = "Dragon_Fly";
const char *password = "yesaya29";
const char *host = "http://192.168.194.34:3300/whatsapp/get-temperature";

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
  int endOfLineIndex = data.indexOf('\n', humidityIndex);

  if (tempIndex >= 0 || humidityIndex >= 0) {
    // Extract temperature
    String tempString = data.substring(tempIndex + 14, humidityIndex);
    float temperature = tempString.toFloat();

    // Extract humidity
    String humidityString = data.substring(humidityIndex + 14, endOfLineIndex);
    float humidity = humidityString.toFloat();

    http.begin(wifiClient, host);
    http.addHeader("Content-Type", "application/json");

    String httpRequestData = "{
            \"Id\":" + String(id) +",
            \"Name\":" + String(name) +",
            \"Temperature\":" + String(humidity) +",
            \"Kelembapan\":" + String(humidity) +",
        }";

    int httpResponseCode = http.POST(httpRequestData);

    if (httpResponseCode > 0) {
        String response = http.getString();
        Serial.println(response);
    } else {
        Serial.print("Error on sending POST: ");
        Serial.println(httpResponseCode);
    }
    
    http.end();
    delay(5000);
  }
}




