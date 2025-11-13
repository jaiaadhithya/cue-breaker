flowchart TD
    Power["Battery/5V USB"] -- "3.3V/5V Reg" --> MCU
    MCU["Arduino (Nano 33 BLE / ESP32)"]
    subgraph Sensors
      IMU["IMU (Accel/Gyro)"]
      FSR["Force Sensor"]
      ENV["Ambient Light/Temp"]
      BTN["Push Button"]
    end
    BLE["BLE Radio"]
    LED["Status LED"]
    Phone["Android App"]

    Power --> MCU
    MCU <--> IMU
    MCU <--> FSR
    MCU <--> ENV
    MCU --> LED
    MCU <--> BLE
    BLE --- Phone
