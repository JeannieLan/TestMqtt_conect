// mqtt_functions.js

// 與 MQTT Broker 通信的設定
const mqttBroker = 'mqtt://mqtt-dashboard.com';  // 替換為你的 MQTT Broker 位址
const mqttClient = mqtt.connect(mqttBroker);


const mqttPayload = 'off';
const mqttTopic = 'TestMQTT_microbit';


function sendMessageToMQTT(message) {
  // 在這裡實現連接到 MQTT Broker 並發送訊息的邏輯
  // 這裡只是一個示例，實際上你需要根據你的情況實現 MQTT 連接和訊息發送的邏輯
  
  // 這裡可以使用任何 MQTT 客戶端庫來與 MQTT Broker 進行通信
  // 以下是一個假設的示例，假設你使用的是 mqtt.js 客戶端庫
  
  var mqtt = require('mqtt');
  
  var client = mqtt.connect(mqttBroker);
  
  client.on('connect', function () {
    client.publish('topic', message);
    client.end();
  });
}


mqttClient.on('connect', function () {
  console.log('Connected to MQTT broker');
  // 在這裡可以進行其他初始化或發送訊息的操作
});

mqttClient.on('error', function (error) {
  console.error('MQTT connection error:', error);
});

mqttClient.on('message', function (topic, message) {
  console.log('Received message:', message.toString());
  // 在這裡處理收到的 MQTT 訊息
});

mqttClient.publish(mqttTopic, mqttPayload, function (error) {
  if (error) {
    console.error('Error publishing MQTT message:', error);
  } else {
    console.log('MQTT message published successfully');
  }
});
